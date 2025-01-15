import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface WhatsAppVerificationProps {
  theme: 'dark' | 'light'
  onConfirm: () => void
  onCancel: () => void
}

export default function WhatsAppVerification({ 
  theme, 
  onConfirm, 
  onCancel 
}: WhatsAppVerificationProps) {
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