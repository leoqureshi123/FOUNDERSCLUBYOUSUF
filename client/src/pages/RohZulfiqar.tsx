import DynamicProfile from "@/components/DynamicProfile"
import roohImage from "../assets/Rooh.png"
import rohCv from "../assets/Roho cv.pdf"

export default function RohZulfiqar() {
  const profileData = {
    name: "Roha Zulfiqar",
    title: "Data Analyst & Python Developer",
    subtitle: "Team Member",
    description: "Data Analyst with expertise in Python and C++ programming, adept at developing data-driven solutions and deriving actionable insights. Proficient in data preprocessing, statistical analysis, and visualization. Experienced in leveraging machine learning techniques to solve complex business problems.",
    profileImage: roohImage,
    resume: rohCv,
    // Removed email property
    isSkillCategory: true,
    skills: [
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
  }

  return <DynamicProfile profileData={profileData} />
}