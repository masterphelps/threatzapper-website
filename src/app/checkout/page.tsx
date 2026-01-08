"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("No checkout URL returned")
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Something went wrong. Please try again.")
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition">
            <ArrowLeft className="h-4 w-4" />
            Back to ThreatZapper
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Summary */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">ThreatZapper</h1>
                  <p className="text-gray-500">Network Security Appliance</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Blocks 400M+ hostile IP addresses
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Zero configuration required
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Automatic blocklist updates
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  No subscription fees
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Price</span>
                  <span className="font-medium">$199.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t border-gray-100">
                  <span>Total</span>
                  <span>${(199 * quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl mb-1">🔒</div>
                <div className="text-xs text-gray-500">Secure Checkout</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl mb-1">📦</div>
                <div className="text-xs text-gray-500">Free Shipping</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="text-2xl mb-1">↩️</div>
                <div className="text-xs text-gray-500">30-Day Returns</div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Complete Your Order</h2>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-xl font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={loading}
                size="xl"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Proceed to Payment</>
                )}
              </Button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You'll be redirected to Stripe for secure payment
              </p>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-xs text-gray-400 text-center mb-3">Accepted payment methods</p>
                <div className="flex justify-center gap-2">
                  <div className="px-3 py-1 bg-gray-100 rounded text-xs font-medium">Visa</div>
                  <div className="px-3 py-1 bg-gray-100 rounded text-xs font-medium">Mastercard</div>
                  <div className="px-3 py-1 bg-gray-100 rounded text-xs font-medium">Amex</div>
                  <div className="px-3 py-1 bg-gray-100 rounded text-xs font-medium">Apple Pay</div>
                </div>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="mt-6 bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-start gap-4">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold text-green-900">30-Day Money Back Guarantee</h3>
                  <p className="text-sm text-green-700 mt-1">
                    Not satisfied? Return it within 30 days for a full refund. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
