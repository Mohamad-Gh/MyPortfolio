import { type IconType } from "react-icons";

// Images
import OMGDigital_FrontPage from "@/assets/images/projects/OMGDigitals/OMGDigital_FrontPage.jpg";
import TrendMarket_FrontPage from "@/assets/images/projects/Trend_Market/Trend_Market_FrontPage.jpg";

// FoodHut Images
import FoodHut_FrontPage from "@/assets/images/projects/Food_Hut_App/Food_Hut_Front_Page.jpg";
import FoodHut_MenuPage from "@/assets/images/projects/Food_Hut_App/Food_Hut_Menu_Page.jpg";
import FoodHut_OrderPage from "@/assets/images/projects/Food_Hut_App/Food_Hut_Order_Page.jpg";

// Drive Away Images
import DriveAwayRental_FrontPage from "@/assets/images/projects/Drive_Away_Rental/Drive_Away_Rental_Front_Page.jpg";
import DriveAwayRental_ModelPage from "@/assets/images/projects/Drive_Away_Rental/Drive_Away_Rental_Model_Page.jpg";
import DriveAwayRental_ContactPage from "@/assets/images/projects/Drive_Away_Rental/Drive_Away_Rental_Contact_Page.jpg";
import DriveAwayRental_TeamPage from "@/assets/images/projects/Drive_Away_Rental/Drive_Away_Rental_Team_Page.jpg";
import DriveAwayRental_FeaturedCar from "@/assets/images/projects/Drive_Away_Rental/Drive_Away_Rental_Featured_Car.jpg";
import DriveAwayRental_RegisterPage from "@/assets/images/projects/Drive_Away_Rental/Drive_Away_Rental_Register_Page.jpg";

// Urban Nest Images
import UrbanNest_FrontPage from "@/assets/images/projects/Urban_Nest_Store/UrbanNext_Front_Page.jpg";
import UrbanNest_ProductPage from "@/assets/images/projects/Urban_Nest_Store/UrbanNext_Product_Page.jpg";
import UrbanNest_ProductsPage from "@/assets/images/projects/Urban_Nest_Store/UrbanNext_Products_Page.jpg";
import UrbanNest_CartPage from "@/assets/images/projects/Urban_Nest_Store/UrbanNext_Cart_Page.jpg";
import UrbanNest_CheckoutPage from "@/assets/images/projects/Urban_Nest_Store/UrbanNext_Checkout_Page.jpg";

// Team Manager App
import TeamManager_FrontPage from "@/assets/images/projects/Team_Management_App/Teams_App_Front_Page.jpg";
import TeamManager_CreatePage from "@/assets/images/projects/Team_Management_App/Teams_App_Create_Page.jpg";
import TeamManager_ProfilePage from "@/assets/images/projects/Team_Management_App/Teams_App_Profile_Page.jpg";
import TeamManager_ProjectDetailsPage from "@/assets/images/projects/Team_Management_App/Teams_App_ProjectDetails_Page.jpg";

//Easy Drive
import EasyDrive_Front_Page from "@/assets/images/projects/EasyDrive/EasyDrive-Front_Page.jpg";

// ICONS
import { FaReact, FaNodeJs, FaGithub, FaGoogle } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
  SiVite,
  SiFirebase,
  SiRedux,
  SiCss3,
  SiHtml5,
  SiJquery,
  SiMui,
  SiAxios,
  SiTestinglibrary,
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiMongoose,
  SiZod,
  SiVercel,
} from "react-icons/si";
import { BiLogoReact } from "react-icons/bi";
import { TbBrandReact } from "react-icons/tb";
// import { MdAnimation, MdShowChart } from "react-icons/md";
import { RiKey2Fill } from "react-icons/ri";
import { FaCookieBite } from "react-icons/fa";

interface Technology {
  name: string;
  icon?: IconType;
}

export interface ProjectType {
  id: string;
  title: string;
  description: string;
  technologiesWithIcons: Technology[];
  thumbnail: string;
  gallery: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: ProjectType[] = [
  {
    id: "1",
    title: "FullStack Car Rental App",
    description: "work in progress ...",
    technologiesWithIcons: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "React Icons", icon: BiLogoReact },
      { name: "Firebase", icon: SiFirebase },
      { name: "GraphQL", icon: SiGraphql },
      // { name: "Apollo Server", icon: SiGraphql },
      // { name: "Apollo Client", icon: SiGraphql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "bcryptjs", icon: RiKey2Fill },
      { name: "cookie-parser", icon: FaCookieBite },
      // { name: "dotenv" }, // No matching icon
      { name: "Express", icon: SiExpress },
      // { name: "graphql-middleware", icon: SiGraphql },
      { name: "graphql-shield", icon: SiGraphql },
      // { name: "graphql-tag", icon: SiGraphql },
      { name: "jsonwebtoken", icon: SiJsonwebtokens },
      { name: "Mongoose", icon: SiMongoose },
      // { name: "lucide-react" }, // No matching icon
      // { name: "react-hook-form", icon: BiLogoReact },
      { name: "React Router", icon: BiLogoReact },
      { name: "Zod", icon: SiZod },
    ],
    thumbnail: EasyDrive_Front_Page,
    gallery: [EasyDrive_Front_Page],
    repoUrl:
      "https://github.com/Mohamad-Gh/GraphQL/tree/main/GraphQL_Node_React_Build_Car_Rental_App_with_Apollo",
    liveUrl: "",
  },
  {
    id: "2",
    title: "Teams Manager App",
    description:
      "A collaborative platform for managing team projects, allowing users to view online clients, create and assign projects, delete projects with appropriate permissions, update user profiles, and add comments to track project progress.",
    technologiesWithIcons: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "Redux", icon: SiRedux },
      { name: "React Icons", icon: BiLogoReact },
      { name: "Firebase", icon: SiFirebase },
    ],
    thumbnail: TeamManager_FrontPage,
    gallery: [
      TeamManager_FrontPage,
      TeamManager_CreatePage,
      TeamManager_ProfilePage,
      TeamManager_ProjectDetailsPage,
    ],
    repoUrl:
      "https://github.com/Mohamad-Gh/Reacts_Apps/tree/main/project_Management_Site",
    liveUrl: "https://teams-manager-app-live.com",
  },
  {
    id: "3",
    title: "Urban Nest Store",
    description:
      "An e-commerce platform with integrated front-end and back-end using Firebase, enabling users to browse products, add items to their cart, and complete purchases seamlessly.",
    technologiesWithIcons: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React Toastify", icon: TbBrandReact },
      { name: "Redux", icon: SiRedux },
      { name: "React Router", icon: BiLogoReact },
      // { name: "Day.js", icon: SiDayjs },
      { name: "Axios", icon: SiAxios },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Vite", icon: SiVite },
      { name: "React Icons", icon: BiLogoReact },
      { name: "Firebase", icon: SiFirebase },
      // { name: "DaisyUI", icon: BiLogoTailwindCss },
    ],
    thumbnail: UrbanNest_FrontPage,
    gallery: [
      UrbanNest_FrontPage,
      UrbanNest_ProductPage,
      UrbanNest_ProductsPage,
      UrbanNest_CartPage,
      UrbanNest_CheckoutPage,
    ],
    repoUrl: "https://github.com/Mohamad-Gh/Reacts_Apps/tree/main/UrbanNest",
    liveUrl: "https://urban-nest-7c715.web.app/",
  },
  {
    id: "4",
    title: "Drive Away Rental App",
    description:
      "A car rental platform built with React, Node.js, GraphQL, Tailwind CSS, and MongoDB, offering users the ability to browse vehicles, view details, and manage bookings.",
    technologiesWithIcons: [
      { name: "Vite", icon: SiVite },
      { name: "React Slick", icon: BiLogoReact },
      { name: "Slick Carousel", icon: BiLogoReact },
      { name: "Google Map React", icon: FaGoogle },
      { name: "Material UI", icon: SiMui },
      { name: "Jest DOM", icon: SiTestinglibrary },
      { name: "Vercel", icon: SiVercel },
    ],
    thumbnail: DriveAwayRental_FrontPage,
    gallery: [
      DriveAwayRental_FrontPage,
      DriveAwayRental_ModelPage,
      DriveAwayRental_ContactPage,
      DriveAwayRental_TeamPage,
      DriveAwayRental_FeaturedCar,
      DriveAwayRental_RegisterPage,
    ],
    repoUrl: "https://github.com/Mohamad-Gh/drive-away-rental",
    liveUrl: "https://reacts-apps.vercel.app/",
  },
  {
    id: "5",
    title: "Food Hut App",
    description:
      "A food ordering application where users can browse menus, select favorite meals, add items to their cart, and place orders for delivery or pickup.",
    technologiesWithIcons: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "GitHub", icon: FaGithub },
      // { name: "AOS", icon: SiAos },
      { name: "Material UI", icon: SiMui },
      { name: "React Icons", icon: BiLogoReact },
      { name: "React Slick", icon: BiLogoReact },
      { name: "Slick Carousel", icon: BiLogoReact },
      { name: "Vite", icon: SiVite },
    ],
    thumbnail: FoodHut_FrontPage,
    gallery: [FoodHut_FrontPage, FoodHut_MenuPage, FoodHut_OrderPage],
    repoUrl:
      "https://github.com/Mohamad-Gh/React_Practices/tree/main/my-food-app",
    liveUrl: "https://react-food-app-rouge.vercel.app/",
  },
  {
    id: "6",
    title: "Trend Market App",
    description:
      "A stock tracking application that allows users to monitor their favorite stocks, add them to a watchlist, and view historical performance charts.",
    technologiesWithIcons: [
      { name: "Vite", icon: SiVite },
      // { name: "ApexCharts", icon: SiApexcharts },
      { name: "React Icons", icon: BiLogoReact },
      { name: "React Router", icon: BiLogoReact },
      { name: "Axios", icon: SiAxios },
    ],
    thumbnail: TrendMarket_FrontPage,
    gallery: [TrendMarket_FrontPage],
    repoUrl:
      "https://github.com/Mohamad-Gh/React_Practices/tree/main/react-trend/react-trend-app",
    liveUrl: "https://react-practices-wine.vercel.app/",
  },
  {
    id: "7",
    title: "OMG Digital FrontEnd App",
    description:
      "A comprehensive platform designed for startups to accelerate growth, connect with clients, manage employees, promote their brand, and enhance market presence through intuitive tools and services.",
    technologiesWithIcons: [
      { name: "React", icon: FaReact },
      { name: "CSS", icon: SiCss3 },
      { name: "HTML", icon: SiHtml5 },
      { name: "jQuery", icon: SiJquery },
      { name: "GitHub", icon: FaGithub },
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
