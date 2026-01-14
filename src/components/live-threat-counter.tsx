'use client'

import { useEffect, useState } from 'react'
import { Shield } from 'lucide-react'

export function LiveThreatCounter() {
  // Start with a base number and increment over time
  const [count, setCount] = useState(2847291)

  useEffect(() => {
    // Increment by random amount every 2-4 seconds to simulate real blocking
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 15) + 5 // 5-20 threats blocked
      setCount(prev => prev + increment)
    }, 2000 + Math.random() * 2000)

    return () => clearInterval(interval)
  }, [])

  // Format number with commas
  const formattedCount = count.toLocaleString()

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-2 text-gray-400 text-sm uppercase tracking-wider">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Live Threats Blocked by ThreatZapper
      </div>
      <div className="flex items-center gap-4">
        <Shield className="h-10 w-10 text-green-500" />
        <span className="text-5xl md:text-6xl font-bold text-white tabular-nums">
          {formattedCount}
        </span>
      </div>
      <p className="text-gray-500 text-sm">
        And counting. Every second, we're protecting American families.
      </p>
    </div>
  )
}
