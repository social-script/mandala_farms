"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Home, Coffee, LucideIcon } from 'lucide-react'
import Image from 'next/image'

interface Category {
  id: number
  name: string
  description: string
  image: string
  icon: LucideIcon
}

interface ImageCarouselProps {
  categories: Category[]
  selectedCategory: number
}

// interface CarouselNavigationProps {
//   onNext: () => void
//   onPrev: () => void
// }

interface CategoryListProps {
  categories: Category[]
  selectedCategory: number
  onSelectCategory: (index: number) => void
}

const categories: Category[] = [
  { 
    id: 1, 
    name: "Valley View Suites",
    description: "Luxurious accommodations with panoramic views of Araku Valley",
    image: "https://images.unsplash.com/photo-1531932594968-e5e5e9dee95a",
    icon: Home
  },
  { 
    id: 2, 
    name: "Wellness Sanctuary",
    description: "Engage in activities that connect you with nature and local culture.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b",
    icon: Leaf
  },
  { 
    id: 3, 
    name: "Culinary Journey",
    description: "Experience farm-to-table dining with local organic ingredients",
    image: "https://images.unsplash.com/photo-1603554593710-89285666b691",
    icon: Coffee
  },
]

export default function DynamicCarousel() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column - Carousel */}
        <div className="relative flex items-center justify-center">
          <ImageCarousel 
            categories={categories} 
            selectedCategory={selectedCategory} 
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center bg-[#2F4538] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 lg:p-12">
          <h3 className="font-poppins text-white/70 text-xs md:text-sm font-medium tracking-wider mb-3 md:mb-4">
            LUXURY EXPERIENCES
          </h3>
          <motion.h2 
            className="font-playfair text-white text-2xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Serenity in Nature's Embrace
          </motion.h2>
          <motion.p 
            className="font-poppins text-white/80 text-sm md:text-lg leading-relaxed mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Indulge in a harmonious blend of luxury and sustainability, where every moment is crafted to create unforgettable memories.
          </motion.p>
          <CategoryList 
            categories={categories} 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </div>
      </div>
    </section>
  )
}

function ImageCarousel({ categories, selectedCategory }: ImageCarouselProps) {
  const getCardPosition = (index: number) => {
    const diff = (index - selectedCategory + categories.length) % categories.length
    if (diff === 0) return 'center'
    if (diff === 1 || diff === -2) return 'right'
    return 'left'
  }

  return (
    <div className="relative w-full max-w-[400px] md:max-w-[600px] h-[280px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
      <AnimatePresence initial={false}>
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="absolute top-1/2 left-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: getCardPosition(index) === 'center' ? 1 : 0.3,
              scale: getCardPosition(index) === 'center' ? 1 : 0.75,
              x: getCardPosition(index) === 'center' 
                ? '-50%' 
                : getCardPosition(index) === 'left' 
                  ? '-85%' 
                  : '-15%',
              y: '-50%',
              zIndex: getCardPosition(index) === 'center' ? 2 : 1,
              rotateY: getCardPosition(index) === 'center' 
                ? 0 
                : getCardPosition(index) === 'left'
                  ? 15
                  : -15,
            }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <motion.div 
              className="relative w-[180px] h-[240px] sm:w-[240px] sm:h-[300px] md:w-[320px] md:h-[400px] lg:w-[400px] lg:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                priority={getCardPosition(index) === 'center'}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
              <div className="absolute bottom-6 md:bottom-12 left-4 md:left-8 right-4 md:right-8 space-y-2 md:space-y-4">
                <h3 className="font-playfair text-white text-lg md:text-2xl lg:text-3xl font-medium leading-tight">
                  {category.name}
                </h3>
                <p className="font-poppins text-white/90 text-xs md:text-sm lg:text-base">
                  {category.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

function CategoryList({ categories, selectedCategory, onSelectCategory }: CategoryListProps) {
  return (
    <div className="space-y-4 md:space-y-6">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          className="group cursor-pointer"
          onClick={() => onSelectCategory(index)}
          initial={false}
          animate={{ 
            backgroundColor: index === selectedCategory ? "rgba(255, 255, 255, 0.1)" : "transparent",
          }}
          whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-[1rem]">
            <div className={`w-1 h-8 md:h-12 rounded-full transition-colors duration-200 ${
              index === selectedCategory ? "bg-[#E8FF8B]" : "bg-white/20"
            }`} />
            <div>
              <h3 className={`font-playfair text-base md:text-xl transition-colors duration-200 ${
                index === selectedCategory 
                  ? 'text-white font-medium' 
                  : 'text-white/70'
              }`}>
                {category.name}
              </h3>
              {index === selectedCategory && (
                <motion.p 
                  className="font-poppins text-xs md:text-sm text-white/70 mt-1 hidden md:block"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {category.description}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 