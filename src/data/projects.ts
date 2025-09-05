export type Project = { id: number; title: string; description: string; image: string; tags: string[]; links: { github: string; live: string; }; };

export const projects: Project[] = [
  {
    id: 1,
    title: "GitHub Dev Finder",
    description:
      "A React-based app to search GitHub user profiles using the GitHub API with a clean and responsive UI.",
    image: "/imgs/p1.png", // <-- remove /public
    tags: ["React.js", "CSS", "GitHub API"],
    links: {
      github: "https://javeriamasood123.github.io/Github-dev-finder/",
      live: "",
    },
  },
  {
    id: 2,
    title: "Dictionary App",
    description:
      "A dictionary app that fetches word meanings, pronunciation, and examples using an external API.",
    image: "/imgs/p2.png", // <-- remove /public
    tags: ["React.js", "API Integration", "CSS"],
    links: {
      github: "https://javeriamasood123.github.io/React-Dictionary/",
      live: "",
    },
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A weather forecast application that displays real-time weather data using OpenWeather API.",
    image: "/imgs/p3.png", // <-- remove /public
    tags: ["HTML", "OpenWeather API", "CSS", "JavaScript"],
    links: {
      github: "https://javeriamasood123.github.io/Weather-App/",
      live: "",
    },
  },
  {
    id: 4,
    title: "Responsive React App",
    description:
      "A fully responsive multi-page React application with modern UI/UX design.",
    image: "/imgs/p4.png", // <-- remove /public
    tags: ["React.js", "Tailwind CSS"],
    links: {
      github: "https://javeriamasood123.github.io/React-Responsive-Website",
      live: "",
    },
  },
];
