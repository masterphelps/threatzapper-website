import type { Metadata } from "next"
import Script from "next/script"
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
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '721725697029800');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=721725697029800&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* KillScale Pixel */}
        <Script id="killscale-pixel" strategy="afterInteractive">
          {`
            !function(k,s,p,i,x,e,l){if(k.ks)return;x=k.ks=function(){x.q.push(arguments)};
            x.q=[];e=s.createElement(p);l=s.getElementsByTagName(p)[0];
            e.async=1;e.src='https://pixel.killscale.com/ks.js';l.parentNode.insertBefore(e,l)
            }(window,document,'script');

            ks('init', 'KS-KIL-SACY', { secret: '598881274081441ba8cb8656cbeb603e' });
            ks('pageview');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
