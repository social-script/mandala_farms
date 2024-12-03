import { Utensils, Leaf } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function CafeRestaurant() {
  return (
    <section className="container mx-auto px-4 py-24">
      <Card className="bg-[#FAF3E0] text-[#2F4538] rounded-[2.5rem]">
        <CardContent className="p-8 md:p-12">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden order-1 lg:order-none group">
              <Image
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf"
                alt="Mandala Farms Café and Restaurant"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-8 left-8 bg-[#2F4538]/90 backdrop-blur-sm rounded-[1rem] p-6 max-w-[280px]">
                <p className="font-poppins text-white/90 text-sm leading-relaxed">
                  &ldquo;An unforgettable dining experience – indulge in vibrant local flavors as the sun dips below the Araku horizon.&rdquo;
                </p>
                <p className="font-poppins text-[#E8FF8B] text-sm mt-2">
                  - Chef&apos;s Recommendation
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-poppins text-[#2F4538]/70 text-sm font-medium tracking-wider mb-4">
                  DINING EXPERIENCE
                </h3>
                <h2 className="font-playfair text-[#2F4538] text-4xl md:text-5xl font-medium leading-tight">
                Savor Local Flavors in an Enchanting Setting
                </h2>
              </div>
              
              <p className="font-poppins text-[#2F4538]/80 text-lg leading-relaxed">
                Our café cum restaurant offers a delightful blend of rustic charm and modern comfort. Enjoy locally sourced dishes while soaking in the breathtaking views of the Araku Valley.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2F4538]/5 rounded-full">
                    <Utensils className="h-6 w-6 text-[#2F4538]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-playfair text-[#2F4538] text-xl font-medium">
                      Farm-to-Table Dining
                    </h3>
                    <p className="font-poppins text-[#2F4538]/70">
                      Fresh ingredients from our organic farm, crafted into delicious meals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#2F4538]/5 rounded-full">
                    <Leaf className="h-6 w-6 text-[#2F4538]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-playfair text-[#2F4538] text-xl font-medium">
                      Eco-Conscious Setting
                    </h3>
                    <p className="font-poppins text-[#2F4538]/70">
                      Sustainable dining space with panoramic views of nature.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="bg-[#2F4538] text-white hover:bg-[#2F4538]/90 rounded-full px-8">
                Reserve a Table
                <span className="ml-2">→</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 