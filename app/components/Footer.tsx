import Image from 'next/image'
import { ArrowRight, DiscIcon as Discord, Instagram, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2F4538] py-20">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <h2 className="text-white text-4xl md:text-6xl font-medium leading-tight mb-8">
            contact us now<br />to get started!
          </h2>
          <div className="absolute top-0 right-0">
            <Image
              src="/pinwheel.png"
              alt="Decorative pinwheel"
              width={131}
              height={131}
              className="opacity-50 animate-spin-slow"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1">
            <div className="relative">
              <input
                type="email"
                placeholder="GET STARTED"
                className="w-full bg-white rounded-full py-4 px-6 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-[#E8FF8B]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#2F4538] rounded-full">
                <ArrowRight className="w-6 h-6 text-[#E8FF8B]" />
              </button>
            </div>
          </div>
          <div className="md:w-1/3">
            <p className="text-white/80">
              offer flexible booking options, including advance reservations and seasonal packages
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}>
              <h3 className="text-[#E8FF8B] font-medium mb-4">EXPERIENCES</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors">Farm Tours</a></li>
                <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors">Nature Walks</a></li>
                <li><a href="#" className="text-white hover:text-[#E8FF8B] transition-colors">Local Culture</a></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="p-2 bg-[#E8FF8B]/20 rounded-full hover:bg-[#E8FF8B]/30 transition-colors">
              <Discord className="w-6 h-6 text-[#E8FF8B]" />
            </a>
            <a href="#" className="p-2 bg-[#E8FF8B]/20 rounded-full hover:bg-[#E8FF8B]/30 transition-colors">
              <Instagram className="w-6 h-6 text-[#E8FF8B]" />
            </a>
            <a href="#" className="p-2 bg-[#E8FF8B]/20 rounded-full hover:bg-[#E8FF8B]/30 transition-colors">
              <Send className="w-6 h-6 text-[#E8FF8B]" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-white/60">
            <span>©2024 MANDALA FARMS</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
} 