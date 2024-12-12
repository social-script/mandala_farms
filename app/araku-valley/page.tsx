import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArakuValleyHero from '../components/ArakuValleyHero'
import WelcomeWithSubheadings from '../components/WelcomeWithSubheadings'
import Welcome from '../components/Welcome'
import PhotoCarousel from '../components/PhotoCarousel'
import GreenCampaign from '../components/GreenCampaign'

const page = () => {
  return (
    <div>
      <Navbar />
      <ArakuValleyHero />
      <GreenCampaign />
      <div className="bg-[#2F4538]">
        <Welcome 
          badge="TRADITIONAL CRAFTSMANSHIP"
          title="Crafting Our Mud House: A Journey with Local Artisans and Tradition"
          description="Our mud house was built using traditional techniques, showcasing the craftsmanship of local artisans. Each element reflects a commitment to sustainability and harmony with the environment."
          buttonText="Explore Our Process"
          imageSrc="https://images.unsplash.com/photo-1661332632427-83e4f7cd5d31"
          imageAlt="Traditional mud house crafted by local artisans"

        />
      </div>
      <div className="bg-[#2F4538]">
        <Welcome 
          badge="NATURAL HARMONY"
          title="Experience Harmony: Where Nature and Animals Coexist in Perfect Balance"
          description="At our farm, every moment is a celebration of nature's beauty and the joy of animal companionship. Embrace a lifestyle that nurtures both your spirit and the environment around you."
          buttonText="Meet Our Animals"
          imageSrc="https://images.unsplash.com/photo-1516467508483-a7212febe31a"
          imageAlt="Animals grazing peacefully in our eco-friendly farm"
        />
      </div>
      <div className="bg-[#FAF3E0]">
        <WelcomeWithSubheadings 
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
          buttonText="Explore Our Process"
          imageSrc="https://images.unsplash.com/photo-1661332632427-83e4f7cd5d31"
          imageAlt="Traditional mud house crafted by local artisans"
          theme="light"
        />
      </div>
      <div className="bg-[#2F4538]">
        <PhotoCarousel />
      </div>
      <Footer />
    </div>
  )
}

export default page
