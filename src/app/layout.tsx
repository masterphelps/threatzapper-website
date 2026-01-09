import type { Metadata } from "next"
import "./globals.css"

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
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
