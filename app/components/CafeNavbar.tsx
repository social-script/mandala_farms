"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import AnimatedLogo from "./AnimatedLogo"

export default function CafeNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-8 left-0 right-0 z-50 px-4 transition-all duration-300 ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div className="container mx-auto">
          <div className={`
            relative flex items-center justify-between
            rounded-full backdrop-blur-md border border-white/10
            px-4 py-2 md:px-8 md:py-3
            ${isScrolled ? 'bg-[#2F4538]/90' : 'bg-transparent'}
          `}>
            {/* Logo */}
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
            <div className="hidden md:flex items-center gap-8">
            <Link href="/our-story" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Our Story
              </Link>
              <Link href="/the-cottages" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                The Cottages
              </Link>
              
              <Link href="/the-farm" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                The Farm
              </Link>
              <Link href="/araku-valley" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Araku Valley
              </Link>
                      
              <Link href="/cafe" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Café & Restaurant
              </Link>
              <Link href="/tariff" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Tariff
              </Link>  
              <Link href="/contact">
                <Button className="rounded-full font-poppins bg-white/90 text-[#2F4538] hover:bg-white">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-32 bottom-0 z-40 px-4 md:hidden overflow-y-auto"
          >
            <div className="container mx-auto">
              <div className="bg-[#2F4538]/95 backdrop-blur-md rounded-3xl p-6 space-y-6">
              <Link href="/our-story" className="text-white hover:text-[#E8FF8B] transition-colors font-poppins">
                Our Story
              </Link>
                <Link href="/the-cottages" className="block font-poppins text-white/90 hover:text-white">
                  The Cottages
                </Link>
                <Link href="/cafe" className="block font-poppins text-white/90 hover:text-white">
                Café & Restaurant
                </Link>
                <Link href="/the-farm" className="block font-poppins text-white/90 hover:text-white">
                  The Farm
                </Link>
                <Link href="/araku-valley" className="block font-poppins text-white/90 hover:text-white">
                  Araku Valley
                </Link>
               
              <Link href="/tarif" className="block font-poppins text-white/90 hover:text-white">
              Tariff
                </Link>
                <div className="pt-1">
                  <Link href="/contact-us">
                    <Button className="w-full rounded-full font-poppins bg-white/90 text-[#2F4538] hover:bg-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 