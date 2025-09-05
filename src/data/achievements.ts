import { Award, GraduationCap, Code, Cloud, Briefcase } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  id: number;
  title: string;
  type: "competition" | "academic" | "certification" | "work";
  year: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Full Stack Development Program",
    type: "academic",
    year: "2024 – 2025",
    description:
      "Currently enrolled in a 1.5-year Full Stack Development program at Saylani Mass IT Training Program (SMIT). Hands-on experience with React.js, Node.js, MongoDB, and more.",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Mini Hackathon Participation",
    type: "competition",
    year: "2025",
    description:
      "Successfully participated in a Mini Hackathon, working on real-world problem-solving and collaborative coding challenges.",
    icon: Award,
  },
  {
    id: 3,
    title: "Data Science Course",
    type: "academic",
    year: "2025",
    description:
      "Completed a 2-month Data Science course at NED University, learning Python, data analysis, and visualization techniques.",
    icon: Code,
  },
  {
    id: 4,
    title: "Oracle Cloud Infrastructure (OCI)",
    type: "academic",
    year: "2025",
    description:
      "Currently exploring Oracle Cloud Infrastructure (OCI) to enhance knowledge in cloud computing and deployment.",
    icon: Cloud,
  },
  {
    id: 5,
    title: "Internship Experience",
    type: "work",
    year: "2025",
    description:
      "Gaining practical industry exposure through ongoing internship programs, applying both frontend and backend development skills.",
    icon: Briefcase,
  },
];
