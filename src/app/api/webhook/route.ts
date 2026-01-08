import { NextResponse } from "next/server"
import Stripe from "stripe"

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY is not set")
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-12-15.clover",
  })
}

// ShipStation API configuration
const SHIPSTATION_API_KEY = process.env.SHIPSTATION_API_KEY
const SHIPSTATION_API_SECRET = process.env.SHIPSTATION_API_SECRET

async function createShipStationOrder(session: Stripe.Checkout.Session) {
  // @ts-expect-error - shipping_details exists on completed sessions
  const shipping = session.shipping_details || session.collected_information?.shipping_details
  const customerEmail = session.customer_details?.email
  const stripe = getStripe()
  const lineItems = await stripe.checkout.sessions.listLineItems(session.id)

  // Calculate quantity from line items
  const quantity = lineItems.data.reduce((sum, item) => sum + (item.quantity || 1), 0)

  const order = {
    orderNumber: session.id.slice(-8).toUpperCase(),
    orderDate: new Date().toISOString(),
    orderStatus: "awaiting_shipment",
    customerEmail: customerEmail,
    billTo: {
      name: shipping?.name || customerEmail,
      street1: shipping?.address?.line1,
      street2: shipping?.address?.line2 || "",
      city: shipping?.address?.city,
      state: shipping?.address?.state,
      postalCode: shipping?.address?.postal_code,
      country: shipping?.address?.country,
      phone: session.customer_details?.phone || "",
    },
    shipTo: {
      name: shipping?.name,
      street1: shipping?.address?.line1,
      street2: shipping?.address?.line2 || "",
      city: shipping?.address?.city,
      state: shipping?.address?.state,
      postalCode: shipping?.address?.postal_code,
      country: shipping?.address?.country,
      phone: session.customer_details?.phone || "",
    },
    items: [
      {
        sku: "THREATZAPPER-001",
        name: "ThreatZapper",
        quantity: quantity,
        unitPrice: 149.0,
      },
    ],
    amountPaid: (session.amount_total || 0) / 100,
    shippingAmount: 0,
    paymentMethod: "Stripe",
    requestedShippingService: "usps_priority_mail",
  }

  // Create order in ShipStation
  const auth = Buffer.from(`${SHIPSTATION_API_KEY}:${SHIPSTATION_API_SECRET}`).toString("base64")

  const response = await fetch("https://ssapi.shipstation.com/orders/createorder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${auth}`,
    },
    body: JSON.stringify(order),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error("ShipStation error:", error)
    throw new Error(`ShipStation API error: ${response.status}`)
  }

  return response.json()
}

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get("stripe-signature")!
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set")
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 })
  }

  let event: Stripe.Event
  const stripe = getStripe()

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session

      console.log("Payment successful:", session.id)

      // Create order in ShipStation
      if (SHIPSTATION_API_KEY && SHIPSTATION_API_SECRET) {
        try {
          const shipstationOrder = await createShipStationOrder(session)
          console.log("ShipStation order created:", shipstationOrder.orderId)
        } catch (error) {
          console.error("Failed to create ShipStation order:", error)
          // Don't fail the webhook - payment was successful
          // You'll need to manually create the order
        }
      } else {
        console.log("ShipStation not configured - order requires manual fulfillment")
      }

      break
    }

    case "checkout.session.expired": {
      console.log("Checkout session expired:", event.data.object)
      break
    }

    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
