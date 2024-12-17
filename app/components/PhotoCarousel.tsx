"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"

const photos = [
  {
    src: "/outside2.jpg",
    alt: "Scenic mountain views at sunrise"
  },
  {
    src: "/cottage7.jpg",
    alt: "Traditional mud house interior"
  },
  {
    src: "/cottage8.jpg",
    alt: "Eco-friendly living spaces"
  },
  {
    src: "/outside_view1.jpg",
    alt: "Sustainable farm activities"
  },
  {
    src: "/outside_view.jpg",
    alt: "Sustainable farm activities"
  },
]

export default function PhotoCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="space-y-8 md:space-y-12">
        <div className="text-center space-y-4">
          <h3 className="font-poppins text-[#E8FF8B] text-sm md:text-base font-medium tracking-wider">
            PHOTO GALLERY
          </h3>
          <h2 className="font-playfair text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1]">
            Captured Moments
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {photos.map((photo, index) => (
              <CarouselItem key={index} className="pl-3 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                <div className="overflow-hidden rounded-[2rem] md:rounded-[2.5rem] aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={600}
                    height={450}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation controls */}
          <div className="mt-6 md:mt-8">
            {/* Arrows - Desktop only */}
            <div className="hidden md:flex items-center justify-between">
              <div className="flex gap-3">
                <CarouselPrevious className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border-0">
                  <ArrowLeft className="h-4 w-4 text-white" />
                </CarouselPrevious>
                <CarouselNext className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border-0">
                  <ArrowRight className="h-4 w-4 text-white" />
                </CarouselNext>
              </div>
            </div>

            {/* Dots - Mobile only */}
            <div className="flex md:hidden justify-center gap-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === index 
                      ? 'w-4 bg-[#E8FF8B]' 
                      : 'bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  )
} 