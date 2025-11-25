import { useState } from "react"
import DynamicProfile from "@/components/DynamicProfile"
import noorImage from "../assets/Noor.png"
import noorPortfolio from "../assets/NoorPortfoleo.pdf"

export default function NoorWebPortfolio() {
  const profileData = {
    name: "Noor Faisal",
    title: "Web Developer & Designer",
    subtitle: "Team Member",
    description: "Full-stack web developer with expertise in React, TypeScript, and modern web technologies. Skilled in both frontend and backend development, UI/UX design, and cybersecurity. Passionate about learning new technologies and creating innovative digital solutions.",
    profileImage: noorImage,
    resume: noorPortfolio,
    isSkillCategory: true,
    skills: [
      {
        category: "Technical",
        items: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Next.js",
          "Web Development"
        ]
      },
      {
        category: "Design",
        items: [
          "Graphic Designing",
          "UI Design",
          "Web Design"
        ]
      },
      {
        category: "Professional",
        items: [
          "Communication",
          "Problem Solving",
          "Teamwork",
          "Leadership"
        ]
      },
      {
        category: "Specializations",
        items: [
          "Cyber Security",
          "Coding",
          "Social Media Handling",
          "Blogging"
        ]
      },
      {
        category: "Interests",
        items: [
          "Learning New Tech",
          "Travelling",
          "Books Reading"
        ]
      }
    ]
  }

  return <DynamicProfile profileData={profileData} />
}