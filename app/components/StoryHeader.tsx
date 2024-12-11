import React from 'react'

export default function StoryHeader() {
  return (
    <section className="container mx-auto px-4 pt-32 pb-10 md:pt-40 md:pb-15">
      <div className="grid md:grid-cols-2 md:gap-20 items-center">
        <div>
          <h3 className="font-poppins text-[#E8FF8B] text-sm md:text-base font-medium tracking-wider mb-6">
            OUR JOURNEY
          </h3>
          <h1 className="font-playfair text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-[-0.02em] mb-8 md:mb-0">
          Our Inspiring Journey
          </h1>
          <div className="h-[1px] w-24 bg-white/20 mb-6 md:hidden" />
        </div>
        
        <div className="flex items-start md:items-center">
          <div className="space-y-6">
            <div className="hidden md:block h-[1px] w-24 bg-white/20" />
            <p className="font-poppins text-white/80 text-base md:text-lg leading-relaxed">
            Discover how Rajeev and Pratiksha transformed their dreams into a thriving eco-friendly paradise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 