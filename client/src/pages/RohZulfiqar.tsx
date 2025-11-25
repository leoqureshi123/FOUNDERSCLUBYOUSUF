import { useState, useEffect } from "react"
import { Mail as MailIcon, Download, ArrowLeft } from "lucide-react"
import { useParallax } from '@/hooks/useParallax'
import roohImage from "../assets/Rooh.png"
import Navigation from '@/components/Navigation'
import heroVideo from '@/assets/video.mp4'
import mailIcon from "../assets/Mail.png"

interface SkillCategory {
  category: string
  items: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["Python", "C++", "SQL"]
  },
  {
    category: "Data Analysis Tools",
    items: ["Power BI", "Tableau", "Excel"]
  },
  {
    category: "Machine Learning",
    items: ["Scikit-learn", "TensorFlow"]
  },
  {
    category: "Database Management",
    items: ["MySQL", "PostgreSQL"]
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"]
  }
]

export default function RohZulfiqar() {
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

  const handleContact = () => {
    window.location.href = "mailto:rohabibil8@gmail.com";
  }

  const handleGoBack = () => {
    window.history.back();
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <style>
        {`
          @keyframes blink {
            0% { 
              opacity: 1; 
              transform: scale(1);
              box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
            }
            25% { 
              opacity: 0.7; 
              transform: scale(1.05);
              box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
            }
            50% { 
              opacity: 1; 
              transform: scale(1);
              box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
            }
            75% { 
              opacity: 0.7; 
              transform: scale(1.05);
              box-shadow: 0 0 20px rgba(59, 130, 246, 1);
            }
            100% { 
              opacity: 1; 
              transform: scale(1);
              box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
            }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
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
      
      {/* Hero Section with liquid ether and hyperspeed lines */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 liquid-ether opacity-40" />

        {/* Video Background */}
        <div className="absolute inset-0 z-0 opacity-30 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              transform: `translateY(${parallaxOffset}px)`,
            }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90" />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-accent to-transparent hyperspeed-line"
              style={{
                width: '200%',
                left: '-50%',
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Roha Zulfiqar</h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">Data Analyst & Python Developer</p>
                <p className="text-lg text-foreground/90 leading-relaxed text-balance">
                  Data Analyst with expertise in Python and C++ programming, adept at developing data-driven solutions and
                  deriving actionable insights. Proficient in data preprocessing, statistical analysis, and visualization.
                  Experienced in leveraging machine learning techniques to solve complex business problems.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={handleContact}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:from-primary/90 hover:to-accent/90 transition-colors"
                  style={{
                    animation: 'blink 1s infinite',
                  }}
                >
                  <img src={mailIcon} alt="Mail" className="w-5 h-5" />
                  rohabibil8@gmail.com
                </button>
              </div>
            </div>

            {/* Right - Profile Image with DOCTOR.tsx style */}
            <div className={`flex justify-center lg:justify-start`}>
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-40 animate-glow"></div>
                <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl border border-primary/30">
                  <img
                    src={roohImage}
                    alt="Roha Zulfiqar"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 md:px-8 py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities in data analysis and machine learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContact}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
              style={{
                animation: 'blink 1s infinite',
              }}
            >
              <img src={mailIcon} alt="Mail" className="w-5 h-5" />
              rohabibil8@gmail.com
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}