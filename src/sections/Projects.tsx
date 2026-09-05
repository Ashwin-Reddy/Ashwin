import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import projects from "../data/projects.json";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  github: string;
};

const typedProjects = projects as Project[];

const Projects = () => {
  const projectCount = typedProjects.length;

  /*
   * We render three copies of the projects:
   *
   * [A B C D] [A B C D] [A B C D]
   *
   * We start in the middle copy.
   */
  const extendedProjects = [
    ...typedProjects,
    ...typedProjects,
    ...typedProjects,
  ];

  const [activeIndex, setActiveIndex] = useState(projectCount);

  /*
   * Used when silently moving from a cloned project
   * back to the equivalent project in the middle copy.
   */
  const [isResetting, setIsResetting] = useState(false);

  const nextProject = () => {
    setActiveIndex((current) => current + 1);
  };

  const previousProject = () => {
    setActiveIndex((current) => current - 1);
  };

  /* Automatic scrolling.*/

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  /*
   * Handle the infinite loop.
   *
   * Once we've animated into the third copy,
   * silently jump back to the equivalent position
   * in the middle copy.
   */
  useEffect(() => {
    if (activeIndex >= projectCount * 2) {
      const timeout = setTimeout(() => {
        setIsResetting(true);
        setActiveIndex((current) => current - projectCount);
      }, 520);

      return () => clearTimeout(timeout);
    }

    /*
     * Same thing when scrolling backwards.
     */
    if (activeIndex < projectCount) {
      const timeout = setTimeout(() => {
        setIsResetting(true);
        setActiveIndex((current) => current + projectCount);
      }, 520);

      return () => clearTimeout(timeout);
    }
  }, [activeIndex, projectCount]);

  /*
   * After the invisible repositioning has happened,
   * turn animations back on for the next movement.
   */
  useEffect(() => {
    if (!isResetting) return;

    const timeout = setTimeout(() => {
      setIsResetting(false);
    }, 50);

    return () => clearTimeout(timeout);
  }, [isResetting]);

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

        <div className="flex-1 border-t border-[#CCD0CF]/20" />
      </div>

      {/* Carousel */}
      <div className="relative mx-auto max-w-7xl">

        {/* Cards viewport */}
        <div className="overflow-hidden px-4 py-10">
          <motion.div
            className="flex items-center"
            animate={{
              x: `calc(50% - ${activeIndex * 336}px - 168px)`,
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    duration: 0.5,
                    ease: "easeInOut",
                  }
            }
          >
            {extendedProjects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={`${project.name}-${index}`}
                  className="w-[300px] shrink-0 px-3 md:w-[336px]"
                  animate={{
                    scale: isActive ? 1.08 : 0.92,
                    opacity: isActive ? 1 : 0.55,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className={`
                      flex h-[350px] flex-col rounded-2xl border p-7
                      transition-colors duration-500
                      ${
                        isActive
                          ? "border-[#CCD0CF]/60 bg-[#11212D]"
                          : "border-[#CCD0CF]/10 bg-[#11212D]"
                      }
                    `}
                  >
                    {/* Project name + date */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold leading-snug text-[#CCD0CF]">
                        {project.name}
                      </h3>
                    </div>

                    <div className="shrink-0 text-right text-xs leading-5 text-[#9BA8AB]">
                      <div>{project.startDate} - {project.endDate}</div>
                    </div>

                    {/* Description */}
                    <p
                      className="mt-5 text-sm leading-6 text-[#9BA8AB]"
                      title={project.description}
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-10 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-[#CCD0CF]/10 px-3 py-1.5 text-xs text-[#9BA8AB]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Push link to bottom */}
                    <div className="flex-1" />

                    {/* GitHub */}
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

        {/* Previous */}
        <button
          type="button"
          onClick={previousProject}
          aria-label="Previous project"
          className="
            absolute left-0 top-1/2
            flex h-11 w-11 -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-[#CCD0CF]/20
            bg-[#06141B]
            text-[#CCD0CF]
            transition-all duration-300
            hover:border-[#CCD0CF]/50
            hover:bg-[#CCD0CF]
            hover:text-[#06141B]
          "
        >
          <ArrowLeft size={18} />
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={nextProject}
          aria-label="Next project"
          className="
            absolute right-0 top-1/2
            flex h-11 w-11 -translate-y-1/2
            items-center justify-center
            rounded-full
            border border-[#CCD0CF]/20
            bg-[#06141B]
            text-[#CCD0CF]
            transition-all duration-300
            hover:border-[#CCD0CF]/50
            hover:bg-[#CCD0CF]
            hover:text-[#06141B]
          "
        >
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default Projects;