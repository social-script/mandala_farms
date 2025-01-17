"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedLogo from "./AnimatedLogo"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main header - always visible */}
      <div className="bg-[#2F4538]">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 md:gap-4">
              <AnimatedLogo />
              <Image
                src="/nav_logo_text.png"
                alt="Mandala Farms"
                width={160}
                height={32}
                className="h-8 md:h-10 w-auto object-contain"
                priority
              />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/our-story" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Our Story
              </Link>
              <Link href="/the-cottages" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                The Cottages
              </Link>
              
              <Link href="/the-farm" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                The Farm
              </Link>
              <Link href="/cafe" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Café & Restaurant
              </Link>
              <Link href="/araku-valley" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Araku Valley
              </Link>
              {/* <Link href="/experiences" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Experiences
              </Link> */}
              <Link href="/tariff" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Tariff
              </Link>          
              
            </nav>

            {/* Contact Us Button - Desktop */}
            <div className="hidden md:block">
              <Link href="/contact-us">
                <Button className="bg-[#E8FF8B] text-[#2F4538] hover:bg-[#d4eb7d] rounded-full px-6 font-poppins">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-[88px] left-0 right-0 bottom-0 bg-[#2F4538] md:hidden overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link 
                href="/our-story" 
                className="text-white hover:text-[#E8FF8B] transition-colors font-poppins py-2"
                onClick={toggleMenu}
              >
                Our Story
              </Link>
              <Link 
                href="/the-cottages" 
                className="text-white hover:text-[#E8FF8B] transition-colors font-poppins py-2"
                onClick={toggleMenu}
              >
                The Cottages
              </Link>
              <Link 
                href="/the-farm" 
                className="text-white hover:text-[#E8FF8B] transition-colors font-poppins py-2"
                onClick={toggleMenu}
              >
                The Farm
              </Link>
              <Link 
                href="/cafe" 
                className="text-white hover:text-[#E8FF8B] transition-colors font-poppins py-2"
                onClick={toggleMenu}
              >
                Café & Restaurant
              </Link>
              <Link 
                href="/araku-valley" 
                className="text-white hover:text-[#E8FF8B] transition-colors font-poppins py-2"
                onClick={toggleMenu}
              >
                Araku Valley
              </Link> 
              <Link 
                href="/tariff" 
                className="text-white hover:text-[#E8FF8B] transition-colors font-poppins py-2"
                onClick={toggleMenu}
              >
                Tariff
              </Link>
              
              <Link 
                href="/contact-us" 
                className="inline-block"
                onClick={toggleMenu}
              >
                <Button className="w-full bg-[#E8FF8B] text-[#2F4538] hover:bg-[#d4eb7d] rounded-full px-6 font-poppins">
                  Contact Us
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
} 