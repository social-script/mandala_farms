'use client'

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <SpeedInsights />
      <Analytics />
    </>
  )
} 