import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Welcome() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="font-poppins text-[#E8FF8B] text-sm font-medium tracking-wider mb-4">
            WELCOME, NEIGHBOR
          </h3>
          <h2 className="font-playfair text-white text-4xl md:text-5xl font-medium leading-tight mb-6">
            Bringing neighbors together for a more comfortable life
          </h2>
          <p className="font-poppins text-white/80 text-lg leading-relaxed">
            With neighborhoods you can easily discuss community issues, find out the latest news of your apartment complex, find the opportunity to put to a poll or vote on a project within your apartment complex
          </p>
        </div>
        <div className="relative h-[500px] rounded-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00"
            alt="Modern apartment complex"
            fill
            className="object-cover"
          />
          <Button className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm text-[#2F4538] hover:bg-white rounded-full font-poppins">
            About Neighborhood
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
} 