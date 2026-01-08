import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your ThreatZapper is on its way.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h2 className="font-semibold text-gray-900 mb-4">What happens next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Confirmation Email</div>
                  <div className="text-sm text-gray-500">
                    You'll receive an order confirmation email shortly.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Shipping Update</div>
                  <div className="text-sm text-gray-500">
                    We'll email tracking info within 1-2 business days.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Delivery</div>
                  <div className="text-sm text-gray-500">
                    Expected delivery in 3-5 business days.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/" className="block">
              <Button size="lg" className="w-full">
                Return to Homepage
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-gray-500">
              Questions? Email us at{" "}
              <a href="mailto:support@threatzapper.com" className="text-blue-600 hover:underline">
                support@threatzapper.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
