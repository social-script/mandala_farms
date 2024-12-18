"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function BalloonFeature() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden bg-[#2F4435]">
      {/* Main Image Container */}
      <div className="relative w-full h-full">
        <Image
          src="/2024-05-17.jpg"
          alt="Hot air balloon floating over Araku Valley"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        
        {/* Updated Gradient Overlay - More subtle and consistent */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 md:pt-24">
          <div className="container mx-auto px-4 text-center">
            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-playfair text-white text-3xl md:text-5xl lg:text-6xl font-medium max-w-4xl mx-auto leading-[1.2]"
            >
              Touch the Sky at Dawn
            </motion.h2>
          </div>
        </div>

        {/* Updated bottom border - Now pure white */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/20" />
        
        {/* Time Badge */}
        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-xs md:text-sm font-poppins">
            Sunrise Flights: 6:30 AM - 8:30 AM
          </div>
        </div>
        
        {/* Reserve Link */}
        <Link 
          href="/contact"
          className="absolute bottom-6 right-6 md:bottom-8 md:right-8"
        >
          <div className="bg-[#FAF3E0] rounded-full px-4 py-2 text-[#2F4435] text-xs md:text-sm font-poppins font-medium hover:bg-white transition-colors duration-300">
            Reserve
          </div>
        </Link>
      </div>
    </section>
  )
} 