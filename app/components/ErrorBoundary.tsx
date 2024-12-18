'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2F4538] px-4">
      <div className="text-center">
        <h2 className="text-[#E8FF8B] text-xl mb-4">Something went wrong!</h2>
        <button
          onClick={reset}
          className="bg-[#E8FF8B] text-[#2F4538] px-4 py-2 rounded-full hover:bg-[#E8FF8B]/90"
        >
          Try again
        </button>
      </div>
    </div>
  )
} 