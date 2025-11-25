import { useState, useEffect } from "react"
import { Mail, ArrowLeft } from "lucide-react"
import profilePhoto from "../assets/Batool.jpg"
import portfolioImage1 from "../assets/B (1).jpeg"
import portfolioImage2 from "../assets/B (2).jpeg"
import portfolioImage3 from "../assets/B (3).jpeg"
import portfolioImage4 from "../assets/B (4).jpeg"
import portfolioImage5 from "../assets/B (5).jpeg"
import portfolioImage6 from "../assets/B (6).jpeg"
import cvImage from "../assets/Huma CV.jpeg"
import mailIcon from "../assets/Mail.png"
import portfolioPdf from "../assets/BatoolPdf.pdf"

export default function Portfolio() {
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
    { name: "Logo Design", level: 90 },
    { name: "Web Design", level: 85 },
    { name: "Poster Design", level: 95 },
    { name: "Branding", level: 88 },
    { name: "Social Media Design", level: 92 },
  ]

  const portfolioImages = [
    {
      src: portfolioImage1,
      title: "Branding Project",
      category: "Brand Identity",
    },
    {
      src: portfolioImage2,
      title: "Social Media Posts",
      category: "Digital Design",
    },
    {
      src: portfolioImage6,
      title: "Work Experience",
      category: "Portfolio",
    },
    {
      src: portfolioImage4,
      title: "Skills & Tools",
      category: "Creative",
    },
    {
      src: portfolioImage5,
      title: "Creative Design",
      category: "Visual Arts",
    },
    {
      src: portfolioImage3,
      title: "Graphic Arts",
      category: "Design",
    },
  ]

  const handleDownloadCV = () => {
    // In a real application, this would download the actual CV file
    // For now, we'll just open the CV image in a new tab
    window.open(cvImage, '_blank');
  }

  const handleDownloadPortfolio = () => {
    // Create a temporary link to download the PDF
    const link = document.createElement('a');
    link.href = portfolioPdf;
    link.download = 'Zillehuma_Batool_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const handleGoBack = () => {
    window.history.back();
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <style>
        {`
          @keyframes blink {
            0% { 
              opacity: 1; 
              transform: scale(1);
              box-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
            }
            25% { 
              opacity: 0.7; 
              transform: scale(1.05);
              box-shadow: 0 0 15px rgba(245, 158, 11, 0.8);
            }
            50% { 
              opacity: 1; 
              transform: scale(1);
              box-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
            }
            75% { 
              opacity: 0.7; 
              transform: scale(1.05);
              box-shadow: 0 0 20px rgba(245, 158, 11, 1);
            }
            100% { 
              opacity: 1; 
              transform: scale(1);
              box-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
            }
          }
        `}
      </style>
      
    
      
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-20">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-black rounded-lg font-semibold hover:bg-amber-400 transition-colors"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>
      
      {/* Hero / About Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-amber-500 rounded-full opacity-20" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-amber-500 rounded-full opacity-10" />
        <svg className="absolute top-1/4 right-10 w-16 h-16 text-amber-500 opacity-30" viewBox="0 0 100 50">
          <path d="M10 40 Q30 10 50 40 Q70 70 90 40" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-amber-500 rounded-full flex items-center justify-center">
                <span className="text-amber-500 italic text-lg">ZH</span>
              </div>
              <span className="text-amber-500/70 text-sm tracking-widest uppercase">Creative Portfolio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              <span className="text-white">HELLO, I'M</span>
              <br />
              <span className="text-amber-500 italic text-4xl md:text-5xl">Zillehuma</span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Creative and detail-oriented Graphic Designer with experience crafting visually compelling designs that
              captivate audiences and elevate brand identities.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-amber-400 transition-colors"
                style={{
                  animation: 'blink 1s infinite',
                }}
              >
                <Mail size={18} />
                Download CV
              </button>
              
              <button
                onClick={handleDownloadPortfolio}
                className="flex items-center gap-2 bg-amber-500/50 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-500/60 transition-colors border border-amber-500"
              >
                Download Portfolio
              </button>
            </div>

          </div>

          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-500/20 rounded-3xl blur-2xl" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-amber-500/50 shadow-2xl shadow-amber-500/20">
                <img
                  src={profilePhoto}
                  alt="Zillehuma Batool - Graphic Designer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-amber-500 rounded-full opacity-50" />
            </div>
          </div>
        </div>

        {/* Bottom decorative dots */}
        <div className="absolute bottom-10 left-10 flex gap-2">
          <div className="w-4 h-4 bg-amber-500 rounded-full" />
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
        <div className="absolute bottom-10 right-10 flex gap-2">
          <div className="w-4 h-4 bg-amber-500 rounded-full" />
          <div className="w-4 h-4 bg-white rounded-full" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              SKILLS & <span className="text-amber-500 italic">Tools</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-amber-500 text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-16 grid grid-cols-3 gap-6 text-center">
            {["Leadership", "Creativity", "Communication"].map((skill) => (
              <div
                key={skill}
                className="p-6 border border-amber-500/30 rounded-2xl hover:border-amber-500 hover:bg-amber-500/5 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-amber-500 rounded-full" />
                </div>
                <span className="text-zinc-300 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              MY <span className="text-amber-500 italic">Portfolio</span>
            </h2>
            <p className="text-zinc-500 mt-4">A curated collection of purpose-driven and visually engaging work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <span className="text-amber-500 text-sm uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-white text-xl font-bold mt-1">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 border-2 border-amber-500 rounded-full flex items-center justify-center">
              <span className="text-amber-500 italic text-sm">ZH</span>
            </div>
            <span className="text-xl font-bold">Zillehuma Batool</span>
          </div>
          <p className="text-zinc-500 mb-6">Graphic Designer | Faisalabad, Pakistan</p>
          <a
            href="mailto:zillehuma.batool@gmail.com"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors"
          >
            <img src={mailIcon} alt="Mail" className="w-4 h-4" />
            zillehuma.batool@gmail.com
          </a>
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 bg-amber-500 rounded-full" />
            <div className="w-3 h-3 bg-white rounded-full" />
          </div>
        </div>
      </footer>
    </div>
  )
}
