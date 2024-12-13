import React from 'react'
import Navbar from '../components/Navbar'
import StoryHeader from '../components/StoryHeader'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import WelcomeWithSubheadings from '../components/WelcomeWithSubheadings'
import TestimonialSection from '../components/TestimonialSection'
import PhotoCarousel from '../components/PhotoCarousel'

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
        <Welcome 
          badge="MINDFUL DESIGN"
          title="Where Luxury Meets Sustainability"
          description="Our cottages blend seamlessly with the natural landscape, featuring locally sourced materials, traditional craftsmanship, and modern amenities for your comfort."
          buttonText="Explore Our Cottages"
          imageSrc="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8"
          imageAlt="Interior of eco-luxury cottage"
          theme="light"
        />
      </div>
      <div className="bg-[#2F4538]">
        <Welcome 
          badge="FARM LIFE"
          title="A Haven for Wildlife and Farm Animals"
          description="Our farm is home to a variety of animals, from free-range chickens to friendly goats. Experience the joy of connecting with nature and our animal companions."
          buttonText="Meet Our Animals"
          imageSrc="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
          imageAlt="Farm animals at Mandala Farms"
        />
      </div>
      <div className="bg-[#FAF3E0]">
        <WelcomeWithSubheadings 
          badge="FARM ACTIVITIES"
          title="Immerse Yourself in Authentic Farm Experiences"
          description="Join us in daily farm activities and learn about sustainable living through hands-on experiences."
          subheadings={[
            {
              heading: "Farm Tours",
              text: "Guided tours showcasing our organic farming methods, composting systems, and animal care practices."
            },
            {
              heading: "Workshops",
              text: "Participate in workshops on organic farming, composting, and sustainable living practices."
            },
            {
              heading: "Harvest Experience",
              text: "Join us in harvesting seasonal produce and learn about farm-to-table practices."
            }
          ]}
          buttonText="Book an Experience"
          imageSrc="https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
          imageAlt="Farm activities and workshops at Mandala Farms"
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
