import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from 'lucide-react'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'] })

export default function ModernMini() {
  return (
    <div className={cn(
      "container mx-auto p-4 md:p-6 lg:p-8",
      inter.className
    )}>
      <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-4rem)] min-h-[600px]">
        {/* Main hero section */}
        <div className="md:w-2/3 relative rounded-[2rem] overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Luxurious eco-friendly living room at Mandala Farms"
            width={1200}
            height={800}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
          <div className="absolute bottom-12 left-12 space-y-6">
            <Badge 
              className="bg-white/90 backdrop-blur-sm text-black px-4 py-1.5 text-sm rounded-full"
            >
              Eco-Luxury Living
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Mandala<br />Farms
            </h1>
          </div>
          <button 
            className="absolute bottom-12 right-12 p-4 rounded-full bg-white/10 backdrop-blur-sm
                     text-white border border-white/20 opacity-0 group-hover:opacity-100 
                     transition-all duration-300 hover:bg-white/20"
            aria-label="Explore more about Mandala Farms"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        {/* Right side cards */}
        <div className="md:w-1/3 flex flex-col gap-6">
          {/* Top card */}
          <div className="flex-1 relative bg-[#F7F3F0] p-8 rounded-[2rem] group 
                        transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
            <Badge 
              className="bg-white text-black px-4 py-1.5 text-sm rounded-full 
                        transition-transform duration-300 hover:scale-105"
            >
              Serenity Awaits
            </Badge>
            <div className="mt-8 space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Where luxury meets sustainability in the heart of Araku Valley, 
                creating an unforgettable escape into nature
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                A sanctuary of<br />eco-conscious<br />elegance
              </h2>
            </div>
            <button 
              className="absolute bottom-8 right-8 p-4 rounded-full bg-black/5 
                       opacity-0 group-hover:opacity-100 transition-all duration-300 
                       hover:bg-black/10"
              aria-label="Learn more about our sanctuary"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom card */}
          <div className="flex-1 relative rounded-[2rem] overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Farm-to-table dining experience at Mandala Farms"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
            <div className="absolute bottom-8 left-8 right-8 space-y-4">
              <Badge 
                className="bg-white/90 backdrop-blur-sm text-black px-4 py-1.5 text-sm 
                          rounded-full transition-transform duration-300 hover:scale-105"
              >
                Farm-to-Table
              </Badge>
              <p className="text-lg font-medium text-white">
                Savor the essence of local flavors in every thoughtfully crafted dish
              </p>
            </div>
            <button 
              className="absolute top-8 right-8 p-4 rounded-full bg-white/10 backdrop-blur-sm
                       text-white border border-white/20 opacity-0 group-hover:opacity-100 
                       transition-all duration-300 hover:bg-white/20"
              aria-label="Explore our dining experience"
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

