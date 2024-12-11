'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface TimelineEntry {
  date: string
  heading: string
  description: string
  imageUrl: string
}

const timelineData: TimelineEntry[] = [
  {
    date: "2019",
    heading: "Our Arrival",
    description: "In 2020, we embraced a new life in Araku Valley, starting our journey in a tent.",
    imageUrl: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8",
  },
  {
    date: "2020",
    heading: "Building Dreams",
    description: "With the help of local artisans, we built our dream mud house, blending tradition and comfort.",
    imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
  },
  {
    date: "2022",
    heading: "Farm Transformation",
    description: "What was once barren land is now a vibrant farm, filled with life and beauty.",
    imageUrl: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
  },
  {
    date: "2024",
    heading: "Community Growth",
    description: "Today, our farm thrives as a community hub, offering unique experiences and sustainable living.",
    imageUrl: "https://images.unsplash.com/photo-1604881991720-f91add269bed",
  }
]

export default function TimelineSection() {
  const [isSticky, setIsSticky] = useState(true)
  const timelineRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)
  const timelineContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && stickyRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect()
        const stickyRect = stickyRef.current.getBoundingClientRect()
        
        // Check if timeline section is in view
        if (timelineRect.top <= 0 && timelineRect.bottom >= stickyRect.height) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (timelineContentRef.current) {
        const { top, height } = timelineContentRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        // const scrollPosition = window.scrollY
        
        if (top <= windowHeight && top + height > 0) {
          const scrollPercentage = (windowHeight - top) / (windowHeight + height)
          setLineHeight(Math.min(scrollPercentage * 100, 100))
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call to set the line height

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={timelineRef} className="relative min-h-screen bg-[#2F4538]">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column - Fixed Content */}
          <div ref={stickyRef} className={`${isSticky ? 'lg:sticky lg:top-32' : ''} h-fit`}>
            <div className="space-y-8">
              <h3 className="font-poppins text-[#E8FF8B] text-sm md:text-base font-medium tracking-wider">
                OUR STORY
              </h3>
              <h2 className="font-playfair text-white text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.1] tracking-[-0.02em]">
                A Journey of Purpose & Passion
              </h2>
              <div className="h-[1px] w-24 bg-white/20" />
              <p className="font-poppins text-white/80 text-base md:text-lg leading-relaxed max-w-2xl">
                Every chapter of our story reflects our commitment to creating a sanctuary where luxury and sustainability dance in perfect harmony. Join
              </p>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative" ref={timelineContentRef}>
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-white/10">
              <div 
                className="absolute left-0 top-0 bottom-0 w-full bg-[#E8FF8B] transition-all duration-300 ease-out"
                style={{ height: `${lineHeight}%`, width: '2px', left: '-1px' }}
              />
            </div>
            <div className="space-y-20">
              {timelineData.map((entry, index) => (
                <div key={index} className="relative pl-12 group">
                  <div className="absolute left-[7px] top-[1px] h-5 w-5 rounded-full bg-[#E8FF8B] border-4 border-[#2F4538] transition-all duration-300 group-hover:scale-110" />
                  <div className="space-y-6">
                    <div className="font-poppins text-[#E8FF8B] text-sm md:text-base font-medium tracking-wider">
                      {entry.date}
                    </div>
                    <h3 className="font-playfair text-white text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                      {entry.heading}
                    </h3>
                    <p className="font-poppins text-white/80 text-base md:text-lg leading-relaxed">
                      {entry.description}
                    </p>
                    <div className="relative h-[200px] md:h-[300px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group">
                      <Image
                        src={entry.imageUrl}
                        alt={entry.heading}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}