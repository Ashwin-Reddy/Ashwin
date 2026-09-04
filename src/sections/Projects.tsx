import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

type Project = {
  name: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  github: string;
};

const projects: Project[] = [
  {
    name: "AI Resume Screener",
    technologies: ["Python", "FastAPI", "React", "PostgreSQL"],
    startDate: "MMM 2025",
    endDate: "MMM 2025",
    github: "https://github.com/yourusername/ai-resume-screener",
  },
  {
    name: "TITAN Chatbot",
    technologies: ["Python", "NLP", "Speech Recognition"],
    startDate: "MMM 2024",
    endDate: "MMM 2024",
    github: "https://github.com/Ashwin-Reddy/TITAN-chatbot",
  },
  {
    name: "Project KISAN",
    technologies: ["Python", "SQL", "Machine Learning"],
    startDate: "MMM 2024",
    endDate: "MMM 2024",
    github: "https://github.com/Ashwin-Reddy/Project-KISAN",
  },
  {
    name: "AI Fitness Coach",
    technologies: ["React Native", "FastAPI", "PostgreSQL"],
    startDate: "MMM 2025",
    endDate: "MMM 2025",
    github: "https://github.com/yourusername/ai-fitness-coach",
  },
];

const Projects = () => {
  const projectCount = projects.length;

  // Start in the middle copy so we can move infinitely in either direction.
  const [activeIndex, setActiveIndex] = useState(projectCount);

  const extendedProjects = [
    ...projects,
    ...projects,
    ...projects,
  ];

  const nextProject = () => {
    setActiveIndex((current) => current + 1);
  };

  const previousProject = () => {
    setActiveIndex((current) => current - 1);
  };

  /*
   * Automatically move the carousel every 5 seconds.
   * The user can still manually control it using the arrows.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /*
   * When we reach either end of the duplicated array,
   * silently jump back to the middle copy.
   */
  useEffect(() => {
    if (activeIndex >= projectCount * 2) {
      setTimeout(() => {
        setActiveIndex((current) => current - projectCount);
      }, 500);
    }

    if (activeIndex < projectCount) {
      setTimeout(() => {
        setActiveIndex((current) => current + projectCount);
      }, 500);
    }
  }, [activeIndex, projectCount]);

  return (
    <section
      id="projects"
      className="overflow-hidden px-6 py-32 md:py-40"
    >
      {/* Section heading */}
      <div className="mx-auto mb-14 flex max-w-6xl items-center gap-5">
        <h2 className="whitespace-nowrap text-3xl font-semibold tracking-tight md:text-4xl">
          / projects
        </h2>

        <div className="h-px w-full bg-[#CCD0CF]/20" />
      </div>

      {/* Carousel */}
      <div className="relative mx-auto max-w-7xl">

        {/* Cards viewport */}
        <div className="overflow-hidden px-4 py-8">
          <motion.div
            className="flex items-center"
            animate={{
              x: `calc(50% - ${activeIndex * 336}px - 168px)`,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          >
            {extendedProjects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={`${project.name}-${index}`}
                  animate={{
                    scale: isActive ? 1.08 : 0.92,
                    opacity: isActive ? 1 : 0.55,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                  className="w-[300px] shrink-0 px-3 md:w-[336px]"
                >
                  <div
                    className={`
                      flex h-[330px] flex-col rounded-2xl border
                      p-7 transition-colors duration-500
                      ${
                        isActive
                          ? "border-[#CCD0CF]/30 bg-[#0B1C24]"
                          : "border-[#CCD0CF]/10 bg-[#081922]"
                      }
                    `}
                  >
                    {/* Project name */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold leading-snug text-[#CCD0CF]">
                        {project.name}
                      </h3>

                      <span className="shrink-0 text-xs text-[#9BA8AB]">
                        {project.startDate}
                        <br />
                        {project.endDate}
                      </span>
                    </div>

                    {/* Technologies */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#CCD0CF]/10 px-3 py-1.5 text-xs text-[#9BA8AB]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* GitHub link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 text-sm text-[#9BA8AB] transition-colors duration-300 hover:text-[#CCD0CF]"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={previousProject}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#CCD0CF]/20 bg-[#06141B] text-[#CCD0CF] transition-all duration-300 hover:border-[#CCD0CF]/50 hover:bg-[#CCD0CF] hover:text-[#06141B]"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={nextProject}
          aria-label="Next project"
          className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#CCD0CF]/20 bg-[#06141B] text-[#CCD0CF] transition-all duration-300 hover:border-[#CCD0CF]/50 hover:bg-[#CCD0CF] hover:text-[#06141B]"
        >
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default Projects;