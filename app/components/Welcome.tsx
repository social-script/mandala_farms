"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"

interface WelcomeProps {
  badge: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
  theme?: 'light' | 'dark'
}

export default function Welcome({
  badge,
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  theme = 'dark'
}: WelcomeProps) {
  const styles = {
    light: {
      badge: 'bg-[#2F4538]/10 text-[#2F4538]',
      title: 'text-[#2F4538]',
      description: 'text-[#2F4538]/80',
      button: 'bg-[#2F4538] text-white hover:bg-[#2F4538]/90',
    },
    dark: {
      badge: 'bg-white/10 text-[#E8FF8B]',
      title: 'text-white',
      description: 'text-white/80',
      button: 'bg-white/90 backdrop-blur-sm text-[#2F4538] hover:bg-white',
    }
  }

  const currentStyle = styles[theme]

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className={`inline-block rounded-lg px-3 py-1.5 text-sm font-poppins font-medium tracking-wider ${currentStyle.badge}`}>
              {badge}
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`font-playfair ${currentStyle.title} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight`}
          >
            {title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`font-poppins ${currentStyle.description} text-sm md:text-lg leading-relaxed`}
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {buttonText && (
              <Link href={buttonLink || '#'}>
                <Button 
                  className={`rounded-full font-poppins text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5 ${currentStyle.button}`}
                >
                  {buttonText}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </Link>
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />
        </motion.div>
      </div>
    </section>
  )
} 