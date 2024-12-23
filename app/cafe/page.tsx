import React from 'react'
import CafeNavbar from '../components/CafeNavbar'
import Footer from '../components/Footer'
import Welcome from '../components/Welcome'
import dynamic from 'next/dynamic'
import CafeHero from '../components/CafeHero'
import CafeRestaurant from '../components/CafeRestaurant'
import PhotoCarousel from '../components/PhotoCarousel'
import WelcomeCarouselWithSubheadings from '../components/WelcomeCarouselWithSubheadings'

const TestimonialSection = dynamic(() => import('../components/TestimonialSection'), {
  loading: () => <div className="h-96 bg-[#FAF3E0] animate-pulse" />
})

export default function CafePage() {
  return (
    <div className="bg-gradient-to-b from-[#2F4538] to-[#243A2D]">
      <CafeNavbar />
      <CafeHero />
      <CafeRestaurant />
      <div className="bg-[#FAF3E0]">
      <WelcomeCarouselWithSubheadings 
  badge="AMBIANCE"
  title="Dine with Panoramic Valley Views"
  description="Enjoy your meal in our thoughtfully designed space that offers breathtaking views of Araku Valley, creating an unforgettable dining experience."
  subheadings={[
    {
      heading: "Panoramic Views",
      text: "Enjoy breathtaking views of Araku Valley from our restaurant."
    },
    {
      heading: "Outdoor Seating",
      text: "Enjoy a meal in our outdoor seating area, surrounded by nature."
    }
  ]}
  media={[
    {
      type: 'image',
      src: "/cafe2.jpeg",
      alt: "Luxury eco-cottage view 1"
    },
    {
      type: 'image',
      src: "/cafe3.jpeg",
      alt: "Workshop activities"
    },
    {
      type: 'image',
      src: "/insta1.jpg",
      alt: "Workshop activities"
    },
    {
      type: 'image',
      src: "/cafe4.jpeg",
      alt: "Workshop activities"
    }
  ]}
  theme="light"
/>
</div>
      <div className="bg-[#2F4538]">
        <Welcome 
          badge="SPECIAL MUSIC NIGHT"
          title="A Night of Melody and Magic"
          description="Join us at Mandala Farm for an enchanting Music Night, where soul-stirring songs and melodies set the tone for an unforgettable evening. Let the rhythm of the night elevate your senses as you enjoy the beauty of live performances in our serene, luxurious eco-farm setting."
          buttonText="Reserve Your Spot"
          imageSrc="/cafe1.jpeg"
          imageAlt="Restaurant interior with valley views"
          buttonLink="/contact-us"
        />
      </div>
      <div className="bg-[#FAF3E0]">
        <TestimonialSection theme="light" />
      </div>
      <PhotoCarousel />
      <Footer />
    </div>
  )
}
