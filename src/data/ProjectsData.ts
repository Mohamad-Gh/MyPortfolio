import { type IconType } from "react-icons";

// Images
import OMGDigital_FrontPage from "@/assets/images/projects/OMGDigitals/OMGDigital_FrontPage.jpg";
import TrendMarket_FrontPage from "@/assets/images/projects/Trend_Market/Trend_Market_FrontPage.jpg";
import FoodHut_FrontPage from "@/assets/images/projects/Food_Hut_App/Food_Hut_Front_Page.jpg";
// ICONS
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
    id: "4",
    title: "Food Hut App",
    description: "",
    technologiesWithIcons: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Github", icon: FaGithub },
      { name: "aos" },
      { name: "material UI" },
      { name: "react-icons" },
      { name: "react-slick" },
      { name: "slick-carousel" },
      { name: "tailwindcss" },
      { name: "vite" },
    ],
    thumbnail: "/images/ecommerce-store.png",
    gallery: ["/images/ecommerce-store.png"],
    repoUrl:
      "https://github.com/Mohamad-Gh/React_Practices/tree/main/my-food-app",
    liveUrl: "https://react-food-app-rouge.vercel.app/",
  },
  {
    id: "5",
    title: "Trend Market App",
    description:
      "write a description for this website that you can trak your favourite stock add it to your list and also check the history digram of it's changes",
    technologiesWithIcons: [
      { name: "React", icon: FaReact },
      { name: "Vite" },
      { name: "react-apexcharts" },
      { name: "react-icons" },
      { name: "react-router-dom" },
      { name: "axios" },
      { name: "apexcharts" },
    ],
    thumbnail: TrendMarket_FrontPage,
    gallery: [TrendMarket_FrontPage],
    repoUrl:
      "https://github.com/Mohamad-Gh/React_Practices/tree/main/react-trend/react-trend-app",
    liveUrl: "https://react-practices-wine.vercel.app/",
  },
  {
    id: "6",
    title: "OMC Digital FrontEnd App",
    description:
      "A comprehensive platform designed for startups to accelerate growth, connect with clients, manage employees, promote their brand, and enhance market presence through intuitive tools and services.",
    technologiesWithIcons: [
      { name: "React", icon: FaReact },
      { name: "CSS" },
      { name: "HTML" },
      { name: "jQuery" },
      { name: "Github", icon: FaGithub },
    ],
    thumbnail: OMGDigital_FrontPage,
    gallery: [OMGDigital_FrontPage],
    repoUrl:
      "https://github.com/Mohamad-Gh/portfolio/tree/main/projects/OMGDigital",
    liveUrl:
      "https://mohamad-gh.github.io/portfolio/projects/OMGDigital/index.html",
  },
];

export default projects;
