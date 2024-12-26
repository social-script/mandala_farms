'use client'

import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import OptimizedImage from "./OptimizedImage"

export default function ModernMinimal() {
  return (
    <section className="container mx-auto px-4 py-6 md:py-14">
      <div className="grid grid-cols-12 gap-6 md:gap-8">
        {/* Left large card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="col-span-12 lg:col-span-8 relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden h-[400px] md:h-[500px] lg:h-[650px] group"
        >
          <OptimizedImage
            src="/bedroom.jpeg"
            alt="Luxury eco-friendly suite at Mandala Farms"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />
          <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12">
            <Badge variant="secondary" className="mb-4 md:mb-6 text-sm md:text-base px-4 md:px-8 py-1.5 md:py-2 border-[1.5px] border-white/30 backdrop-blur-sm rounded-full">
              Eco-Refined Living
            </Badge>
            <h2 className="font-playfair text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1]">
              Harmonious<br />Eco-Living Spaces
            </h2>
          </div>
          <Link href="/the-cottages">
            <button className="absolute top-6 md:top-12 right-6 md:right-12 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>
          </Link>
        </motion.div>

        {/* Right column cards */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 md:gap-8">
          {/* Top card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden h-[200px] md:h-[280px] bg-[#FAF3E0] p-5 md:p-10 group"
          >
            <Badge variant="default" className="bg-white text-black mb-3 md:mb-5 text-base md:text-base px-4 md:px-4 py-1.5 rounded-full 
                      transition-transform duration-300 hover:scale-105">
              Café cum Restaurant 
            </Badge>
            <div className="max-w-[80%]">
              <p className="font-poppins text-[#2F4538]/70 text-sm md:text-sm leading-relaxed mb-2 md:mb-2">
                Indulge in farm-fresh cuisine that celebrates the authentic tastes and stories of the land.
              </p>
              <h3 className="font-playfair text-[#2F4538] text-xl md:text-3xl font-medium leading-tight">
                Locally Crafted Flavors
              </h3>
            </div>
            <Link href="/cafe">
              <button className="absolute top-8 md:top-10 right-8 md:right-10 p-3 md:p-4 bg-[#2F4538]/5 rounded-full hover:bg-[#2F4538]/10 transition-all">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#2F4538]/70" />
              </button>
            </Link>
          </motion.div>

          {/* Bottom card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden h-[280px] md:h-[350px] group"
          >
            <OptimizedImage
              src="/araku_valley.jpeg"
              alt="Sustainable furniture at Mandala Farms"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
            <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 space-y-3 md:space-y-4">
              <Badge 
                className="bg-white/90 backdrop-blur-sm text-black px-3 md:px-4 py-1.5 text-sm 
                          rounded-full transition-transform duration-300 hover:scale-105"
              >
                Araku Valley
              </Badge>
              <p className="text-base md:text-lg font-medium text-white">
                Experience the seamless fusion of sustainable luxury and natural beauty of Araku Valley.
              </p>
            </div>
            <Link href="/araku-valley">
              <button className="absolute top-6 md:top-10 right-6 md:right-10 p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}