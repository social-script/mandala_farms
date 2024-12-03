"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

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

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative flex items-center justify-center">
          <ImageCarousel 
            categories={categories} 
            selectedCategory={selectedCategory} 
          />
        </div>

        <div className="flex flex-col justify-center bg-[#FAF3E0] rounded-[2.5rem] p-12">
          <h3 className="font-poppins text-[#2F4538]/70 text-sm font-medium tracking-wider mb-4">
            DISCOVER ARAKU
          </h3>
          <motion.h2 
            className="font-playfair text-[#2F4538] text-4xl md:text-5xl font-medium leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the Magic of Nature
          </motion.h2>
          <motion.p 
            className="font-poppins text-[#2F4538]/80 text-lg leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At our farm, every moment is a celebration of nature&apos;s beauty and the joy of animal companionship. Embrace a lifestyle that nurtures both your spirit and the environment around you.
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
    if (diff === categories.length - 1) return 'left'
    return 'hidden'  // Hide other cards
  }

  return (
    <div className="relative w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <AnimatePresence initial={false}>
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="absolute top-1/2 left-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: getCardPosition(index) === 'hidden' ? 0 : 
                      getCardPosition(index) === 'center' ? 1 : 0.6,
              scale: getCardPosition(index) === 'center' ? 1 : 0.9,
              x: getCardPosition(index) === 'center' 
                ? '-50%' 
                : getCardPosition(index) === 'left' 
                  ? '-90%' 
                  : '-10%',
              y: '-50%',
              zIndex: getCardPosition(index) === 'center' ? 2 : 1,
              rotate: getCardPosition(index) === 'center' 
                ? -2
                : getCardPosition(index) === 'left'
                  ? -4
                  : 0,
            }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <motion.div 
              className="relative w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] md:w-[320px] md:h-[640px] lg:w-[360px] lg:h-[720px] rounded-[2.5rem] overflow-hidden shadow-2xl"
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
                priority={getCardPosition(index) === 'center'}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
              <div className="absolute bottom-12 left-8 right-8 space-y-4">
                <h3 className="font-playfair text-white text-2xl md:text-3xl font-medium leading-tight">
                  {category.name}
                </h3>
                <p className="font-poppins text-white/95 text-sm md:text-base leading-relaxed">
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
    <div className="space-y-6">

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
          <div className="flex items-center gap-4 p-4 rounded-[1rem]">
            <div className={`w-1 h-12 rounded-full transition-colors duration-200 ${
              index === selectedCategory ? "bg-[#2F4538]" : "bg-[#2F4538]/20"
            }`} />
            <div>
              <h3 className={`font-playfair text-xl transition-colors duration-200 ${
                index === selectedCategory 
                  ? 'text-[#2F4538] font-medium' 
                  : 'text-[#2F4538]/70'
              }`}>
                {category.name}
              </h3>
              {index === selectedCategory && (
                <motion.p 
                  className="font-poppins text-sm text-[#2F4538]/70 mt-1 hidden md:block"
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