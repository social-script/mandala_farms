"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ContactFormProps {
  theme?: 'dark' | 'light'
}

export default function ContactForm({ theme = 'dark' }: ContactFormProps) {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-8 md:space-y-12">
          <div className="space-y-6">
            <h3 className={cn(
              "font-poppins text-sm md:text-base font-medium tracking-wider",
              theme === 'light' ? 'text-[#2F4538]/70' : 'text-[#E8FF8B]'
            )}>
              GET IN TOUCH
            </h3>
            <h2 className={cn(
              "font-playfair text-3xl sm:text-4xl md:text-5xl font-medium leading-tight",
              theme === 'light' ? 'text-[#2F4538]' : 'text-white'
            )}>
              Let&apos;s Start Your Journey
            </h2>
            <p className={cn(
              "font-poppins text-base md:text-lg leading-relaxed",
              theme === 'light' ? 'text-[#2F4538]/80' : 'text-white/80'
            )}>
              Experience the perfect blend of luxury and nature at Mandala Farms. We&apos;re here to assist you with your booking and answer any questions.
            </p>
          </div>
        </div>

        {/* Right Column - Form */}
        <form className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="name" className={cn(
              "font-poppins text-sm tracking-wider",
              theme === 'light' ? 'text-[#2F4538]' : 'text-white'
            )}>
              NAME
            </Label>
            <Input
              id="name"
              required
              className={cn(
                "font-poppins h-14 bg-transparent rounded-full px-6",
                theme === 'light' 
                  ? 'border-[#2F4538]/20 focus-visible:border-[#2F4538] text-[#2F4538] placeholder:text-[#2F4538]/50' 
                  : 'border-white/20 focus-visible:border-white text-white placeholder:text-white/50'
              )}
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="email" className={cn(
              "font-poppins text-sm tracking-wider",
              theme === 'light' ? 'text-[#2F4538]' : 'text-white'
            )}>
              EMAIL
            </Label>
            <Input
              id="email"
              type="email"
              required
              className={cn(
                "font-poppins h-14 bg-transparent rounded-full px-6",
                theme === 'light' 
                  ? 'border-[#2F4538]/20 focus-visible:border-[#2F4538] text-[#2F4538] placeholder:text-[#2F4538]/50' 
                  : 'border-white/20 focus-visible:border-white text-white placeholder:text-white/50'
              )}
              placeholder="Your email address"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="message" className={cn(
              "font-poppins text-sm tracking-wider",
              theme === 'light' ? 'text-[#2F4538]' : 'text-white'
            )}>
              MESSAGE
            </Label>
            <Textarea
              id="message"
              required
              className={cn(
                "font-poppins min-h-[150px] bg-transparent rounded-3xl px-6 py-4 resize-none",
                theme === 'light' 
                  ? 'border-[#2F4538]/20 focus-visible:border-[#2F4538] text-[#2F4538] placeholder:text-[#2F4538]/50' 
                  : 'border-white/20 focus-visible:border-white text-white placeholder:text-white/50'
              )}
              placeholder="Tell us about your plans..."
            />
          </div>

          <div className="flex items-center gap-3">
            <Checkbox 
              id="terms" 
              required 
              className={cn(
                "rounded-full",
                theme === 'light' 
                  ? 'border-[#2F4538]/20 data-[state=checked]:border-[#2F4538] data-[state=checked]:bg-[#2F4538]' 
                  : 'border-white/20 data-[state=checked]:border-white data-[state=checked]:bg-white'
              )}
            />
            <Label 
              htmlFor="terms" 
              className={cn(
                "font-poppins text-sm",
                theme === 'light' ? 'text-[#2F4538]' : 'text-white'
              )}
            >
              I accept the{" "}
              <a href="/terms" className="underline underline-offset-4 hover:text-[#E8FF8B]">
                Terms & Conditions
              </a>
            </Label>
          </div>

          <Button 
            type="submit" 
            className={cn(
              "font-poppins h-14 px-8 rounded-full transition-all duration-300",
              theme === 'light'
                ? 'bg-[#2F4538] text-white hover:bg-[#2F4538]/90'
                : 'bg-white text-[#2F4538] hover:bg-white/90'
            )}
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  )
} 