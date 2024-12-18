import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArakuValleyHero from '../components/ArakuValleyHero'
import WelcomeWithSubheadings from '../components/WelcomeWithSubheadings'
import Welcome from '../components/Welcome'
import PhotoCarousel from '../components/PhotoCarousel'
import GreenCampaign from '../components/GreenCampaign'
import GalleryCarousel from '../components/GalleryCarousel'
import NewspaperFeature from '../components/NewspaperFeature'

const page = () => {
  return (
    <div>
      <Navbar />
      <ArakuValleyHero />
      <GreenCampaign />
      <div className="bg-[#2F4538]">
        <GalleryCarousel />
      </div>
      <Welcome 
        badge="RESTFUL RETREATS"
        title="Experience the Perfect Harmony of Comfort, Style, and Nature in Every Stay"
        description="Immerse yourself in spaces designed to inspire relaxation and rejuvenation. From cozy interiors to breathtaking surroundings, each moment is a seamless blend of tranquility and refined elegance."
        buttonText="Discover Timeless Charm"
        imageSrc="/bedroom.jpg"
        imageAlt="Modern eco-friendly suite at Mandala Farms"
        buttonLink="/the-cottages"
      />
      <NewspaperFeature />
      <div className="bg-[#2F4538]">
        <PhotoCarousel />
      </div>
      <Footer />
    </div>
  )
}

export default page
