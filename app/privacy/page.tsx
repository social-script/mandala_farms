import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StoryHeader from '../components/StoryHeader'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gradient-to-b from-[#2F4538] to-[#243A2D]">
      <Navbar />
      <StoryHeader 
        badge="PRIVACY POLICY"
        title="Privacy Policy"
        description="Learn about how we collect, use, and protect your personal information."
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-white/80 mb-8">
              Effective Date: March 15, 2024
            </p>
            
            <p className="text-white/80 mb-8">
              Mandala Farms - Luxury Eco Stay Farm values your privacy and is committed to safeguarding the personal information of our guests, visitors, and partners. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you interact with our website, services, or property.
            </p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">1. Information We Collect</h2>
            <p className="text-white/80 mb-4">We may collect and process the following types of information:</p>
            
            <h3 className="text-xl font-playfair text-[#E8FF8B] mb-4">a. Personal Information</h3>
            <ul className="list-disc pl-6 text-white/80 mb-4">
              <li>Name, email address, phone number, and address provided during booking or inquiries.</li>
              <li>Payment details for reservations or purchases.</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#E8FF8B] mb-4">b. Non-Personal Information</h3>
            <ul className="list-disc pl-6 text-white/80 mb-4">
              <li>Browser type, device information, IP address, and pages accessed on our website.</li>
              <li>Information obtained through cookies or similar technologies for website functionality and analytics.</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#E8FF8B] mb-4">c. On-Site Data</h3>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>Any personal preferences or special requests shared during your stay.</li>
              <li>Feedback provided through reviews, surveys, or direct communication.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">2. How We Use Your Information</h2>
            <p className="text-white/80 mb-4">Your information is used to:</p>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>Process bookings, payments, and service requests.</li>
              <li>Personalize your experience during your stay.</li>
              <li>Improve our services, website, and guest experience.</li>
              <li>Respond to inquiries and customer support needs.</li>
              <li>Comply with legal requirements and maintain the safety of our guests and property.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">3. Sharing Your Information</h2>
            <p className="text-white/80 mb-4">We respect your privacy and do not sell or share your personal information with third parties, except in the following circumstances:</p>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>Service Providers: To trusted partners necessary for fulfilling bookings, payments, or marketing activities.</li>
              <li>Legal Compliance: If required by law or to protect the rights, safety, or property of Mandala Farms.</li>
              <li>Consent: With your explicit consent for any specific purpose.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">4. Cookies and Tracking</h2>
            <p className="text-white/80 mb-4">Our website uses cookies and similar technologies to enhance your browsing experience. Cookies help us:</p>
            <ul className="list-disc pl-6 text-white/80 mb-4">
              <li>Remember your preferences.</li>
              <li>Analyze website traffic and performance.</li>
            </ul>
            <p className="text-white/80 mb-8">You can manage cookie preferences through your browser settings. However, disabling cookies may affect website functionality.</p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">5. Data Security</h2>
            <p className="text-white/80 mb-8">
              We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. While we strive for the highest standards, no system is completely secure, and we cannot guarantee absolute protection.
            </p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">6. Third-Party Links</h2>
            <p className="text-white/80 mb-8">
              Our website may include links to third-party websites. We are not responsible for their privacy practices. Please review the privacy policies of those sites before providing any personal information.
            </p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">7. Your Rights</h2>
            <p className="text-white/80 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-white/80 mb-4">
              <li>Access, update, or delete your personal information.</li>
              <li>Opt-out of marketing communications at any time.</li>
              <li>Request information about data usage or processing.</li>
            </ul>
            <p className="text-white/80 mb-8">
              To exercise these rights, please contact us at mandalafarmsarakuvalley@gmail.com.
            </p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">8. Changes to This Policy</h2>
            <p className="text-white/80 mb-8">
              We may update this Privacy Policy from time to time to reflect changes in practices or legal requirements. The latest version will be available on our website with the effective date mentioned at the top.
            </p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">9. Contact Us</h2>
            <p className="text-white/80 mb-4">For questions, concerns, or requests related to this Privacy Policy, please contact us at:</p>
            <div className="text-white/80">
              <p>Mandala Farms - Luxury Eco Stay Farm</p>
              <p>Email: mandalafarmsarakuvalley@gmail.com</p>
              <p>Phone: +91 95296 52435</p>
              <p>Address: Mandala Farms, Araku Valley, Andhra Pradesh 531149</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 