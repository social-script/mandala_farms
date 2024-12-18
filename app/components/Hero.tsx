import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import OptimizedImage from './OptimizedImage'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 pt-24 pb-8 md:pt-24 md:pb-12">
      <div className="flex flex-col gap-8 md:gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
          <div className="pt-4 md:pt-8">
            <h1 className="font-playfair text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] md:leading-[1.1]">
              Experience<br />
              Luxury in Nature&apos;s<br />
              Embrace
            </h1>
          </div>
          <div className="flex items-start md:items-center">
            <p className="font-poppins text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
              Discover serenity at our eco-luxury farm stay, where sustainable living meets modern comfort in the heart of Araku Valley.
            </p>
          </div>
        </div>
        
        <div className="relative h-[240px] sm:h-[300px] md:h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
          <OptimizedImage
  src="/hero_img.jpg"
  alt="Luxury eco farm stay"
  fill
  priority
  className="object-cover transition-transform duration-700 hover:scale-105"
/>
          <Link href="/our-story">
            <Button 
              className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-white/90 backdrop-blur-sm text-[#2F4538] 
                       hover:bg-white hover:scale-105 transition-all duration-300 rounded-full font-poppins
                       text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5"
            >
              Our Story
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
        
      </div>
      
    </section>
    
  )
} 