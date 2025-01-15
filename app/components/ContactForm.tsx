"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { MessageCircle } from "lucide-react"

interface ContactFormProps {
  theme?: 'dark' | 'light'
}

declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        ready: (callback: () => void) => void;
        execute: (siteKey: string, options: { action: string }) => Promise<string>;
      };
    };
  }
}

function WhatsAppVerification({ 
  theme, 
  onConfirm, 
  onCancel 
}: { 
  theme: 'dark' | 'light'
  onConfirm: () => void
  onCancel: () => void 
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className={cn(
        "max-w-md w-full rounded-3xl p-6 space-y-4",
        theme === 'light' ? 'bg-white' : 'bg-[#2F4538]'
      )}>
        <h3 className={cn(
          "font-playfair text-xl font-medium",
          theme === 'light' ? 'text-[#2F4538]' : 'text-white'
        )}>
          Verify WhatsApp Contact
        </h3>
        <p className={cn(
          "font-poppins",
          theme === 'light' ? 'text-[#2F4538]/80' : 'text-white/80'
        )}>
          Are you sure you want to contact us on WhatsApp? This will open WhatsApp in a new window.
        </p>
        <div className="flex gap-3 justify-end">
          <Button
            onClick={onCancel}
            variant="outline"
            className={cn(
              "rounded-full",
              theme === 'light' 
                ? 'border-[#2F4538]/20 text-[#2F4538] hover:bg-[#2F4538]/5' 
                : 'border-white/20 text-white hover:bg-white/5'
            )}
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className={cn(
              "rounded-full",
              theme === 'light'
                ? 'bg-[#2F4538] text-white hover:bg-[#2F4538]/90'
                : 'bg-white text-[#2F4538] hover:bg-white/90'
            )}
          >
            Continue to WhatsApp
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function ContactForm({ theme = 'dark' }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false)
  const [showWhatsAppConfirm, setShowWhatsAppConfirm] = useState(false)

  useEffect(() => {
    // Load the reCAPTCHA script dynamically
    const script = document.createElement('script')
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      if (window.grecaptcha) {
        window.grecaptcha.enterprise.ready(() => {
          setRecaptchaLoaded(true)
        })
      } else {
        console.error('reCAPTCHA not loaded properly')
      }
    }

    script.onerror = () => {
      console.error('Error loading reCAPTCHA script')
    }

    document.head.appendChild(script)

    return () => {
      try {
        document.head.removeChild(script)
      } catch (error) {
        console.error('Error removing reCAPTCHA script:', error)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    setIsSubmitting(true)

    toast({
      title: "Verifying...",
      description: "Please wait while we verify your request.",
      duration: 2000,
    })

    try {
      // Execute reCAPTCHA and get token
      if (!recaptchaLoaded) {
        throw new Error('reCAPTCHA not loaded')
      }

      const token = await window.grecaptcha.enterprise.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, 
        { action: 'submit_form' }
      )

      const formData = new FormData(form)
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
        recaptchaToken: token
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        duration: 5000,
        variant: "default",
      })

      // Reset form
      form.reset()
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
            
            {/* Add WhatsApp Button */}
            <Button
              onClick={() => setShowWhatsAppConfirm(true)}
              variant="outline"
              className={cn(
                "font-poppins inline-flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300",
                theme === 'light' 
                  ? 'bg-[#2F4538] text-white hover:bg-[#2F4538]/90' 
                  : 'bg-white text-[#2F4538] hover:bg-white/90'
              )}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Chat with us on WhatsApp</span>
            </Button>

            {showWhatsAppConfirm && (
              <WhatsAppVerification
                theme={theme}
                onConfirm={() => {
                  window.open('https://wa.me/918309750409', '_blank')
                  setShowWhatsAppConfirm(false)
                }}
                onCancel={() => setShowWhatsAppConfirm(false)}
              />
            )}
          </div>
        </div>

        {/* Right Column - Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <Label htmlFor="name" className={cn(
              "font-poppins text-sm tracking-wider",
              theme === 'light' ? 'text-[#2F4538]' : 'text-white'
            )}>
              NAME
            </Label>
            <Input
              name="name"
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
              name="email"
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
            <Label htmlFor="phone" className={cn(
              "font-poppins text-sm tracking-wider flex items-center gap-2",
              theme === 'light' ? 'text-[#2F4538]' : 'text-white'
            )}>
              PHONE
              <span className={cn(
                "text-xs font-normal",
                theme === 'light' ? 'text-[#2F4538]/60' : 'text-white/60'
              )}>
                (Optional)
              </span>
            </Label>
            <Input
              name="phone"
              id="phone"
              type="tel"
              className={cn(
                "font-poppins h-14 bg-transparent rounded-full px-6",
                theme === 'light' 
                  ? 'border-[#2F4538]/20 focus-visible:border-[#2F4538] text-[#2F4538] placeholder:text-[#2F4538]/50' 
                  : 'border-white/20 focus-visible:border-white text-white placeholder:text-white/50'
              )}
              placeholder="Your phone number"
            />
          </div>

          <div className="space-y-3">
            <Input
              name="website"
              type="text"
              autoComplete="off"
              className="hidden"
              tabIndex={-1}
              aria-hidden="true"
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
              name="message"
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
            disabled={isSubmitting}
            className={cn(
              "font-poppins h-14 px-8 rounded-full transition-all duration-300",
              theme === 'light'
                ? 'bg-[#2F4538] text-white hover:bg-[#2F4538]/90'
                : 'bg-white text-[#2F4538] hover:bg-white/90'
            )}
          >
            {isSubmitting ? "Verifying..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  )
} 