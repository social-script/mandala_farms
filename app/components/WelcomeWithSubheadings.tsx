import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

interface WelcomeWithSubheadingsProps {
  badge: string
  title: string
  description: string
  subheadings?: {
    heading: string
    text: string
  }[]
  buttonText: string
  imageSrc: string
  imageAlt: string
  theme?: 'light' | 'dark'
}

export default function WelcomeWithSubheadings({
  badge,
  title,
  description,
  subheadings,
  buttonText,
  imageSrc = "https://images.unsplash.com/photo-1531650508371-1b1f0199b2ee?q=80&w=2342&auto=format&fit=crop",
  imageAlt,
  theme = 'dark'
}: WelcomeWithSubheadingsProps) {
  const styles = {
    light: {
      badge: 'bg-[#2F4538]/10 text-[#2F4538]',
      title: 'text-[#2F4538]',
      description: 'text-[#2F4538]/80',
      subheading: 'text-[#2F4538]',
      subtext: 'text-[#2F4538]/70',
      button: 'bg-[#2F4538] text-white hover:bg-[#2F4538]/90',
      border: 'border-[#2F4538]/10',
      line: 'bg-[#2F4538]/10'
    },
    dark: {
      badge: 'bg-white/10 text-[#E8FF8B]',
      title: 'text-white',
      description: 'text-white/80',
      subheading: 'text-white/90',
      subtext: 'text-white/70',
      button: 'bg-white/90 backdrop-blur-sm text-[#2F4538] hover:bg-white',
      border: 'border-white/10',
      line: 'bg-white/10'
    }
  }

  const currentStyle = styles[theme]

  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group">
          <Image
            src={imageSrc}
            alt={imageAlt || "Traditional architecture"}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/70" />
          <div className="absolute top-6 left-6 w-20 h-20 border-2 border-white/20 rounded-full" />
        </div>

        <div className="space-y-8 md:pl-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className={`inline-block rounded-full px-4 py-2 text-sm font-poppins font-medium tracking-wider ${currentStyle.badge}`}>
                {badge}
              </div>
              <div className={`h-[1px] flex-grow ${currentStyle.line}`} />
            </div>
            <h2 className={`font-playfair ${currentStyle.title} text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] max-w-xl`}>
              {title}
            </h2>
            <p className={`font-poppins ${currentStyle.description} text-base md:text-lg leading-relaxed max-w-xl`}>
              {description}
            </p>
          </div>

          {subheadings && subheadings.length > 0 && (
            <div className={`space-y-6 pt-4 border-l-2 ${currentStyle.border} pl-6`}>
              {subheadings.map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className={`font-playfair ${currentStyle.subheading} text-base md:text-xl font-medium`}>
                    {item.heading}
                  </h3>
                  <p className={`font-poppins ${currentStyle.subtext} text-sm md:text-base leading-relaxed`}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          <Button 
            className={`rounded-full font-poppins text-sm md:text-base px-6 py-3 ${currentStyle.button} hover:translate-x-2 transition-all duration-300`}
          >
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
} 