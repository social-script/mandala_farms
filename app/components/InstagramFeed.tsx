'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function InstagramFeed() {
  const images = [
    { 
      src: '/insta1.jpg',
      alt: 'Luxury pool and lounge area at sunset',
      className: 'sm:col-span-2 sm:row-span-2'
    },
    { 
      src: '/insta-main.jpg',
      alt: 'Scuba diving adventure with fish',
    },
    { 
      src: '/insta2.jpg',
      alt: 'Scenic coastal cliff view', 
    },
    { 
      src: '/insta3.jpg',
      alt: 'Nighttime camping experience',
    },
    { 
      src: '/insta4.jpg',
      alt: 'Fine dining experience',
    }
  ]

  return (
    <section className="w-full px-4 py-16 md:py-24 bg-[#FAF3E0] overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16">
          <div>
            <h2 className="font-playfair text-[#2F4538] text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              STAY CONNECTED
            </h2>
            <div className="space-y-3">
              <p className="font-poppins text-[#2F4538]/90 text-base md:text-lg font-medium">
                @mandalafarms_arakuvalley
              </p>
              <p className="font-poppins text-[#2F4538]/70 text-base md:text-lg">
                Follow us on Instagram for the latest news, events and more.
              </p>
            </div>
          </div>
          <Button 
            variant="default" 
            className="mt-6 md:mt-0 bg-[#2F4538] text-white hover:bg-[#2F4538]/90 rounded-full px-6 py-6 h-auto
                     font-poppins inline-flex items-center gap-2 hover:shadow-lg transition-all duration-300"
          >
            Follow Us
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div 
              key={index} 
              className={`relative overflow-hidden rounded-2xl md:rounded-[2.5rem] ${image.className || ''}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#2F4538]/0 hover:bg-[#2F4538]/20 
                              transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 