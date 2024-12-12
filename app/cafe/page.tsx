import React from 'react'
import Navbar from '../components/Navbar'
import StoryHeader from '../components/StoryHeader'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import WelcomeWithSubheadings from '../components/WelcomeWithSubheadings'
import ImageGallery from '../components/ImageGallery'
import TestimonialSection from '../components/TestimonialSection'

export default function CafePage() {
  return (
    <div className="bg-gradient-to-b from-[#2F4538] to-[#243A2D]">
      <Navbar />
      <StoryHeader 
        badge="DINING EXPERIENCE"
        title="Farm to Table Dining"
        description="Savor the authentic flavors of Araku Valley in our eco-friendly café, where every dish tells a story of sustainable farming and culinary artistry."
      />
      <div className="bg-[#2F4538]">
        <Welcome 
          badge="CULINARY ARTISTRY"
          title="Where Local Flavors Meet Modern Cuisine"
          description="Our chefs craft exceptional dishes using fresh ingredients from our organic farm, blending traditional recipes with contemporary techniques."
          buttonText="View Menu"
          imageSrc="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
          imageAlt="Farm to table dining experience"
        />
      </div>
      <div className="bg-[#2F4538]">
        <Welcome 
          badge="AMBIANCE"
          title="Dine with Panoramic Valley Views"
          description="Enjoy your meal in our thoughtfully designed space that offers breathtaking views of Araku Valley, creating an unforgettable dining experience."
          buttonText="Book a Table"
          imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          imageAlt="Restaurant interior with valley views"
        />
      </div>
      <div className="bg-[#FAF3E0]">
        <WelcomeWithSubheadings 
          badge="SPECIAL EXPERIENCES"
          title="Curated Dining Experiences"
          description="Immerse yourself in unique culinary experiences that celebrate local flavors and sustainable dining."
          subheadings={[
            {
              heading: "Private Dining",
              text: "Intimate dining settings with personalized service and custom menus."
            },
            {
              heading: "Chef's Table",
              text: "Interactive dining experience with our chef, featuring special tasting menus."
            },
            {
              heading: "Sunset Dinners",
              text: "Special evening experiences with carefully curated menus and valley views."
            }
          ]}
          buttonText="Reserve Experience"
          imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          imageAlt="Special dining experience at Mandala Farms"
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
