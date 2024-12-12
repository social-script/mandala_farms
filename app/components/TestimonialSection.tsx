'use client'

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface TestimonialSectionProps {
  theme?: 'dark' | 'light'
}

interface Testimonial {
  id: number
  quote: string
  author: string
  location: string
  image: string
  gradient: {
    dark: string
    light: string
  }
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Mandala Farms offers a perfect blend of luxury and nature. The eco-cottages are thoughtfully designed, and the farm-to-table experience is exceptional.",
    author: "Emma Thompson",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    gradient: {
      dark: "bg-gradient-to-br from-[#2F4538] via-[#3A5647] to-[#243A2D]",
      light: "bg-gradient-to-br from-[#FAF3E0] via-[#F5ECD6] to-[#EDE5CC]"
    }
  },
  {
    id: 2,
    quote: "The farm-to-table dining experience at Mandala Farms is unparalleled. Every meal was a celebration of local flavors and sustainable practices.",
    author: "Rajesh Sharma",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    gradient: {
      dark: "bg-gradient-to-br from-[#3A5647] via-[#2F4538] to-[#1F3225]",
      light: "bg-gradient-to-br from-[#F5ECD6] via-[#FAF3E0] to-[#F0E8D2]"
    }
  },
  {
    id: 3,
    quote: "I've never felt more connected to nature while enjoying such comfort. The morning views of Araku Valley are breathtaking.",
    author: "Priya Patel",
    location: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    gradient: {
      dark: "bg-gradient-to-br from-[#243A2D] via-[#2F4538] to-[#3A5647]",
      light: "bg-gradient-to-br from-[#EDE5CC] via-[#FAF3E0] to-[#F5ECD6]"
    }
  }
]

export default function TestimonialSection({ theme = 'dark' }: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const previousTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  // Start autoplay when component mounts
  useEffect(() => {
    setIsAutoPlaying(true)
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        nextTestimonial()
      }, 5000)
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [isAutoPlaying, nextTestimonial])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section 
      className={cn(
        "container mx-auto px-4 py-12 md:py-24",
        theme === 'light' ? 'text-[#2F4538]' : 'text-white'
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Left Column */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h3 className={cn(
              "font-poppins text-sm md:text-base font-medium tracking-wider",
              theme === 'light' ? 'text-[#2F4538]/70' : 'text-[#E8FF8B]'
            )}>
              GUEST EXPERIENCES
            </h3>
            <h2 className={cn(
              "font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1]",
              theme === 'light' ? 'text-[#2F4538]' : 'text-white'
            )}>
              Stories from<br />Our Guests
            </h2>
          </div>
          <p className={cn(
            "font-poppins text-sm md:text-lg leading-relaxed max-w-xl",
            theme === 'light' ? 'text-[#2F4538]/80' : 'text-white/80'
          )}>
            Discover what our guests have to say about their transformative experiences at Mandala Farms, where luxury meets sustainability.
          </p>
          <div className="flex items-center gap-6 md:gap-8">
            <div className="flex gap-3 md:gap-4">
              <button
                onClick={previousTestimonial}
                className={cn(
                  "p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300",
                  theme === 'light' 
                    ? 'bg-[#2F4538]/5 hover:bg-[#2F4538]/10 text-[#2F4538]' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                )}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className={cn(
                  "p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300",
                  theme === 'light' 
                    ? 'bg-[#2F4538]/5 hover:bg-[#2F4538]/10 text-[#2F4538]' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                )}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? theme === 'light' ? 'bg-[#2F4538]' : 'bg-[#E8FF8B]'
                      : theme === 'light' ? 'bg-[#2F4538]/20' : 'bg-white/20'
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Testimonials */}
        <div className="relative h-[400px] md:h-[500px] w-full">
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              index === currentIndex && (
                <motion.div
                  key={testimonial.id}
                  className={cn(
                    "absolute inset-0 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden",
                    theme === 'light' ? testimonial.gradient.light : testimonial.gradient.dark
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-[url('/grain.png')] opacity-30 mix-blend-overlay" />
                    <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                      <div className="space-y-6 md:space-y-8">
                        <div className="relative w-16 h-16 md:w-20 md:h-20">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            fill
                            className={cn(
                              "rounded-full object-cover ring-4",
                              theme === 'light' ? 'ring-[#2F4538]/10' : 'ring-white/10'
                            )}
                          />
                        </div>
                        <blockquote className={cn(
                          "font-playfair text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed",
                          theme === 'light' ? 'text-[#2F4538]' : 'text-white'
                        )}>
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                      <div className="space-y-2">
                        <p className={cn(
                          "font-poppins font-medium text-base md:text-lg",
                          theme === 'light' ? 'text-[#2F4538]' : 'text-white'
                        )}>
                          {testimonial.author}
                        </p>
                        <p className={cn(
                          "font-poppins text-sm md:text-base",
                          theme === 'light' ? 'text-[#2F4538]/70' : 'text-white/70'
                        )}>
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
} 