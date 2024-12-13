"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export default function AnimatedLogo() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        initial={{ clipPath: 'circle(0%)' }}
        animate={{ 
          clipPath: 'circle(100%)',
          rotate: 360
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
          clipPath: {
            duration: 1.5,
            ease: [0.4, 0, 0.2, 1],
          },
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.3, 1],
            keyframes: [0, 180, 360]
          }
        }}
        className={cn(
          "relative w-10 h-10 md:w-12 md:h-12",
          "transform-origin-center"
        )}
      >
        <Image
          src="/pinwheel.png"
          alt="Mandala Farms Logo"
          width={48}
          height={48}
          className="w-10 h-10 md:w-12 md:h-12 object-contain"
          priority
        />
      </motion.div>
    </div>
  )
} 