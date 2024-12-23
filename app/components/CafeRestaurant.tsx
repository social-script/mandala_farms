import { Utensils, Leaf } from 'lucide-react'
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CafeRestaurant() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <Card className="bg-[#FAF3E0] text-[#2F4538] rounded-[2rem] md:rounded-[2.5rem]">
        <CardContent className="p-4 md:p-8 lg:p-12">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[240px] sm:h-[300px] lg:h-[600px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden order-1 lg:order-none group">
              <Image
                src="/food1.jpg"
                alt="Mandala Farms Café and Restaurant"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-[#2F4538]/90 backdrop-blur-sm rounded-[0.75rem] md:rounded-[1rem] p-2.5 md:p-6 max-w-[150px] md:max-w-[280px]">
                <p className="font-poppins text-white/90 text-[11px] md:text-sm leading-relaxed">
                  &ldquo;An unforgettable dining experience – indulge in vibrant local flavors as the sun dips below the Araku horizon.&rdquo;
                </p>
                <p className="font-poppins text-[#E8FF8B] text-[10px] md:text-sm mt-1 md:mt-2">
                  - Chef&apos;s Recommendation
                </p>
              </div>
            </div>

            <div className="space-y-5 md:space-y-8">
              <div>
                <h3 className="font-poppins text-[#2F4538]/70 text-xs md:text-sm font-medium tracking-wider mb-2 md:mb-4">
                  DINING EXPERIENCE
                </h3>
                <h2 className="font-playfair text-[#2F4538] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  Savor Local Flavors in an Enchanting Setting
                </h2>
              </div>
              
              <p className="font-poppins text-[#2F4538]/80 text-sm md:text-lg leading-relaxed">
                Our café cum restaurant offers a delightful blend of rustic charm and modern comfort. Enjoy locally sourced dishes while soaking in the breathtaking views of the Araku Valley.
              </p>

              <div className="space-y-3 md:space-y-6">
                <div className="flex items-start gap-2.5 md:gap-4">
                  <div className="p-2 md:p-3 bg-[#2F4538]/5 rounded-full">
                    <Utensils className="h-4 w-4 md:h-6 md:w-6 text-[#2F4538]" />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="font-playfair text-[#2F4538] text-base md:text-xl font-medium">
                      Farm-to-Table Dining
                    </h3>
                    <p className="font-poppins text-[#2F4538]/70 text-xs md:text-base">
                      Fresh ingredients from our organic farm, crafted into delicious meals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 md:gap-4">
                  <div className="p-2 md:p-3 bg-[#2F4538]/5 rounded-full">
                    <Leaf className="h-4 w-4 md:h-6 md:w-6 text-[#2F4538]" />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <h3 className="font-playfair text-[#2F4538] text-base md:text-xl font-medium">
                      Eco-Conscious Setting
                    </h3>
                    <p className="font-poppins text-[#2F4538]/70 text-xs md:text-base">
                      Sustainable dining space with panoramic views of nature.
                    </p>
                  </div>
                </div>
              </div>
              <div>
              <Link href="/contact-us">
              <Button className="bg-[#2F4538] text-white hover:bg-[#2F4538]/90 rounded-full px-4 md:px-8 py-2 md:py-3 text-sm md:text-base">
                Contact Us
                <span className="ml-2">→</span>
              </Button>
              </Link>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 