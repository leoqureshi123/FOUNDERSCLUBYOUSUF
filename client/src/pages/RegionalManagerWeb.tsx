import DynamicProfile from "@/components/DynamicProfile"
import amnaImage from "@/assets/Amna.png"
import amnaResume from "@/assets/AmnaResume.pdf"

export default function PortfolioPage() {
  const profileData = {
    name: "Amna Shahid",
    title: "MERN Stack Developer",
    subtitle: "Regional Manager - Web Development",
    description: "I'm a keen learner passionate about building modern web applications. Specialized in full-stack development with React, Node.js, and MongoDB. Always exploring new technologies and growing with the community.",
    profileImage: amnaImage,
    resume: amnaResume,
    whatsapp: "https://wa.me/923125960614?text=Hi%20Amna,%20I%20would%20like%20to%20discuss%20your%20services",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "HTML & CSS", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
    ]
  }

  return <DynamicProfile profileData={profileData} />
}