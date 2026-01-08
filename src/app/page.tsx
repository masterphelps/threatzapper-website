import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Zap, Globe, CheckCircle, XCircle, ArrowRight, Lock, Wifi, Router } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo1.png" alt="ThreatZapper" width={320} height={80} className="h-12 w-auto py-2" />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#how-it-works" className="hover:text-gray-900 transition">How It Works</a>
            <a href="#features" className="hover:text-gray-900 transition">Features</a>
            <a href="#compatibility" className="hover:text-gray-900 transition">Compatibility</a>
            <a href="#faq" className="hover:text-gray-900 transition">FAQ</a>
          </div>
          <Link href="/checkout">
            <Button size="sm">Buy Now - $199</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            82% of cyberattacks come from 7 hostile nations
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Protect Your Home
            <br />
            <span className="text-blue-600">From Foreign Threats</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            ThreatZapper blocks all internet traffic from Russia, China, North Korea, Iran, and other hostile nations.
            Plug it in. Forget about it. Stay protected.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/checkout">
              <Button size="xl" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Order Now - $199
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="xl" variant="outline" className="w-full sm:w-auto" asChild>
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Free Shipping
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              30-Day Guarantee
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              Made in USA
            </div>
          </div>
        </div>
      </section>

      {/* Threat Stats Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Threat Is Real
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every day, millions of attacks target American homes and businesses from hostile foreign nations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-red-600 mb-2">82%</div>
              <div className="text-gray-600">of cyberattacks originate from just 7 countries</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-blue-600 mb-2">400M+</div>
              <div className="text-gray-600">malicious IP addresses blocked by ThreatZapper</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-5xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600">configuration required - just plug it in</div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-6 text-center">Countries Blocked</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { flag: "🇷🇺", name: "Russia", pct: "34%" },
                { flag: "🇨🇳", name: "China", pct: "28%" },
                { flag: "🇰🇵", name: "North Korea", pct: "8%" },
                { flag: "🇮🇷", name: "Iran", pct: "6%" },
                { flag: "🇧🇾", name: "Belarus", pct: "3%" },
                { flag: "🇸🇾", name: "Syria", pct: "2%" },
                { flag: "🇻🇪", name: "Venezuela", pct: "1%" },
              ].map((country) => (
                <div key={country.name} className="flex items-center gap-3 bg-gray-50 px-4 py-3 rounded-lg">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <div className="font-medium text-gray-900">{country.name}</div>
                    <div className="text-xs text-gray-500">{country.pct} of attacks</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Set Up in 60 Seconds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No apps. No accounts. No IT degree required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Unplug Your Router</h3>
              <p className="text-gray-600">
                Disconnect the ethernet cable from your internet modem to your router.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Insert ThreatZapper</h3>
              <p className="text-gray-600">
                Connect your modem to ThreatZapper, then ThreatZapper to your router.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">You're Protected</h3>
              <p className="text-gray-600">
                That's it. ThreatZapper silently blocks threats 24/7. Nothing else to do.
              </p>
            </div>
          </div>

          {/* Network Diagram */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-center text-xl font-semibold mb-8 text-gray-300">Where ThreatZapper Fits</h3>

            {/* Desktop Diagram */}
            <div className="hidden md:flex items-center justify-center gap-4">
              {/* Internet */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center mb-3 border border-gray-600">
                  <Globe className="h-10 w-10 text-gray-300" />
                </div>
                <span className="text-sm text-gray-400">Internet</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center px-2">
                <div className="w-12 h-1 bg-gray-600 rounded relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-600 border-y-4 border-y-transparent"></div>
                </div>
              </div>

              {/* ISP Modem */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center mb-3 border border-gray-600">
                  <div className="text-center">
                    <div className="w-10 h-7 bg-gray-500 rounded-sm mx-auto mb-1 flex items-center justify-center">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-1 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-1 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-sm text-gray-400">ISP Modem</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center px-2">
                <div className="w-12 h-1 bg-gray-600 rounded relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-600 border-y-4 border-y-transparent"></div>
                </div>
              </div>

              {/* ThreatZapper - Highlighted */}
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center mb-3 border-2 border-blue-400 shadow-lg shadow-blue-500/30 relative">
                  <Image src="/shield-icon.svg" alt="ThreatZapper" width={48} height={48} className="h-12 w-12" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
                <span className="text-sm font-semibold text-blue-400">ThreatZapper</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center px-2">
                <div className="w-12 h-1 bg-gray-600 rounded relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-600 border-y-4 border-y-transparent"></div>
                </div>
              </div>

              {/* WiFi Router */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center mb-3 border border-gray-600">
                  <Router className="h-10 w-10 text-gray-300" />
                </div>
                <span className="text-sm text-gray-400">WiFi Router</span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center px-2">
                <div className="w-12 h-1 bg-gray-600 rounded relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-600 border-y-4 border-y-transparent"></div>
                </div>
              </div>

              {/* Your Devices */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-700 rounded-2xl flex items-center justify-center mb-3 border border-gray-600">
                  <Wifi className="h-10 w-10 text-gray-300" />
                </div>
                <span className="text-sm text-gray-400">Your Devices</span>
              </div>
            </div>

            {/* Mobile Diagram - Vertical */}
            <div className="md:hidden flex flex-col items-center gap-3">
              {[
                { icon: Globe, label: "Internet", highlight: false },
                { icon: null, label: "ISP Modem", highlight: false, isModem: true },
                { icon: null, label: "ThreatZapper", highlight: true, isZapper: true },
                { icon: Router, label: "WiFi Router", highlight: false },
                { icon: Wifi, label: "Your Devices", highlight: false },
              ].map((item, i) => (
                <div key={item.label} className="flex flex-col items-center">
                  {i > 0 && (
                    <div className="w-1 h-6 bg-gray-600 rounded mb-3 relative">
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-t-8 border-t-gray-600 border-x-4 border-x-transparent"></div>
                    </div>
                  )}
                  <div className={`${item.highlight ? 'w-20 h-20 bg-blue-600 border-2 border-blue-400' : 'w-16 h-16 bg-gray-700 border border-gray-600'} rounded-2xl flex items-center justify-center`}>
                    {item.isModem ? (
                      <div className="flex gap-0.5">
                        <div className="w-1 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-1 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-1 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    ) : item.isZapper ? (
                      <Image src="/shield-icon.svg" alt="ThreatZapper" width={40} height={40} className="h-10 w-10" />
                    ) : item.icon && (
                      <item.icon className={`${item.highlight ? 'h-10 w-10 text-white' : 'h-8 w-8 text-gray-300'}`} />
                    )}
                  </div>
                  <span className={`text-sm mt-2 ${item.highlight ? 'font-semibold text-blue-400' : 'text-gray-400'}`}>{item.label}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              ThreatZapper sits between your modem and router. Invisible protection - your network works exactly the same, minus the threats.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Real Protection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade security that anyone can use.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Geographic Blocking</h3>
              <p className="text-gray-600">
                Blocks 100% of IP addresses registered to hostile nations. Not just "known bad" IPs -
                every single address from these countries is blocked.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Zero Speed Impact</h3>
              <p className="text-gray-600">
                Hardware-accelerated filtering means your internet speed stays exactly the same.
                Gaming, streaming, video calls - everything works at full speed.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Truly Invisible</h3>
              <p className="text-gray-600">
                ThreatZapper operates in transparent bridge mode. It has no IP address on your network.
                Hackers can't even see it exists.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Set and Forget</h3>
              <p className="text-gray-600">
                No software to update. No subscriptions. No cloud accounts.
                ThreatZapper works offline and updates its blocklist automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What ThreatZapper Protects You From */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What ThreatZapper Protects You From
              </h2>
              <div className="grid gap-4">
                {[
                  "Foreign ransomware servers",
                  "Credential-stealing malware",
                  "Overseas phishing infrastructure",
                  "Botnet command-and-control endpoints",
                  "Malicious VPN exit nodes",
                  "Identity-theft payload servers",
                  "International brute-force sweeps",
                  "State-sponsored cyber espionage",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/product.png"
                alt="ThreatZapper Device"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built-In Intelligence */}
      <section className="py-20 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built-In Intelligence
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Advanced protection that works automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Real-time hostile nation IP blacklist",
              "Surgical country-level blocking",
              "Automatic blocklist updates",
              "Local splash page for blocked HTTP",
              "Instant TCP reset blocking for HTTPS",
              "On-device analytics and logs",
              "Exception request portal",
              "Admin approval system",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-gray-800 rounded-xl p-4">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-12 text-lg">
            Designed for homes, small businesses, studios, and creators who need<br className="hidden md:block" />
            military-grade security without complexity.
          </p>
        </div>
      </section>

      {/* Compatibility */}
      <section id="compatibility" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Works With Your Setup
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ThreatZapper works with most home internet configurations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-semibold text-green-900">Compatible</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Separate Modem + Router</div>
                    <div className="text-sm text-gray-600">Cable/DSL modem with your own router</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Fiber ONT + Router</div>
                    <div className="text-sm text-gray-600">Fiber optic with ethernet handoff</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">ISP Gateway in Bridge Mode</div>
                    <div className="text-sm text-gray-600">Gateway configured to pass-through to your router</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-2xl p-8 border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-semibold text-red-900">Not Compatible</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">All-in-One ISP Gateway</div>
                    <div className="text-sm text-gray-600">Combined modem/router that can't be bridged</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Mesh WiFi Only</div>
                    <div className="text-sm text-gray-600">Systems without ethernet WAN port</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Cellular/5G Home Internet</div>
                    <div className="text-sm text-gray-600">No ethernet connection from provider</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            Not sure about your setup? Email us at support@threatzapper.com and we'll help.
          </p>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-8 space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">Hardware</h3>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processor</span>
                  <span className="font-medium">Quad-core ARM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">RAM</span>
                  <span className="font-medium">1GB DDR4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ethernet</span>
                  <span className="font-medium">2x Gigabit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">WiFi</span>
                  <span className="font-medium">802.11ac (management)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Power</span>
                  <span className="font-medium">5V USB-C, 2A</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="font-semibold text-gray-900 mb-4">Performance</h3>
                <div className="flex justify-between">
                  <span className="text-gray-600">Throughput</span>
                  <span className="font-medium">1 Gbps wire-speed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Latency Added</span>
                  <span className="font-medium">&lt;1ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">IPs Blocked</span>
                  <span className="font-medium">400,000,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Update Method</span>
                  <span className="font-medium">Automatic via WiFi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Power Usage</span>
                  <span className="font-medium">~5W typical</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Do I need to replace my ISP gateway or modem?</AccordionTrigger>
              <AccordionContent>
                No. ThreatZapper plugs in between your gateway and your router or WiFi system.
                If your ISP gateway provides WiFi, you can turn off its WiFi and connect your
                new WiFi router behind ThreatZapper.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Does ThreatZapper inspect my data?</AccordionTrigger>
              <AccordionContent>
                No. It never looks inside your traffic. It only filters based on IP geography.
                Total privacy.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Will ThreatZapper slow down my network?</AccordionTrigger>
              <AccordionContent>
                No. It's designed to filter at full line speed without performance impact.
                Gaming, streaming, video calls - everything works at full speed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What if I need to access something from a blocked country?</AccordionTrigger>
              <AccordionContent>
                The admin interface lets you create temporary exceptions if absolutely necessary.
                But remember: 82% of attacks come from these nations for a reason.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What happens when a site is blocked?</AccordionTrigger>
              <AccordionContent>
                <strong>HTTP:</strong> You see a clean block page explaining why.<br />
                <strong>HTTPS:</strong> The connection is safely terminated immediately.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Why these 8 countries specifically?</AccordionTrigger>
              <AccordionContent>
                These nations are responsible for 82% of cyberattacks targeting Americans according
                to FBI, CISA, and Verizon DBIR reports. We're blocking the threat at its source.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Is there a monthly subscription?</AccordionTrigger>
              <AccordionContent>
                No. You pay once for the hardware and that's it. Blocklist updates are included free forever.
                We believe security shouldn't be a recurring tax on families.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stop Foreign Threats Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of American families who've taken control of their network security.
            30-day money-back guarantee.
          </p>
          <Link href="/checkout">
            <Button size="xl" className="bg-white text-blue-600 hover:bg-gray-100">
              Order ThreatZapper - $199
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-blue-200 mt-6 text-sm">
            Free shipping. No subscription. Ships within 3-5 business days.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo1.png" alt="ThreatZapper" width={160} height={40} className="h-8 w-auto brightness-0 invert" />
            </Link>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
              <a href="#" className="hover:text-white transition">Terms of Service</a>
              <a href="mailto:support@threatzapper.com" className="hover:text-white transition">Contact</a>
            </div>
            <div className="text-sm text-gray-500">
              © 2025 ThreatZapper. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
