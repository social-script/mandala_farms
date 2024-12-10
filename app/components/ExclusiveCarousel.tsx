"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Category {
  id: number
  name: string
  description: string
  image: string
}

interface ImageCarouselProps {
  categories: Category[]
  selectedCategory: number
}

interface CategoryListProps {
  categories: Category[]
  selectedCategory: number
  onSelectCategory: (index: number) => void
}

const categories: Category[] = [
  { 
    id: 1, 
    name: "Cozy Evenings by the Fire",
    description: "Relax under the stars with a crackling fire, delectable veg or non-veg skewers, and soulful live music to make your evening unforgettable.",
    image: "https://images.unsplash.com/photo-1493103877408-d878f729f6b9"
  },
  { 
    id: 2, 
    name: "Pre-Order Curated Dinner",
    description: "Savor a personalized dining experience with pre-ordered, expertly curated meals tailored to your tastes, crafted from farm-fresh ingredients.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
  },
  { 
    id: 3, 
    name: "Coffee Brewing Sessions",
    description: "Dive into the art of coffee brewing, from bean to cup, in an engaging session that celebrates the flavors of freshly harvested coffee.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
  },
  { 
    id: 4, 
    name: "Farm Activities",
    description: "Engage in meaningful farm activities such as gardening, composting, feeding animals, and learning about permaculture practices that connect you with the land.",
    image: "https://images.unsplash.com/photo-1621460248083-6271cc4437a8"
  },
  { 
    id: 5, 
    name: "Guided Trekking Adventures",
    description: "Explore the stunning landscapes of Araku Valley on guided treks. Discover hidden gems, soak in breathtaking views, and connect with nature like never before.",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306"
  },
]

export default function ExclusiveCarousel() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedCategory((prev) => (prev + 1) % categories.length)
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedCategory((prev) => (prev - 1 + categories.length) % categories.length)
  }

  return (
    <section className="container mx-auto px-4 py-10 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
        <div className="relative flex items-center justify-center">
          <ImageCarousel 
            categories={categories} 
            selectedCategory={selectedCategory} 
          />
          
          {/* Navigation Arrows */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between z-10 px-2 md:px-4">
            <button 
              onClick={handlePrev}
              className="p-2 md:p-3 rounded-full bg-white/90 backdrop-blur-sm text-[#2F4538]
                       hover:bg-white transition-all duration-300
                       shadow-lg hover:scale-105 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 md:p-3 rounded-full bg-white/90 backdrop-blur-sm text-[#2F4538]
                       hover:bg-white transition-all duration-300
                       shadow-lg hover:scale-105 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-[#FAF3E0] rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 lg:p-10">
          <h3 className="font-poppins text-[#2F4538]/70 text-xs md:text-sm font-medium tracking-wider mb-2 md:mb-4">
            EXCLUSIVE EXPERIENCES
          </h3>
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
    if (diff === 1) return 'right'
    if (diff === categories.length - 1) return 'left'
    return 'hidden'
  }

  return (
    <div className="relative w-full max-w-[400px] md:max-w-[600px] lg:max-w-[1000px] h-[240px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
      <AnimatePresence mode="wait">
        {categories.map((category, index) => {
          const position = getCardPosition(index)
          return (
            <motion.div
              key={category.id}
              className="absolute top-1/2 left-1/2"
              initial={{ 
                opacity: 0, 
                scale: 0.8,
                x: position === 'right' ? '100%' : position === 'left' ? '-100%' : '-50%'
              }}
              animate={{
                opacity: position === 'hidden' ? 0 : position === 'center' ? 1 : 0.6,
                scale: position === 'center' ? 1 : 0.85,
                x: position === 'center' 
                  ? '-50%' 
                  : position === 'left' 
                    ? '-85%' 
                    : '-15%',
                y: '-50%',
                zIndex: position === 'center' ? 2 : 1,
                rotate: position === 'center' 
                  ? -2
                  : position === 'left'
                    ? -4
                    : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
                x: position === 'right' ? '100%' : position === 'left' ? '-100%' : '-50%'
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.32, 0.72, 0, 1],
                opacity: { duration: 0.4 }
              }}
            >
              <motion.div 
                className="relative w-[120px] h-[240px] sm:w-[200px] sm:h-[400px] md:w-[280px] md:h-[560px] lg:w-[360px] lg:h-[720px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
                whileHover={{ 
                  y: -5,
                  rotate: 0,
                  scale: 1.02,
                  transition: { duration: 0.4 }
                }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  priority={position === 'center'}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
                <div className="absolute bottom-4 md:bottom-12 left-3 md:left-8 right-3 md:right-8 space-y-1.5 md:space-y-4">
                  <h3 className="font-playfair text-white text-base md:text-2xl lg:text-3xl font-medium leading-tight">
                    {category.name}
                  </h3>
                  <p className="font-poppins text-white/95 text-xs md:text-sm lg:text-base leading-relaxed hidden md:block">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}

function CategoryList({ categories, selectedCategory, onSelectCategory }: CategoryListProps) {
  return (
    <div className="space-y-2.5 md:space-y-6">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          className="group cursor-pointer"
          onClick={() => onSelectCategory(index)}
          initial={false}
          animate={{ 
            backgroundColor: index === selectedCategory ? "rgba(47, 69, 56, 0.1)" : "transparent",
          }}
          whileHover={{ backgroundColor: "rgba(47, 69, 56, 0.05)" }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center gap-2 md:gap-4 p-2 md:p-4 rounded-[1rem]">
            <div className={`w-1 h-6 md:h-12 rounded-full transition-colors duration-200 ${
              index === selectedCategory ? "bg-[#2F4538]" : "bg-[#2F4538]/20"
            }`} />
            <div>
              <h3 className={`font-playfair text-sm md:text-xl transition-colors duration-200 ${
                index === selectedCategory 
                  ? 'text-[#2F4538] font-medium' 
                  : 'text-[#2F4538]/70'
              }`}>
                {category.name}
              </h3>
              {index === selectedCategory && (
                <motion.p 
                  className="font-poppins text-xs md:text-sm text-[#2F4538]/70 mt-1 "
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