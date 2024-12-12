import React from 'react'
import Navbar from '../components/Navbar'
import StoryHeader from '../components/StoryHeader'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import ContactSection from '../components/ContactSection'

export default function ContactUsPage() {
  return (
    <div className="bg-gradient-to-b from-[#2F4538] to-[#243A2D]">
      <Navbar />
      <StoryHeader 
        badge="GET IN TOUCH"
        title="Connect With Us"
        description="Whether you're planning a stay, have questions about our experiences, or want to learn more about Mandala Farms, we're here to help."
      />
      <ContactForm /> 
      <div className="bg-[#2F4538]">
        <ContactSection />
      </div>
      <Footer />
    </div>
  )
}
