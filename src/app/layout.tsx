import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ThreatZapper - Block Cyberattacks From Hostile Nations",
  description: "Protect your home network from 82% of cyberattacks. Simple plug-and-play device blocks all traffic from hostile nations. No configuration required.",
  keywords: ["network security", "firewall", "cyber protection", "home network security", "threat blocking"],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "ThreatZapper - Block Cyberattacks From Hostile Nations",
    description: "Protect your home network from 82% of cyberattacks. Simple plug-and-play device.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
