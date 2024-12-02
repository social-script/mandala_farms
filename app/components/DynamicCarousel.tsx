"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Leaf, Home, Coffee, LucideIcon } from 'lucide-react'
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

interface CarouselNavigationProps {
  onNext: () => void
  onPrev: () => void
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
    image: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80",
    icon: Home
  },
  { 
    id: 2, 
    name: "Wellness Sanctuary",
    description: "Rejuvenate your mind and body in our eco-spa retreat",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    icon: Leaf
  },
  { 
    id: 3, 
    name: "Culinary Journey",
    description: "Experience farm-to-table dining with local organic ingredients",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    icon: Coffee
  },
]

export default function DynamicCarousel() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Carousel */}
        <div className="flex justify-center items-center">
          <ImageCarousel 
            categories={categories} 
            selectedCategory={selectedCategory} 
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center bg-[#2F4538] rounded-[2.5rem] p-12">
          <h3 className="font-poppins text-white/70 text-sm font-medium tracking-wider mb-4">
            LUXURY EXPERIENCES
          </h3>
          <motion.h2 
            className="font-playfair text-white text-4xl md:text-5xl font-medium leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover Serenity in Nature's Embrace
          </motion.h2>
          <motion.p 
            className="font-poppins text-white/80 text-lg leading-relaxed mb-12"
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
    <div className="relative w-full max-w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      <AnimatePresence initial={false}>
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="absolute top-1/2 left-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: getCardPosition(index) === 'center' ? 1 : 0.3,
              scale: getCardPosition(index) === 'center' ? 1.1 : 0.75,
              x: getCardPosition(index) === 'center' 
                ? '-50%' 
                : getCardPosition(index) === 'left' 
                  ? '-90%' 
                  : '-10%',
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
              className="relative w-[240px] h-[300px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[450px] lg:w-[400px] lg:h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
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
              <div className="absolute bottom-12 left-8 right-8 space-y-4">
                <h3 className="font-playfair text-white text-2xl md:text-3xl font-medium leading-tight">
                  {category.name}
                </h3>
                <p className="font-poppins text-white/90 text-sm md:text-base">
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
      {categories.map((category, index) => {
        const Icon = category.icon
        return (
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
            <div className="flex items-center gap-4 p-4 rounded-[1rem]">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                index === selectedCategory ? "bg-[#E8FF8B]" : "bg-white/10"
              }`}>
                <Icon className={`w-6 h-6 ${
                  index === selectedCategory ? "text-[#2F4538]" : "text-white/70"
                }`} />
              </div>
              <div>
                <h3 className={`font-playfair text-xl transition-colors duration-200 ${
                  index === selectedCategory 
                    ? 'text-white font-medium' 
                    : 'text-white/70'
                }`}>
                  {category.name}
                </h3>
                {index === selectedCategory && (
                  <motion.p 
                    className="font-poppins text-sm text-white/70 mt-1 hidden md:block"
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
        )
      })}
    </div>
  )
} 