import React from 'react'
import Navbar from '../components/Navbar'
import StoryHeader from '../components/StoryHeader'
import Footer from '../components/Footer'
import TestimonialSection from '../components/TestimonialSection'
import PhotoCarousel from '../components/PhotoCarousel'
import WelcomeCarousel from '../components/WelcomeCarousel'

export default function TheCottagesPage() {
  return (
    <div className="bg-gradient-to-b from-[#2F4538] to-[#243A2D]">
    <Navbar />
    <StoryHeader 
      badge="OUR COTTAGES"
      title="Eco-Luxury Retreats"
      description="Experience the perfect blend of sustainable living and modern comfort in our thoughtfully designed eco-cottages."
    />
      <div className="bg-[#FAF3E0]">
      <WelcomeCarousel 
  badge="MINDFUL DESIGN"
  title="Where Luxury Meets Sustainability"
  description="Our cottages blend seamlessly with the natural landscape, featuring locally sourced materials, traditional craftsmanship, and modern amenities for your comfort."
  media={[
    {
      type: 'image',
      src: "/bedroom.jpeg",
      alt: "Scenic mountain views at sunrise"
    },
    {
      type: 'image',
      src: "/bedroom.jpg",
      alt: "Scenic mountain views at sunrise"
    },
    { 
      type: 'image',
      src: "/Cottage2.jpg", 
      alt: "Luxury eco-cottage view 1" 
    },
    { 
      type: 'image',
      src: "/cottage3.jpg", 
      alt: "Luxury eco-cottage view 2" 
    },
    { 
      type: 'image',
      src: "/cottage5.jpg", 
      alt: "Luxury eco-cottage view 2" 
    },
    
  ]}
  theme="light"
/>
</div>

      <div className="bg-[#2F4538]">
        <PhotoCarousel />
      </div>
      <div className="bg-[#FAF3E0]">
        <TestimonialSection theme="light" />
      </div>
    <Footer />
  </div>
  )
}
