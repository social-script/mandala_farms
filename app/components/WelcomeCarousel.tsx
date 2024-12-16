'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface WelcomeCarouselProps {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  media: MediaItem[];
  theme?: 'light' | 'dark'
}

export default function WelcomeCarousel({
  badge,
  title,
  description,
  buttonText,
  media,
  theme = 'dark'
}: WelcomeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const styles = {
    light: {
      badge: 'bg-[#2F4538]/10 text-[#2F4538]',
      title: 'text-[#2F4538]',
      description: 'text-[#2F4538]/80',
      button: 'bg-[#2F4538] text-white hover:bg-[#2F4538]/90',
      dots: 'bg-[#2F4538]',
      dotsInactive: 'bg-[#2F4538]/30'
    },
    dark: {
      badge: 'bg-white/10 text-[#E8FF8B]',
      title: 'text-white',
      description: 'text-white/80',
      button: 'bg-white/90 backdrop-blur-sm text-[#2F4538] hover:bg-white',
      dots: 'bg-[#E8FF8B]',
      dotsInactive: 'bg-white/70'
    }
  }

  const currentStyle = styles[theme]

  const handleMediaEnd = () => {
    setCurrentIndex((current) => (current + 1) % media.length)
  }

  // Auto-advance for images
  useEffect(() => {
    if (media[currentIndex].type === 'image') {
      const timer = setInterval(() => {
        setCurrentIndex((current) => (current + 1) % media.length)
      }, 5000)

      return () => clearInterval(timer)
    }
  }, [currentIndex, media.length])

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <div className={`inline-block rounded-lg px-3 py-1.5 text-sm font-poppins font-medium tracking-wider ${currentStyle.badge}`}>
            {badge}
          </div>
          <h2 className={`font-playfair ${currentStyle.title} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight`}>
            {title}
          </h2>
          <p className={`font-poppins ${currentStyle.description} text-sm md:text-lg leading-relaxed`}>
            {description}
          </p>
          <Button 
            className={`rounded-full font-poppins text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5 ${currentStyle.button}`}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group">
          {media.map((item, index) => (
            <div
              key={`${item.type}-${index}`}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.alt || ''}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <video
                  ref={videoRef}
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  playsInline
                  onEnded={handleMediaEnd}
                />
              )}
            </div>
          ))}
          
          {/* Dots navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? `w-4 ${currentStyle.dots}` 
                    : currentStyle.dotsInactive
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />
        </div>
      </div>
    </section>
  )
} 