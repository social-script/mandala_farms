import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export default function ModernMinimal() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-12 gap-8">
        {/* Left large card */}
        <div className="col-span-12 lg:col-span-8 relative rounded-[2.5rem] overflow-hidden h-[650px] group">
          <Image
            src="/bedroom.jpeg"
            alt="Luxury eco-friendly suite at Mandala Farms"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />
          <div className="absolute bottom-12 left-12">
            <Badge variant="secondary" className="mb-6 text-base px-8 py-2 border-[1.5px] border-white/30 backdrop-blur-sm text-sm rounded-full">
              Eco-Refined Living
            </Badge>
            <h2 className="font-playfair text-white text-5xl md:text-6xl font-medium leading-[1.1]">
              Harmonious<br />Eco-Living Spaces
            </h2>
          </div>
          <button className="absolute top-12 right-12 p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
            <ArrowRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Right column cards */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          {/* Top card */}
          <div className="relative rounded-[2.5rem] overflow-hidden h-[280px] bg-[#FAF3E0] p-10 group">
            <Badge variant="default" className="bg-white text-black mb-5 text-base px-4 py-1.5 text-sm rounded-full 
                        transition-transform duration-300 hover:scale-105">
              Café cum Restaurant 
            </Badge>
            <div className="max-w-[85%]">
              <p className="font-poppins text-[#2F4538]/70 text-sm leading-relaxed mb-4">
              Indulge in farm-fresh cuisine that celebrates the authentic tastes and stories of the land.
              </p>
              <h3 className="font-playfair text-[#2F4538] text-3xl font-medium leading-tight">
              Locally Crafted Flavors
              </h3>
            </div>
            <button className="absolute top-10 right-10 p-4 bg-[#2F4538]/5 rounded-full hover:bg-[#2F4538]/10 transition-all">
              <ArrowRight className="w-6 h-6 text-[#2F4538]/70" />
            </button>
          </div>

          {/* Bottom card */}
          <div className="relative rounded-[2.5rem] overflow-hidden h-[350px] group">
            <Image
              src="/araku_valley.jpeg"
              alt="Sustainable furniture at Mandala Farms"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
            <div className="absolute bottom-8 left-8 right-8 space-y-4">
              <Badge 
                className="bg-white/90 backdrop-blur-sm text-black px-4 py-1.5 text-sm 
                          rounded-full transition-transform duration-300 hover:scale-105"
              >
                Araku Valley
              </Badge>
              <p className="text-lg font-medium text-white">
              Experience the seamless fusion of sustainable luxury and natural beauty of Araku Valley.
              </p>
            </div>
            <button className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all">
              <ArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}