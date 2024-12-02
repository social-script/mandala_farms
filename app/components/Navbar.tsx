import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-playfair text-white text-2xl">
            Mandala Farms
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/our-story" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
              Our Story
            </Link>
            <Link href="/the-farm" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
              The Farm
            </Link>
            <Link href="/araku-valley" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
              Araku Valley
            </Link>
            <Link href="/experiences" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
              Experiences
            </Link>
            <Link href="/tariff" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
              Tariff
            </Link>
            <Link href="/the-cottages" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
              The Cottages
            </Link>
            <Link href="/cafe" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
              Café & Restaurant
            </Link>
          </nav>
          
          <Button className="bg-[#E8FF8B] text-[#2F4538] hover:bg-[#d4eb7d] rounded-full px-6 font-poppins">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
} 