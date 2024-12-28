"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { MessageCircle } from "lucide-react"

interface ContactSectionProps {
  theme?: 'dark' | 'light'
}

export default function ContactSection({ theme = 'dark' }: ContactSectionProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-6">
            <h3 className={cn(
              "font-poppins text-sm md:text-base font-medium tracking-wider",
              theme === 'light' ? 'text-[#2F4538]/70' : 'text-[#E8FF8B]'
            )}>
              REACH OUT TO US
            </h3>
            <h2 className={cn(
              "font-playfair text-3xl sm:text-4xl md:text-5xl font-medium leading-tight",
              theme === 'light' ? 'text-[#2F4538]' : 'text-white'
            )}>
              Begin Your Journey
            </h2>
            <p className={cn(
              "font-poppins text-base md:text-lg leading-relaxed",
              theme === 'light' ? 'text-[#2F4538]/80' : 'text-white/80'
            )}>
              Connect with us to start your experience of sustainable luxury at Mandala Farms.
            </p>
          </div>

          <div className="space-y-10 md:space-y-14 pl-4 border-l border-[#E8FF8B]/30">
            <div className="space-y-1.5">
              <h3 className={cn(
                "font-playfair text-2xl md:text-3xl",
                theme === 'light' ? 'text-[#2F4538]' : 'text-white'
              )}>
                Email
              </h3>
              <p className={cn(
                "font-poppins text-sm tracking-wide",
                theme === 'light' ? 'text-[#2F4538]/70' : 'text-white/70'
              )}>
                For reservations and inquiries
              </p>
              <Link 
                href="mailto:reservations@mandalafarms.com" 
                className={cn(
                  "font-poppins text-lg hover:underline decoration-[#E8FF8B] underline-offset-4",
                  theme === 'light' ? 'text-[#2F4538]' : 'text-white'
                )}
              >
                mandalafarmsarakuvalley@gmail.com
              </Link>
            </div>

            <div className="space-y-1.5">
              <h3 className={cn(
                "font-playfair text-2xl md:text-3xl",
                theme === 'light' ? 'text-[#2F4538]' : 'text-white'
              )}>
                Phone
              </h3>
              <p className={cn(
                "font-poppins text-sm tracking-wide",
                theme === 'light' ? 'text-[#2F4538]/70' : 'text-white/70'
              )}>
                Available daily from 9 AM to 7 PM IST
              </p>
              <div className="space-y-2">
                <Link 
                  href="tel:+919529652435" 
                  className={cn(
                    "font-poppins text-lg hover:underline decoration-[#E8FF8B] underline-offset-4 flex items-center gap-2 group",
                    theme === 'light' ? 'text-[#2F4538]' : 'text-white'
                  )}
                >
                  <span className="font-medium">+91 95296 52435</span>
                  <span className={cn(
                    "text-sm",
                    theme === 'light' ? 'text-[#2F4538]/70' : 'text-white/70'
                  )}>
                    (Primary)
                  </span>
                </Link>
                <Link 
                  href="tel:+919529641655" 
                  className={cn(
                    "font-poppins text-lg hover:underline decoration-[#E8FF8B] underline-offset-4 flex items-center gap-2 group",
                    theme === 'light' ? 'text-[#2F4538]' : 'text-white'
                  )}
                >
                  <span className="font-medium">+91 95296 41655</span>
                  <span className={cn(
                    "text-sm",
                    theme === 'light' ? 'text-[#2F4538]/70' : 'text-white/70'
                  )}>
                    (Secondary)
                  </span>
                </Link>
                <Link 
                  href="https://wa.me/919529652435" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "font-poppins text-lg mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300",
                    theme === 'light' 
                      ? 'bg-[#2F4538]/5 text-[#2F4538] hover:bg-[#2F4538]/10' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  )}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </Link>
              </div>
            </div>

            <div className="space-y-1.5">
              <h3 className={cn(
                "font-playfair text-2xl md:text-3xl",
                theme === 'light' ? 'text-[#2F4538]' : 'text-white'
              )}>
                Location
              </h3>
              <p className={cn(
                "font-poppins text-lg",
                theme === 'light' ? 'text-[#2F4538]' : 'text-white'
              )}>
                Mandala Farms, Araku Valley
              </p>
              <p className={cn(
                "font-poppins text-sm tracking-wide",
                theme === 'light' ? 'text-[#2F4538]/70' : 'text-white/70'
              )}>
                Andhra Pradesh, India 531149
              </p>
              <Link 
                href="https://maps.app.goo.gl/DDmaoXYAm6GMnpQSA" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "font-poppins inline-flex items-center text-lg hover:underline decoration-[#E8FF8B] underline-offset-4",
                  theme === 'light' ? 'text-[#2F4538]' : 'text-white'
                )}
              >
                Get Directions
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="h-[500px] md:h-[600px] w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.2995417717784!2d82.93899569999999!3d18.2879048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bcbe6331373b5%3A0x3d3b6062fc21a8f3!2sMandala%20Farms%2C%20Araku%20Valley!5e0!3m2!1sen!2sin!4v1734420108211!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 