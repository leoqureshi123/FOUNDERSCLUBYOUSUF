import { ExternalLink, Mail, MessageCircle } from "lucide-react"
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
  
  const skills = [
    { name: "React.js", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "PHP", level: "Advanced" },
    { name: "Laravel", level: "Advanced" },
    { name: "HTML & CSS", level: "Expert" },
    { name: "WordPress", level: "Expert" },
    { name: "Shopify", level: "Advanced" },
    { name: "jQuery", level: "Advanced" },
  ]

  const projects = [
    {
      title: "E-commerce Website Development",
      description: "Custom e-commerce solutions with WooCommerce and Shopify platforms",
      tech: ["WordPress", "WooCommerce", "Shopify", "PHP"],
      year: "2023",
      featured: true,
    },
    {
      title: "Custom WordPress Themes",
      description: "Responsive WordPress themes with custom functionality",
      tech: ["WordPress", "PHP", "JavaScript", "CSS"],
      year: "2022",
      featured: true,
    },
    {
      title: "Web Application Development",
      description: "Full-stack web applications using React and Laravel",
      tech: ["React", "Laravel", "MySQL", "JavaScript"],
      year: "2023",
    },
    {
      title: "Website Redesign",
      description: "Complete website redesign for improved UX and performance",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      year: "2022",
    },
  ]

  const experience = [
    {
      role: "Senior Web Developer",
      company: "Freelance",
      period: "2017 - Present",
      description: "Full-stack development for clients worldwide, specializing in WordPress, Shopify, and custom web applications",
    },
    {
      role: "Web Developer",
      company: "Various Companies",
      period: "2016 - 2017",
      description: "Frontend and backend development with HTML, CSS, JavaScript, and PHP",
    },
  ]

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
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">Asma Sattar</h1>
                <p className="text-2xl md:text-3xl text-primary font-semibold mb-6">Senior Web Developer</p>
                <p className="text-lg text-foreground/90 leading-relaxed text-balance">
                  I'm a highly skilled web developer with over 8 years of experience creating modern, responsive, and user-friendly websites and applications. 
                  My expertise spans both front-end and back-end development with technologies like HTML5, CSS3, Bootstrap, jQuery, React JS, PHP, JavaScript, Laravel, and CodeIgniter.
                </p>
              </div>

              {/* CTA Buttons with SVG logos and black background */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.freelancer.com/u/asmasattar4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold transition-colors"
                  style={{
                    animation: 'bulbBlink 1s infinite',
                  }}
                >
                  <img src={freelancerLogo} alt="Freelancer" className="w-5 h-5" />
                  Freelancer Profile
                </a>
                <a
                  href="https://www.linkedin.com/in/asma-sattar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img src={asmaImage} alt="Asma Sattar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-4 md:px-8 py-16 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.level}</p>
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
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.freelancer.com/u/asmasattar4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-black text-white font-bold py-3 px-8 rounded-lg transition-all"
              style={{
                animation: 'bulbBlink 1s infinite',
              }}
            >
              <img src={freelancerLogo} alt="Freelancer" className="w-5 h-5" />
              <span>Hire on Freelancer</span>
            </a>
            <a
              href="https://www.linkedin.com/in/asma-sattar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-black text-white font-bold py-3 px-8 rounded-lg transition-all hover:bg-gray-800"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}