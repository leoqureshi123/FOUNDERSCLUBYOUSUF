import { ExternalLink, Mail, MessageCircle, ArrowLeft } from "lucide-react"
import { useEffect, useState } from "react"
import asmaImage from "@/assets/Asma.jpeg"
import whatsappIcon from "@/assets/whatsApp.png"
import Navigation from '@/components/Navigation'
import { useParallax } from '@/hooks/useParallax'
import heroVideo from '@/assets/video.mp4'
import freelancerLogo from "@/assets/freelancer-logo.svg"
import linkedinLogo from "@/assets/linkedin-logo.svg"

export default function AsmaPage() {
  const parallaxOffset = useParallax(-0.5)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    // Also set a small delay to ensure scroll happens after render
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
    setIsLoaded(true)
    
    return () => clearTimeout(timer)
  }, [])
  
  const handleGoBack = () => {
    window.history.back();
  }

  
  return (
    <main className="min-h-screen bg-background text-foreground">
      <style>
        {`
          @keyframes blink {
            0% { background-color: #008000; transform: scale(1); }
            25% { background-color: #a855f7; transform: scale(1.1); }
            50% { background-color: #008000; transform: scale(1); }
            75% { background-color: #a855f7; transform: scale(1.1); }
            100% { background-color: #008000; transform: scale(1); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes bulbBlink {
            0% { transform: scale(1); background-color: #000000; box-shadow: 0 0 5px #ffffff; }
            25% { transform: scale(1.05); background-color: #111111; box-shadow: 0 0 15px #ffffff; }
            50% { transform: scale(1); background-color: #000000; box-shadow: 0 0 5px #ffffff; }
            75% { transform: scale(1.05); background-color: #111111; box-shadow: 0 0 15px #ffffff; }
            100% { transform: scale(1); background-color: #000000; box-shadow: 0 0 5px #ffffff; }
          }
        `}
      </style>
      <Navigation />
      
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-20">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>
      