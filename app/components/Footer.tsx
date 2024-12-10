import Image from 'next/image'
import { ArrowRight, DiscIcon as Discord, Instagram, Send } from 'lucide-react'

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

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-16">
          <div className="flex-1">
            <div className="relative">
              <input
                type="email"
                placeholder="GET STARTED"
                className="w-full bg-white rounded-full py-3 md:py-4 px-4 md:px-6 pr-12 text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-[#E8FF8B]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 md:p-2 bg-[#2F4538] rounded-full">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-[#E8FF8B]" />
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
            <p className="text-white/80 text-sm md:text-base">
              offer flexible booking options, including advance reservations and seasonal packages
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-x-16 md:gap-y-12 mb-8 md:mb-16">
          <div>
            <h3 className="font-playfair text-[#E8FF8B] text-lg md:text-xl mb-4 md:mb-6">Discover</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Our Story</a></li>
              <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">The Farm</a></li>
              <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Araku Valley</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-playfair text-[#E8FF8B] text-lg md:text-xl mb-4 md:mb-6">Experience</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Experiences</a></li>
              <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Café & Restaurant</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-playfair text-[#E8FF8B] text-lg md:text-xl mb-4 md:mb-6">Stay</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">The Cottages</a></li>
              <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Tariff</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 md:pt-8">
          <div className="flex space-x-3 md:space-x-4 mb-4 md:mb-0">
            <a href="#" className="p-2 bg-[#E8FF8B]/20 rounded-full hover:bg-[#E8FF8B]/30 transition-colors">
              <Discord className="w-5 h-5 md:w-6 md:h-6 text-[#E8FF8B]" />
            </a>
            <a href="#" className="p-2 bg-[#E8FF8B]/20 rounded-full hover:bg-[#E8FF8B]/30 transition-colors">
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-[#E8FF8B]" />
            </a>
            <a href="#" className="p-2 bg-[#E8FF8B]/20 rounded-full hover:bg-[#E8FF8B]/30 transition-colors">
              <Send className="w-5 h-5 md:w-6 md:h-6 text-[#E8FF8B]" />
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