"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function GreenCampaign() {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 overflow-hidden bg-[#2F4435]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 md:gap-6">

          
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider">
            <span className="text-transparent" style={{ WebkitTextStroke: "1px #fff" }}>
              ARAKU
            </span>
          </div>
          
          <motion.div 
            className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0">
              <Image
                src="/pinwheel.png"
                alt="Decorative leaf pattern"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
              />
            </div>
          </motion.div>
          
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white">
            VALLEY
          </div>
        </div>
      </div>
    </div>
  )
} 