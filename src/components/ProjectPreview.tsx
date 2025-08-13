import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import projects from "@/data/ProjectsData";

const projectsFeatures = projects.slice(1, 3);

export default function ProjectsPreview() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true, // better loop in center mode
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // enable center mode
    centerPadding: "50px", // space on left/right of center slide
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
        {projectsFeatures.map((project) => (
          <div key={project.id} className="px-2">
            <Card className="w-96 hover:shadow-md transition-shadow mx-auto p-0">
              <div className="block">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-52 object-fill rounded-t-sm"
                />
                <CardContent className="flex flex-col justify-between p-4">
                  <CardHeader className="p-0 mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>

                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <ul className="flex gap-2 mb-4 text-xl">
                    {project.technologiesWithIcons.map((tech) => (
                      <li key={tech.name} className="tech-item hover:text-xs">
                        {tech.icon ? (
                          <tech.icon size={16} title={tech.name} />
                        ) : (
                          <span className="text-xs">{tech.name}</span> // Fallback if no icon is provided
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 flex-wrap">
                    <Link
                      to={project.liveUrl!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Live View
                    </Link>
                    <Link
                      to={project.repoUrl!}
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
