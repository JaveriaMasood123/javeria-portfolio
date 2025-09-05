import { Code, Database, Layout, Terminal, Cpu, Palette, Cloud } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["JavaScript", "Python","C" ],
  },
  {
    name: "Frontend Development",
    icon: Layout,
    skills: ["HTML", "CSS","React.js", "Tailwind CSS"],
  },
  {
    name: "Backend Development",
    icon: Code,
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Databases",
    icon: Database,
    skills: ["MongoDB"],
  },
  {
    name: "Tools & Platforms",
    icon: Cpu,
    skills: ["Git & GitHub", "Canva", "WordPress"],
  },
  {
    name: "Cloud",
    icon: Cloud,
    skills: ["Oracle Cloud Infrastructure (OCI)"],
  },
  {
    name: "Design",
    icon: Palette,
    skills: ["Canva (Designing)", "Basic UI/UX"],
  },
];

