import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Welcome() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h3 className="font-poppins text-[#E8FF8B] text-xs md:text-sm font-medium tracking-wider mb-3 md:mb-4">
            RESTFUL RETREATS
          </h3>
          <h2 className="font-playfair text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 md:mb-6">
            Experience the Perfect Harmony of Comfort, Style, and Nature in Every Stay
          </h2>
          <p className="font-poppins text-white/80 text-sm md:text-lg leading-relaxed">
            Immerse yourself in spaces designed to inspire relaxation and rejuvenation. From cozy interiors to breathtaking surroundings, each moment is a seamless blend of tranquility and refined elegance.
          </p>
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
          <Image
            src="/bedroom.jpg"
            alt="Modern apartment complex"
            fill
            className="object-cover"
          />
          <Button className="absolute bottom-4 md:bottom-6 right-4 md:right-6 bg-white/90 backdrop-blur-sm text-[#2F4538] 
                           hover:bg-white rounded-full font-poppins text-sm md:text-base px-4 md:px-6 py-2 md:py-2.5">
            Discover Timeless Charm
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
} 