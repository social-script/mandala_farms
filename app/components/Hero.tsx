"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import OptimizedImage from './OptimizedImage'
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-8 md:pt-24 md:pb-12">
      <div className="flex flex-col gap-8 md:gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pt-4 md:pt-8"
          >
            <h1 className="font-playfair text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] md:leading-[1.1]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="block"
              >
                Experience
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="block"
              >
                Luxury in Nature&apos;s
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="block"
              >
                Embrace
              </motion.span>
            </h1>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            className="flex items-start md:items-center"
          >
            <p className="font-poppins text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Discover serenity at our eco-luxury farm stay, where sustainable living meets modern comfort in the heart of Araku Valley.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
          className="relative h-[240px] sm:h-[300px] md:h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden"
        >
          <OptimizedImage
            src="/hero_img.jpg"
            alt="Luxury eco farm stay"
            fill
            priority
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <Link href="/our-story">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-white/90 backdrop-blur-sm text-[#2F4538] 
                         hover:bg-white transition-all duration-300 rounded-full font-poppins
                         text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5"
              >
                Our Story
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 