'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

interface Image {
  id: number
  src: string
  alt: string
  location: {
    name: string
    description: string
    category: string
    rating: number
    coordinates: {
      lat: number
      lng: number
    }
  }
}

const images: Image[] = [
  { 
    id: 1, 
    src: '/tourist_gallery.jpg', 
    alt: 'Tribal Museum Araku',
    location: {
      name: "Tribal Museum Araku",
      description: "Tribal Museum Araku is a museum that showcases the rich cultural heritage of the indigenous tribes.",
      category: "Museum",
      rating: 4.8,
      coordinates: { lat: 18.3273, lng: 82.8751 }
    }
  },
  { 
    id: 2, 
    src: '/tourist_gallery1.webp', 
    alt: 'Chaparai Water Cascade',
    location: {
      name: "Chaparai Water Cascade",
      description: "Chaparai Water Cascade is a beautiful waterfall located in the Araku Valley.",
      category: "Tourist Attraction",
      rating: 4.6,
      coordinates: { lat: 18.3278, lng: 82.8755 }
    }
  },
  { 
    id: 3, 
    src: '/tourist_gallery2.webp', 
    alt: 'Borra Caves',
    location: {
      name: "Borra Caves",
      description: "Tours of limestone caves formed up to 150 million years ago by water and filled with stalagmites.",
      category: "Natural Wonder",
      rating: 4.9,
      coordinates: { lat: 18.2866, lng: 83.0355 }
    }
  },
  { 
    id: 4, 
    src: '/tourist_gallery3.webp', 
    alt: 'Galikonda View Point',
    location: {
      name: "Galikonda View Point",
      description: "Galikonda View Point is a scenic viewpoint offering panoramic views of the Araku Valley.",
      category: "View Point",
      rating: 4.7,
      coordinates: { lat: 18.3340, lng: 82.8925 }
    }
  },
  { 
    id: 5, 
    src: '/tourist_gallery5.webp', 
    alt: 'Kothapalli Waterfalls',
    location: {
      name: "Kothapalli Waterfalls",
      description: "Kothapalli Waterfalls is a beautiful waterfall located in the Araku Valley.",
      category: "Waterfall",
      rating: 4.5,
      coordinates: { lat: 18.3287, lng: 82.8759 }
    }
  },
]

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setSlideDirection('right')
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false) // Pause autoplay on manual navigation
    setSlideDirection('right')
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false) // Pause autoplay on manual navigation
    setSlideDirection('left')
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const getThumbnails = () => {
    const thumbnails = []
    for (let i = 0; i < 2; i++) {
      const index = (currentIndex + i + 1) % images.length
      thumbnails.push(images[index])
    }
    return thumbnails
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid gap-8 md:grid-cols-[1.5fr,1fr]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/5">
          {/* Preload next image */}
          <div className="hidden">
            {images.map((image) => (
              <Image
                key={image.id}
                src={image.src}
                alt="preload"
                width={1}
                height={1}
              />
            ))}
          </div>
          
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: slideDirection === 'right' ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: slideDirection === 'right' ? -100 : 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/0 to-black/60" />
              
              {/* Top Navigation */}
              <div className="absolute top-6 right-6 flex gap-3">
                <a 
                  href={`https://www.google.com/maps?q=${images[currentIndex].location.coordinates.lat},${images[currentIndex].location.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="w-6 h-6 text-white"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M15 15l5-5m0 0l-5-5m5 5H4" 
                    />
                  </svg>
                </a>
              </div>

              {/* Location Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute left-6 bottom-6 right-6"
              >
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 max-w-md">
                  {/* Category and Rating */}
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-white/10 px-3 py-1 rounded-full text-xs text-white/90 font-poppins">
                      {images[currentIndex].location.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-4 h-4 text-yellow-400"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-white/90 text-sm font-medium">
                        {images[currentIndex].location.rating}
                      </span>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="font-playfair text-white text-xl md:text-2xl mb-2">
                    {images[currentIndex].location.name}
                  </h3>
                  <p className="font-poppins text-white/80 text-sm md:text-base">
                    {images[currentIndex].location.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-medium mb-8">
              Discover Araku's Hidden Treasures
            </h2>
            <p className="font-poppins text-white/60 text-sm md:text-base leading-relaxed mb-8">
              Discover the breathtaking landscapes and cultural heritage of Araku Valley through our lens. 
              Each destination captures the essence of this pristine natural paradise.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {getThumbnails().map((image) => (
              <motion.div
                key={image.id}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white/5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              onClick={prevSlide}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextSlide}
              className="bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 