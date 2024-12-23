"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function CafeHero() {
  return (
    <section className="w-full min-h-screen">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-full h-screen rounded-b-[2rem] md:rounded-b-[2.5rem] overflow-hidden"
      >
        {/* Background Image with Gradient */}
        <Image
          src="/cafe_hero_img.jpg"
          alt="Farm to table dining experience"
          fill
          priority
          className="object-cover"
        />
        {/* Lighter gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              {/* Left Column - Main Content */}
              <div className="relative space-y-6 backdrop-blur-[2px] bg-black/10 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] drop-shadow-lg"
                >
                  Unwind in a
                  <br />
                  <span className="text-[#E8FF8B]">Culinary Haven</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="font-poppins text-white/90 text-base md:text-lg max-w-xl leading-relaxed drop-shadow-md"
                >
                  Experience culinary excellence at our farm-to-table restaurant, where locally sourced ingredients meet innovative cooking techniques in a stunning natural setting.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="flex gap-4"
                >
                  {/* <Link href="#menu">
                    <Button className="rounded-full font-poppins text-base px-6 py-2.5 bg-[#E8FF8B] text-[#2F4538] hover:bg-white transition-all duration-300">
                      View Menu
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="ml-2"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.span>
                    </Button>
                  </Link> */}
                </motion.div>
              </div>

           
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
} 