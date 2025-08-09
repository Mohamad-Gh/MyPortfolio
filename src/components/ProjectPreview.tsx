import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiGraphql } from "react-icons/si";

const projects = [
  {
    title: "Fullstack Blog App",
    description: "React, Node.js, GraphQL, Tailwind, MongoDB",
    link: "/projects/fullstack-blog",
    github: "https://github.com/yourusername/fullstack-blog",
    live: "https://fullstack-blog-live.com",
    image: "/images/fullstack-blog.png",
    techIcons: [
      <FaReact key="react" className="text-cyan-500" />,
      <FaNodeJs key="node" className="text-green-500" />,
      <SiGraphql key="graphql" className="text-pink-500" />,
      <SiTailwindcss key="tailwind" className="text-teal-400" />,
    ],
  },
  {
    title: "E-commerce Store",
    description: "Next.js, Stripe, Firebase, Tailwind",
    link: "/projects/ecommerce-store",
    github: "https://github.com/yourusername/ecommerce-store",
    live: "https://ecommerce-store-live.com",
    image: "/images/ecommerce-store.png",
    techIcons: [
      <SiTypescript key="typescript" className="text-blue-500" />,
      <SiTailwindcss key="tailwind" className="text-teal-400" />,
      <FaGithub key="github" className="text-gray-700" />,
    ],
  },
  {
    title: "Portfolio Website",
    description: "React, Framer Motion, shadcn/ui, TypeScript",
    link: "/projects/portfolio",
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio-live.com",
    image: "/images/portfolio.png",
    techIcons: [
      <FaReact key="react" className="text-cyan-500" />,
      <SiTypescript key="typescript" className="text-blue-500" />,
    ],
  },
];

export default function ProjectsPreview() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true, // better loop in center mode
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // enable center mode
    centerPadding: "100px", // space on left/right of center slide
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,
  };

  return (
    <section className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <Link to="/projects" className="text-primary hover:underline text-sm">
          View All Projects →
        </Link>
      </div>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-2">
            <Card className="w-72 hover:shadow-md transition-shadow cursor-pointer mx-auto">
              <div className="block">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent className="flex flex-col justify-between p-4">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex gap-2 mb-4 text-xl">
                    {project.techIcons.map((icon) => (
                      <div key={icon.key}>{icon}</div>
                    ))}
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    <Link
                      to={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Live View
                    </Link>
                    <Link
                      to={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 border border-border rounded-md text-sm font-medium hover:bg-muted transition-colors"
                    >
                      GitHub
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
}
