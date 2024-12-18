'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Leaf } from 'lucide-react'

export default function NewspaperFeature() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 50])
  const [isHovered, setIsHovered] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  const handleHoverStart = () => {
    setIsHovered(true)
    setHasInteracted(true)
  }

  return (
    <section className="relative min-h-screen py-6 md:py-24 bg-[#2F4435] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header - Reduced spacing on mobile */}
          <div className="text-center space-y-2 md:space-y-6 mb-6 md:mb-16">
            <Badge className="bg-[#FAF3E0] text-[#2F4435] px-4 py-1 text-xs md:text-sm rounded-full border-0">
              PRESS COVERAGE
            </Badge>
            <h2 className="font-playfair text-white text-2xl sm:text-4xl md:text-5xl font-medium leading-[1.1]">
              Featured in The Hindu
            </h2>
            <p className="font-poppins text-white/80 text-xs md:text-lg leading-relaxed max-w-2xl mx-auto">
              Discover how Mandala Farm is redefining luxury eco-retreats in Araku Valley
            </p>
          </div>

          {/* Main content - Added gap for mobile */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Image section */}
            <motion.div
              style={{ y }}
              className="relative cursor-pointer"
              onHoverStart={handleHoverStart}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div 
                className="relative aspect-[5/4] md:aspect-[4/5] w-full overflow-hidden rounded-xl md:rounded-[2rem]"
                animate={{
                  scale: isHovered ? 1.05 : 1,
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
              >
                <Image
                  src="/newspaperFeature.jpeg"
                  alt="Metro Plus article featuring Araku Valley"
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
                
                {/* Initial pulsing highlight to draw attention */}
                {!hasInteracted && (
                  <motion.div 
                    className="absolute bottom-[0%] right-[23%] w-[36%] h-[44%] md:bottom-[0%] md:right-[14%] md:w-[47%] md:h-[44%] pointer-events-none"
                    animate={pulseAnimation}
                  >
                    <div className="absolute inset-0 border-2 border-white/80 rounded-lg" />
                  </motion.div>
                )}
                
                {/* Regular highlight on hover - Adjusted for mobile */}
                <motion.div 
                  className="absolute bottom-[0%] right-[23%] w-[36%] h-[44%] md:bottom-[0%] md:right-[14%] md:w-[47%] md:h-[44%] pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isHovered ? 1 : 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="absolute inset-0 border-2 border-white rounded-lg" />
                  <div className="absolute inset-0 bg-white/5 rounded-lg" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side - Added margin top for mobile */}
            <div className="space-y-4 md:space-y-8 mt-6 lg:mt-0">
              <div 
                className="relative bg-[#FAF3E0] rounded-xl md:rounded-[2rem] p-4 md:p-8 border-0 overflow-hidden cursor-pointer"
                onMouseEnter={handleHoverStart}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Decorative elements - Smaller on mobile */}
                <div className="absolute top-2 md:top-4 left-2 md:left-4">
                  <Leaf className="w-4 h-4 md:w-6 md:h-6 text-[#2F4435] opacity-30" />
                </div>
                <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 rotate-180">
                  <Leaf className="w-4 h-4 md:w-6 md:h-6 text-[#2F4435] opacity-30" />
                </div>
                
                <blockquote className="space-y-2 md:space-y-4">
                  <p className="font-playfair text-[#2F4435] text-base md:text-xl lg:text-2xl leading-snug md:leading-relaxed">
                    &quot;For those seeking a tranquil escape, the newly opened 
                    <span className="text-[#2F4435] font-semibold relative mx-1">
                      Mandala Farm
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2F4435]/30"></span>
                    </span>
                    in Araku offers a retreat that bridges the gap between modern luxury and Nature&apos;s tranquility.&quot;
                  </p>
                  <footer className="font-poppins text-[#2F4435]/60 text-xs md:text-sm">
                    — Metro Plus, The Hindu
                  </footer>
                </blockquote>
              </div>

              <div className="space-y-3 md:space-y-6">
                <p className="font-poppins text-white/80 text-xs md:text-base leading-relaxed">
                  We&apos;re honored to be featured in this comprehensive piece about Araku Valley&apos;s winter attractions.
                </p>
                <Button 
                  className="bg-[#FAF3E0] hover:bg-[#FAF3E0]/90 text-[#2F4435] rounded-full font-poppins text-xs md:text-sm group transition-all duration-300 h-8 md:h-10"
                >
                  Read Full Article
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}