import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StoryHeader from '../components/StoryHeader'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="bg-gradient-to-b from-[#2F4538] to-[#243A2D]">
      <Navbar />
      <StoryHeader 
        badge="TERMS & CONDITIONS"
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services."
      />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
            <p className="text-white/80 mb-8">
              Effective Date: March 15, 2024
            </p>
            
            <p className="text-white/80 mb-8">
              Welcome to Mandala Farms - Luxury Eco Stay Farm. These Terms and Conditions govern your use of our website, services, and property. By making a booking or engaging with our services, you agree to abide by these terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">1. General Information</h2>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>Mandala Farms is a luxury eco-stay farm focused on sustainable hospitality.</li>
              <li>These Terms and Conditions apply to all bookings, services, and interactions with Mandala Farms.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">2. Bookings and Reservations</h2>
            <ul className="list-disc pl-6 text-white/80 mb-4">
              <li>Reservations are subject to availability and confirmation.</li>
              <li>A deposit or full payment may be required at the time of booking to secure your reservation.</li>
              <li>Guests must provide accurate personal details during the booking process.</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#E8FF8B] mb-4">a. Cancellation Policy</h3>
            <ul className="list-disc pl-6 text-white/80 mb-4">
              <li>Cancellations made 7 days before the check-in date will receive a full refund.</li>
              <li>Cancellations made within 7 days may incur a 50% cancellation fee.</li>
              <li>No-shows or cancellations on the day of arrival are non-refundable.</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#E8FF8B] mb-4">b. Amendments to Bookings</h3>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>Changes to bookings are subject to availability and may incur additional charges.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">3. Check-In and Check-Out</h2>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>Check-In Time: 2:00 PM</li>
              <li>Check-Out Time: 11:00 AM</li>
              <li>Early check-in or late check-out is subject to availability and may incur additional charges.</li>
              <li>Guests must present valid identification upon check-in.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">4. Guest Responsibilities</h2>
            <p className="text-white/80 mb-4">Guests are expected to:</p>
            <ul className="list-disc pl-6 text-white/80 mb-4">
              <li>Respect the farm's eco-friendly policies and guidelines.</li>
              <li>Ensure proper use of all facilities and amenities.</li>
              <li>Avoid causing damage to property or disruption to other guests.</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#E8FF8B] mb-4">a. Damage and Liability</h3>
            <ul className="list-disc pl-6 text-white/80 mb-4">
              <li>Any damage caused by the guest to the property, furniture, or fixtures must be reported immediately and may be charged to the guest.</li>
              <li>Mandala Farms is not responsible for loss or damage to personal belongings during your stay.</li>
            </ul>

            <h3 className="text-xl font-playfair text-[#E8FF8B] mb-4">b. Safety and Conduct</h3>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>For your safety and that of others, please adhere to the farm's safety instructions.</li>
              <li>Smoking is prohibited in all indoor spaces and designated non-smoking areas.</li>
              <li>Pets are welcome with prior approval and must be supervised at all times.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">5. Use of Facilities</h2>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>Farm facilities, including cottages, the café, and outdoor areas, are for registered guests only.</li>
              <li>Guests must use facilities responsibly and in accordance with farm rules.</li>
              <li>Outdoor seating and recreational areas may be closed during adverse weather or maintenance periods.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">6. Sustainability Practices</h2>
            <p className="text-white/80 mb-4">Mandala Farms is committed to eco-friendly practices:</p>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>Waste segregation and recycling are mandatory.</li>
              <li>Guests are encouraged to conserve water and electricity.</li>
              <li>Only biodegradable toiletries and products are allowed on the property.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">7. Café and Restaurant Policies</h2>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>Outside food and beverages are not permitted in the café or restaurant.</li>
              <li>Allergies and dietary restrictions should be communicated in advance.</li>
              <li>Reservations may be required for large groups.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">8. Limitation of Liability</h2>
            <p className="text-white/80 mb-4">Mandala Farms is not liable for:</p>
            <ul className="list-disc pl-6 text-white/80 mb-4">
              <li>Injuries or accidents occurring due to guest negligence.</li>
              <li>Delays, interruptions, or issues caused by unforeseen circumstances (e.g., weather, natural disasters).</li>
            </ul>
            <p className="text-white/80 mb-8">
              Guests agree to indemnify Mandala Farms from any claims arising from non-compliance with these terms.
            </p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">9. Privacy</h2>
            <ul className="list-disc pl-6 text-white/80 mb-8">
              <li>All personal information provided by guests is handled in accordance with our <Link href="/privacy" className="text-[#E8FF8B] hover:underline">Privacy Policy</Link>.</li>
              <li>Guests consent to the use of their data for booking, communication, and service improvement.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">10. Changes to Terms</h2>
            <p className="text-white/80 mb-8">
              Mandala Farms reserves the right to modify these Terms and Conditions at any time. Updated terms will be posted on our website with the effective date.
            </p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">11. Governing Law</h2>
            <p className="text-white/80 mb-8">
              These Terms and Conditions are governed by the laws of India. Any disputes will be resolved exclusively in the courts of Andhra Pradesh.
            </p>

            <h2 className="text-2xl md:text-3xl font-playfair text-[#E8FF8B] mb-6">12. Contact Us</h2>
            <p className="text-white/80 mb-4">If you have any questions regarding these Terms and Conditions, please contact us at:</p>
            <div className="text-white/80">
              <p>Mandala Farms - Luxury Eco Stay Farm</p>
              <p>Email: mandalafarmsarakuvalley@gmail.com</p>
              <p>Phone: +91 95296 52435</p>
              <p>Address: Mandala Farms, Araku Valley, Andhra Pradesh 531149</p>
            </div>

            <p className="text-white/80 mt-8">
              By proceeding with a booking or engaging with our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. Thank you for choosing Mandala Farms for your eco-luxury getaway!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 