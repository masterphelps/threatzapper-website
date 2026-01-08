import { Button } from "@/components/ui/button"
import { XCircle, ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-lg w-full">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="h-10 w-10 text-gray-400" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Order Cancelled
          </h1>
          <p className="text-gray-600 mb-8">
            No worries - your cart is still waiting for you if you change your mind.
          </p>

          <div className="space-y-3">
            <Link href="/checkout" className="block">
              <Button size="lg" className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Checkout
              </Button>
            </Link>
            <Link href="/" className="block">
              <Button size="lg" variant="outline" className="w-full">
                Back to Homepage
              </Button>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm">
                Have questions?{" "}
                <a href="mailto:support@threatzapper.com" className="text-blue-600 hover:underline">
                  Contact us
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
