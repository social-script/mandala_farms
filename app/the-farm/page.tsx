import React from 'react'
import Navbar from '../components/Navbar'
import StoryHeader from '../components/StoryHeader'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import ImageGallery from '../components/ImageGallery'
import TestimonialSection from '../components/TestimonialSection'
import WelcomeCarouselWithSubheadings from '../components/WelcomeCarouselWithSubheadings'
import WelcomeCarousel from '../components/WelcomeCarousel'

export const runtime = 'edge'
export const preferredRegion = 'auto'
export const dynamic = 'force-static'

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
          imageSrc="/farming4.jpg"
          imageAlt="Organic farming at Mandala Farms"
        />
      </div>
      <div className="bg-[#2F4538]">
      <WelcomeCarousel 
  badge="FARM LIFE"
  title="A Haven for Wildlife and Farm Animals"
  description="Our farm is home to a variety of animals, from free-range chickens to friendly goats. Experience the joy of connecting with nature and our animal companions."
  media={[
    { 
      type: 'image',
      src: "/animal7.jpg", 
      alt: "Luxury eco-cottage view 1" 
    },
    { 
      type: 'video',
      src: "/animal4.mp4"
    },
    { 
      type: 'image',
      src: "/animal5.jpg", 
      alt: "Luxury eco-cottage view 2" 
    },
    { 
      type: 'image',
      src: "/animal3.jpg", 
      alt: "Luxury eco-cottage view 2" 
    },
    { 
      type: 'image',
      src: "/animal1.jpg", 
      alt: "Luxury eco-cottage view 2" 
    },
    
  ]}
  theme="dark"
/>
</div>
      <div className="bg-[#FAF3E0]">
      <WelcomeCarouselWithSubheadings 
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
    }
  ]}
  media={[
    {
      type: 'image',
      src: "/farming1.jpg",
      alt: "Farm activities"
    },
    {
      type: 'image',
      src: "/farming3.jpg",
      alt: "Workshop activities"
    },
    {
      type: 'image',
      src: "/OurStory_car2.jpg",
      alt: "Workshop activities"
    },
    {
      type: 'image',
      src: "/farming2.jpg",
      alt: "Workshop activities"
    }
  ]}
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
