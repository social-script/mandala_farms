import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StoryHeader from '../components/StoryHeader'
import TariffTable from '../components/TariffTable'
import ExclusiveCarousel from '../components/ExclusiveCarousel'

export default function TariffPage() {
  return (
    <div className="bg-gradient-to-b from-[#2F4538] to-[#243A2D]">
      <Navbar />
      <StoryHeader 
        badge="TARIFF & RATES"
        title="Transparent Pricing"
        description="Discover our accommodation rates and packages designed to provide you with the perfect blend of luxury and value."
      />
      <TariffTable />
      <ExclusiveCarousel />
      <Footer />
    </div>
  )
}
