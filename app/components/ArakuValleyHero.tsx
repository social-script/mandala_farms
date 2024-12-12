import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function ArakuValleyHero() {
  return (
    <section className="container mx-auto px-4 pt-20 sm:pt-24 md:py-24">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group">
        {/* Main background image */}
        <Image
          src="/araku_valley.jpeg"
          alt="Scenic view of Araku Valley"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/60" />
        
        {/* Main heading */}
        <h2 className="absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium text-center">
          Araku Valley
        </h2>

        {/* Info card */}
        <Card className="absolute bottom-4 md:bottom-8 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-white/10 backdrop-blur-sm border-0 text-white rounded-[1rem] md:rounded-[1.25rem] p-3 sm:p-4 lg:p-6">
          <div className="flex gap-3 sm:gap-4 lg:gap-6 items-center md:items-start">
            <div className="flex-1 space-y-2 md:space-y-4">
              <p className="font-poppins text-white/90 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-none">
                Experience the magic of Araku Valley, where misty mountains meet sustainable luxury. Our eco-retreat offers a perfect blend of comfort and natural beauty.
              </p>
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white rounded-full font-poppins text-xs sm:text-sm hidden md:flex"
              >
                Watch Video
                <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
              </Button>
            </div>
            
            {/* Thumbnail */}
            <div className="relative w-20 md:w-24 h-20 md:h-24 flex-shrink-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image 
                  src="/araku_valley.jpeg"
                  alt="Araku Valley preview"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="icon"
                  variant="ghost"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <Play className="w-4 h-4" />
                  <span className="sr-only">Play video</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Circular text - hidden on mobile */}
        <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 animate-spin-slow hidden md:block">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
              stroke="none"
            />
            <text className="font-poppins text-[6px] sm:text-[8px] fill-white uppercase tracking-wider">
              <textPath href="#circle">
                Nature • Luxury • Sustainability • Peace •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
} 