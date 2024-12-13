'use client'

import { useState, useRef, useEffect } from 'react'
import { Pause, Play } from 'lucide-react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error auto-playing video:", error)
        setIsPlaying(false)
      })
      setIsPlaying(true)
    }
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error)
          setIsPlaying(false)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="w-full bg-[#2F4538] px-4 py-12 md:py-24">
      <div className="container mx-auto">
        <div className="relative mb-8 md:mb-12 flex  justify-between">
          <p className="max-w-2xl font-poppins text-white/80 text-base md:text-lg leading-relaxed">
          In 2020, Rajeev and Pratiksha embarked on a transformative journey to Araku Valley, living in a tent for six months. This experience deepened their connection to nature and inspired the creation of a sustainable farm that thrives today.
          </p>
          <button className="font-poppins text-sm md:text-base text-[#E8FF8B] hover:text-[#E8FF8B]/80 transition-colors">
            EXPLORE ↓
          </button>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-black/20">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            poster="/video-poster.jpg"
            playsInline
            loop
            muted
            autoPlay
            onEnded={() => setIsPlaying(false)}
          >
            <source
              src="/mandala_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={togglePlayPause}
            className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex h-12 w-12 md:h-14 md:w-14 
                     items-center justify-center rounded-full bg-white/90 text-[#2F4538] 
                     backdrop-blur-sm transition-all duration-300
                     hover:bg-white hover:scale-105 active:scale-95"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 md:h-6 md:w-6" />
            ) : (
              <Play className="h-5 w-5 md:h-6 md:w-6" />
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

