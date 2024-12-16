import React from 'react'
import Navbar from '../components/Navbar'
import StoryHeader from '../components/StoryHeader'
import VideoSection from '../components/VideoSection'
import TimelineSection from '../components/TimelineSection'
import Footer from '../components/Footer'
import WelcomeCarousel from '../components/WelcomeCarousel'
import WelcomeCarouselWithSubheadings from '../components/WelcomeCarouselWithSubheadings'

export default function OurStoryPage() {
  return (
    <div className="bg-gradient-to-b from-[#2F4538] to-[#243A2D]">
      <Navbar />
      <StoryHeader 
        badge="OUR JOURNEY"
        title="Our Inspiring Journey"
        description="Discover how Rajeev and Pratiksha transformed their dreams into a thriving eco-friendly paradise."
      />
      <VideoSection />
      {/* <div className="bg-[#2F4538]">
        <Welcome 
          badge="TRADITIONAL CRAFTSMANSHIP"
          title="Crafting Our Mud House: A Journey with Local Artisans and Tradition"
          description="Our mud house was built using traditional techniques, showcasing the craftsmanship of local artisans. Each element reflects a commitment to sustainability and harmony with the environment."
          buttonText="Explore Our Process"
          imageSrc="https://images.unsplash.com/photo-1661332632427-83e4f7cd5d31"
          imageAlt="Traditional mud house crafted by local artisans"

        />
      </div> */}
      <div className="bg-[#FAF3E0]">
      <WelcomeCarouselWithSubheadings 
  badge="TRADITIONAL CRAFTSMANSHIP"
  title="Crafting Our Mud House: A Journey with Local Artisans and Tradition"
  description="Our mud house was built using traditional techniques, showcasing the craftsmanship of local artisans. Each element reflects a commitment to sustainability and harmony with the environment."
  subheadings={[
    {
      heading: "Local Artisanship",
      text: "Working with skilled local craftsmen to preserve traditional building techniques."
    },
    {
      heading: "Sustainable Materials",
      text: "Using locally sourced, eco-friendly materials that minimize environmental impact."
    }
  ]}
  buttonText="Book an Experience"
  media={[
    {
      type: 'image',
      src: "/OurStory_car1.webp",
      alt: "Luxury eco-cottage view 1"
    },
    {
      type: 'image',
      src: "/OurStory_car3.jpg",
      alt: "Workshop activities"
    },
    {
      type: 'image',
      src: "/building1.jpg",
      alt: "Workshop activities"
    },
    {
      type: 'image',
      src: "/building2.jpg",
      alt: "Workshop activities"
    }
  ]}
  theme="light"
/>
</div>
      <div className="bg-[#2F4538]">
      <WelcomeCarousel 
  badge="NATURAL HARMONY"
  title="Experience Harmony: Where Nature and Animals Coexist in Perfect Balance"
  description="At our farm, every moment is a celebration of nature's beauty and the joy of animal companionship. Embrace a lifestyle that nurtures both your spirit and the environment around you."
  buttonText="Meet Our Animals"
  media={[
    { 
      type: 'image',
      src: "/animal1.jpg", 
      alt: "Luxury eco-cottage view 1" 
    },
    { 
      type: 'video',
      src: "/animal4.mp4"
    },
    { 
      type: 'image',
      src: "/animal6.jpg", 
      alt: "Luxury eco-cottage view 2" 
    },
    { 
      type: 'image',
      src: "/animal8.jpg", 
      alt: "Luxury eco-cottage view 2" 
    },
    
  ]}
  theme="dark"
/>
</div>
      {/* <div className="bg-[#2F4538]">
        <Welcome 
          badge="NATURAL HARMONY"
          title="Experience Harmony: Where Nature and Animals Coexist in Perfect Balance"
          description="At our farm, every moment is a celebration of nature's beauty and the joy of animal companionship. Embrace a lifestyle that nurtures both your spirit and the environment around you."
          buttonText="Meet Our Animals"
          imageSrc="https://images.unsplash.com/photo-1516467508483-a7212febe31a"
          imageAlt="Animals grazing peacefully in our eco-friendly farm"
        />
      </div> */}
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
  buttonText="Book an Experience"
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
      <div className="bg-[#1F3428]">
        <TimelineSection />
      </div>
      <Footer />
    </div>
  )
}
