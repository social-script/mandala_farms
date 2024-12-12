import Image from "next/image"

export default function ImageGallery() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-24">
      <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12">
        <h3 className="font-poppins text-[#E8FF8B] text-sm md:text-base font-medium tracking-wider">
          VISUAL JOURNEY
        </h3>
        <h2 className="font-playfair text-white text-2xl sm:text-4xl md:text-5xl font-medium leading-[1.1]">
          Moments of Natural Beauty
        </h2>
        <p className="font-poppins text-white/80 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
          Immerse yourself in the tranquil beauty of Mandala Farms through our curated collection of images.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6">
        {/* Tall image - adjusted aspect ratio for mobile */}
        <div className="md:col-span-5 relative group">
          <div className="aspect-[4/3] md:aspect-[4/6] relative overflow-hidden rounded-2xl md:rounded-[2.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1553509990-7686c6f0fae1"
              alt="Luxury eco-cottage nestled in lush greenery"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />
          </div>
        </div>
        
        <div className="md:col-span-7 grid grid-rows-2 gap-3 md:gap-6">
          {/* Top wide image */}
          <div className="relative group">
            <div className="aspect-[16/9] relative overflow-hidden rounded-2xl md:rounded-[2.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1500076656116-558758c991c1"
                alt="Panoramic view of Mandala Farms' organic fields"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />
            </div>
          </div>
          
          {/* Bottom row split into two */}
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <div className="relative group">
              <div className="aspect-[4/3] md:aspect-square relative overflow-hidden rounded-2xl md:rounded-[2.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884"
                  alt="Farm-to-table organic dining experience"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-[4/3] md:aspect-square relative overflow-hidden rounded-2xl md:rounded-[2.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2"
                  alt="Eco-friendly amenities in luxurious settings"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 