import Image from 'next/image'
import { Instagram, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#2F4538] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="relative mb-8 md:mb-16">
          <h2 className="text-white text-3xl md:text-4xl lg:text-6xl font-medium leading-tight mb-6 md:mb-8">
            contact us now<br />to get started!
          </h2>
          <Link href="/contact-us">
            <Button 
              className="bg-[#E8FF8B] text-[#2F4538] hover:bg-[#E8FF8B]/90 rounded-full font-poppins text-sm md:text-base px-6 py-3"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
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
              <li><Link href="/our-story" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Our Story</Link></li>
              <li><Link href="/the-farm" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">The Farm</Link></li>
            </ul>
          </div>
       
          <div>
            <h3 className="font-playfair text-[#E8FF8B] text-lg md:text-xl mb-4 md:mb-6">Stay</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><Link href="/the-cottages" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">The Cottages</Link></li>
              <li><Link href="/tariff" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Tariff</Link></li>
              <li><Link href="/contact-us" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="font-playfair text-[#E8FF8B] text-lg md:text-xl mb-4 md:mb-6">Contact</h3>
            <ul className="space-y-2 md:space-y-4">
              <li><Link href="tel:+919529652435" className="text-white hover:text-[#E8FF8B] transition-colors duration-300 font-poppins text-sm md:text-base">+91 95296 52435</Link></li>
              <li className="text-white/80 font-poppins text-sm md:text-base">
                Mandala Farms,<br />
                Araku Valley,<br />
                Andhra Pradesh 531149
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 md:pt-8">
          <div className="flex space-x-3 md:space-x-4 mb-4 md:mb-0">
            <a 
              href="https://www.instagram.com/mandalafarms_arakuvalley/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-[#E8FF8B]/20 rounded-full hover:bg-[#E8FF8B]/30 transition-colors"
            >
              <Instagram className="w-5 h-5 md:w-6 md:h-6 text-[#E8FF8B]" />
            </a>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 text-xs md:text-sm text-white/60">
            <span>©2024 MANDALA FARMS</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Condition</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 
