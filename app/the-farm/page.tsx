import React from 'react'
import Navbar from '../components/Navbar'
import StoryHeader from '../components/StoryHeader'
import Welcome from '../components/Welcome'
import WelcomeWithSubheadings from '../components/WelcomeWithSubheadings'
import Footer from '../components/Footer'
import ImageGallery from '../components/ImageGallery'
import TestimonialSection from '../components/TestimonialSection'

export default function TheFarmPage() {
  return (
    <div className="bg-gradient-to-b from-[#2F4538] to-[#243A2D]">
      <Navbar />
      <StoryHeader 
        badge="THE FARM"
        title="Where Nature Meets Luxury"
        description="Explore our 25-acre sustainable paradise, where organic farming, luxury accommodation, and natural beauty create an unforgettable experience."
      />
      <div className="bg-[#2F4538]">
        <Welcome 
          badge="ORGANIC FARMING"
          title="Sustainable Agriculture: Growing with Nature's Wisdom"
          description="Our farm follows organic and permaculture principles, producing fresh vegetables, fruits, and herbs. We work in harmony with nature to create a sustainable ecosystem."
          buttonText="Explore Our Methods"
          imageSrc="https://images.unsplash.com/photo-1625246333195-78d9c38ad449"
          imageAlt="Organic farming at Mandala Farms"
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
      <ImageGallery />
      <div className="bg-[#FAF3E0]">
        <TestimonialSection theme="light" />
      </div>
      <Footer />
    </div>
  )
}
