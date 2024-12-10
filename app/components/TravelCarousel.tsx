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
    name: "Valley View Suites",
    description: "Luxurious accommodations with panoramic views of Araku Valley",
    image: "https://images.unsplash.com/photo-1531932594968-e5e5e9dee95a",
  },
  { 
    id: 2, 
    name: "Wellness Sanctuary",
    description: "Engage in activities that connect you with nature and local culture.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b",
  },
  { 
    id: 3, 
    name: "Culinary Journey",
    description: "Experience farm-to-table dining with local organic ingredients",
    image: "https://images.unsplash.com/photo-1603554593710-89285666b691",

  },
]


export default function TravelCarousel() {
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
        <div className="relative">
          <div className="relative flex items-center justify-center">
            <ImageCarousel 
              categories={categories} 
              selectedCategory={selectedCategory} 
            />
          </div>

          {/* Navigation Arrows - Updated colors */}
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
            DISCOVER ARAKU
          </h3>
          <motion.h2 
            className="font-playfair text-[#2F4538] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-3 md:mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the Magic of Nature
          </motion.h2>
          <motion.p 
            className="font-poppins text-[#2F4538]/80 text-sm md:text-lg leading-relaxed mb-5 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At our farm, every moment is a celebration of nature&apos;s beauty and the joy of animal companionship.
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
    if (diff === 1) return 'right'
    return 'left'
  }

  return (
    <div className="relative w-full max-w-[400px] md:max-w-[600px] h-[240px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
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
              rotate: getCardPosition(index) === 'center' 
                ? -3 
                : getCardPosition(index) === 'left'
                  ? -6
                  : 0,
            }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          >
            <motion.div 
              className="relative w-[120px] h-[240px] sm:w-[160px] sm:h-[320px] md:w-[240px] md:h-[480px] lg:w-[280px] lg:h-[560px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
              whileHover={{ 
                y: -5,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
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
              <div className="absolute bottom-4 md:bottom-12 left-3 md:left-8 right-3 md:right-8 space-y-1.5 md:space-y-4">
                <h3 className="font-playfair text-white text-base md:text-2xl lg:text-3xl font-medium leading-tight">
                  {category.name}
                </h3>
                <p className="font-poppins text-white/90 text-xs md:text-sm lg:text-base hidden md:block">
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