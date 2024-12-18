"use client"

import { Play, Pause } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useRef } from 'react'

export default function ArakuValleyHero() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="container mx-auto px-4 pt-20 sm:pt-24 md:py-24">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group">
        {/* Main background video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        >
          <source src="/araku_valley.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/60" />
        
        {/* Main heading */}
        <h2 className="absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium text-center">
          Araku Valley
        </h2>

        {/* Info card */}
        <Card className="absolute bottom-4 md:bottom-8 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-white/10 backdrop-blur-sm border-0 text-white rounded-[1rem] md:rounded-[1.25rem] p-3 sm:p-4 lg:p-6">
          <div className="flex gap-3 sm:gap-4 lg:gap-6 items-center md:items-start">
            <div className="flex-1 space-y-2 md:space-y-4">
              <p className="font-poppins text-white/90 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                Experience the magic of Araku Valley, where misty mountains meet sustainable luxury. Our eco-retreat offers a perfect blend of comfort and natural beauty.
              </p>
            </div>
            
            {/* Thumbnail */}
            <div className="relative w-20 md:w-24 h-20 md:h-24 flex-shrink-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <video 
                  src="/araku_valley.mp4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="icon"
                  variant="ghost"
                  onClick={togglePlay}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                  <span className="sr-only">
                    {isPlaying ? 'Pause video' : 'Play video'}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
} 