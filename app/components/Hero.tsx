import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
          <div className="pt-8">
            <h1 className="font-playfair text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1]">
              Experience<br />
              Luxury in Nature&apos;s<br />
              Embrace
            </h1>
          </div>
          <div className="flex items-center">
            <p className="font-poppins text-white/80 text-lg md:text-xl leading-relaxed">
              Discover serenity at our eco-luxury farm stay, where sustainable living meets modern comfort in the heart of Araku Valley.
            </p>
          </div>
        </div>
        
        <div className="relative h-[300px] md:h-[400px] rounded-[2.5rem] overflow-hidden">
          <Image
            src="/hero_img.jpg"
            alt="Luxury eco farm stay"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
          <Button 
            className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm text-[#2F4538] hover:bg-white hover:scale-105 
                     transition-all duration-300 rounded-full font-poppins"
          >
            Our Story
            <span className="ml-2">→</span>
          </Button>
          <div className="absolute bottom-8 left-8 flex gap-2">
            <button className="w-2 h-2 rounded-full bg-white/90" />
            <button className="w-2 h-2 rounded-full bg-white/40" />
            <button className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  )
} 