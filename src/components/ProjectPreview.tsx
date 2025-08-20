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
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    autoplay: true,
    autoplaySpeed: 500,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024, // large screens
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 900, // tablets
        settings: {
          slidesToShow: 1,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 480, // mobile phones
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <section className="space-y-8 mb-8">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <Link to="/projects" className="text-primary hover:underline text-sm">
          View All Projects →
        </Link>
      </div>
      <Slider {...settings}>
        {projectsFeatures.map((project) => (
          <div key={project.id} className="px-2">
            <Card className="max-w-sm w-full sm:w-96 h-full min-h-[440px] hover:shadow-md transition-shadow mx-auto p-0 flex flex-col">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-md"
              />

              {/* Content fills available space */}
              <CardContent className="flex flex-col flex-1 p-4">
                <CardHeader className="p-0 mb-2">
                  <CardTitle className="text-md sm:text-lg line-clamp-2 h-[48px]">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                  {project.description}
                </p>

                {/* Clamp icons to 1 row */}
                <ul className="flex gap-2 mb-4 text-xl flex-wrap overflow-hidden max-h-4">
                  {project.technologiesWithIcons.map((tech) => (
                    <li key={tech.name} className="tech-item">
                      {tech.icon ? (
                        <tech.icon size={16} title={tech.name} />
                      ) : (
                        <span className="text-xs">{tech.name}</span>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Buttons pinned at bottom */}
                <div className="flex gap-3 flex-wrap mt-auto">
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
            </Card>
          </div>
        ))}
      </Slider>
    </section>
  );
}
