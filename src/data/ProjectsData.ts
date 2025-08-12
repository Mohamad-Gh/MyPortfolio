import { type IconType } from "react-icons";

// Images
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiGraphql } from "react-icons/si";

interface Technology {
  name: string;
  icon: IconType; // Support both LucideIcon and IconType
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologiesWithIcons: Technology[];
  thumbnail: string;
  gallery: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Fullstack Blog App",
    description:
      "A dynamic blog platform built with React, Node.js, GraphQL, Tailwind CSS, and MongoDB",
    technologiesWithIcons: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    thumbnail: "/images/fullstack-blog.png",
    gallery: ["/images/fullstack-blog.png"],
    repoUrl: "https://github.com/yourusername/fullstack-blog",
    liveUrl: "https://fullstack-blog-live.com",
  },
  {
    id: "2",
    title: "E-commerce Store",
    description:
      "A modern e-commerce platform powered by Next.js, Stripe, Firebase, and Tailwind CSS.",
    technologiesWithIcons: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Github", icon: FaGithub },
    ],
    thumbnail: "/images/ecommerce-store.png",
    gallery: ["/images/ecommerce-store.png"],
    repoUrl: "https://github.com/yourusername/ecommerce-store",
    liveUrl: "https://ecommerce-store-live.com",
  },
  {
    id: "3",
    title: "Trend Market App",
    description:
      "A sleek portfolio application built with React, Framer Motion, shadcn/ui, and TypeScript.",
    technologiesWithIcons: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
    thumbnail: "/images/portfolio.png",
    gallery: ["/images/portfolio.png"],
    repoUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://portfolio-live.com",
  },
  {
    id: "4",
    title: "OMC Digital FrontEnd App",
    description:
      "A comprehensive platform designed for startups to accelerate growth, connect with clients, manage employees, promote their brand, and enhance market presence through intuitive tools and services.",
    technologiesWithIcons: [
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
    thumbnail: "/OMGDigital_FrontPage.jpg",
    gallery: ["/OMGDigital_FrontPage.jpg"],
    repoUrl:
      "https://github.com/Mohamad-Gh/portfolio/tree/main/projects/OMGDigital",
    liveUrl:
      "https://mohamad-gh.github.io/portfolio/projects/OMGDigital/index.html",
  },
];

export default projects;
