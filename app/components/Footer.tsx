import Image from 'next/image'
import { Instagram } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2F4538] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="relative mb-8 md:mb-16">
          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-medium leading-tight mb-6 md:mb-8">
            contact us now<br />to get started!
          </h2>
          <div className="absolute top-0 right-0">
            <Image
              src="/pinwheel.png"
              alt="Decorative pinwheel"
              width={100}
              height={100}
              className="w-[80px] h-[80px] md:w-[131px] md:h-[131px] opacity-50 animate-spin-slow"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-16 md:gap-y-12 mb-8 md:mb-16">
          <div>
            <h3 className="font-playfair text-[#E8FF8B] text-lg md:text-xl mb-4 md:mb-6">Discover</h3>
            <ul className="space-y-2 md:space-y-4">
            <li><Link href="/" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Home</Link></li>       
              <li><a href="/our-story" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Our Story</a></li>
              <li><a href="/the-farm" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">The Farm</a></li>
              {/* <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Araku Valley</a></li> */}
            </ul>
          </div>
       
          <div className="col-span-2 md:col-span-1">
            
            <h3 className="font-playfair text-[#E8FF8B] text-lg md:text-xl mb-4 md:mb-6">Stay</h3>
            <ul className="space-y-2 md:space-y-4">
            <li><a href="/the-cottages" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">The Cottages</a></li>
              <li><a href="/tariff" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Tariff</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 md:pt-8">
          <div className="flex space-x-3 md:space-x-4 mb-4 md:mb-0">
            <a href="https://www.instagram.com/mandalafarms_arakuvalley/" className="p-2 bg-[#E8FF8B]/20 rounded-full hover:bg-[#E8FF8B]/30 transition-colors">
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-[#E8FF8B]" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 text-xs md:text-sm text-white/60">
            <span>©2024 MANDALA FARMS</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
} 