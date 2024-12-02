import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-1 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-32 mb-16">
          <div className="space-y-4">
            <h1 className="font-playfair text-white text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
              Experience Luxury in Nature's Embrace
            </h1>
          </div>
          <div className="flex items-center">
            <p className="font-poppins text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed">
              Discover serenity at our eco-luxury farm stay, where sustainable living meets modern comfort in the heart of Araku Valley.
            </p>
          </div>
        </div>
        
        <div className="relative w-full h-[300px] md:h-[320px] lg:h-[380px] xl:h-[420px] rounded-3xl overflow-hidden mb-12">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Luxury eco farm stay"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          <Button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm text-[#2F4538] hover:bg-white hover:scale-105 transition-all duration-300 rounded-full font-poppins">
            About Complex
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
} 