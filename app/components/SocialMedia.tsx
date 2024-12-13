"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const socialImages = [
  {
    src: "/social/image1.jpg",
    alt: "Luxury suite interior with panoramic views",
    className: "col-span-2 row-span-2"
  },
  {
    src: "/social/image2.jpg",
    alt: "Guests enjoying water activities",
  },
  {
    src: "/social/image3.jpg",
    alt: "Serene beach setting",
  },
  {
    src: "/social/image4.jpg",
    alt: "Adventure activities in snow",
  },
  {
    src: "/social/image5.jpg",
    alt: "Modern hotel room interior",
  },
  {
    src: "/social/image6.jpg",
    alt: "Nightlife and entertainment",
  },
  {
    src: "/social/image7.jpg",
    alt: "Cultural experience",
  }
]

export default function SocialMedia() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 md:mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            STAY CONNECTED
          </h2>
          <p className="text-lg text-gray-600">
            Follow us on Instagram for the latest news, events and more.
          </p>
        </div>
        <Link 
          href="https://instagram.com/mandalafarms"
          className="inline-flex items-center gap-2 mt-4 md:mt-0 px-6 py-3 bg-black text-white rounded-full
                    hover:bg-black/90 transition-colors duration-300"
        >
          Follow Us
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {socialImages.map((image, index) => (
          <motion.div
            key={image.src}
            className={`relative overflow-hidden rounded-2xl ${image.className || ''}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="aspect-square relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 