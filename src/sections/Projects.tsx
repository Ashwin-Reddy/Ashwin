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

const DESKTOP_CARD_WIDTH = 336;
const AUTO_SCROLL_INTERVAL = 5000;

const Projects = () => {
  const projectCount = typedProjects.length;

  /*
   * Track viewport width so the carousel geometry
   * can adapt on mobile.
   */
  const [viewportWidth, setViewportWidth] =
    useState(() =>
      typeof window !== "undefined"
        ? window.innerWidth
        : 1024
    );

  const isMobile = viewportWidth < 768;

  /*
   * Mobile cards are sized according to the
   * available viewport so they never overflow.
   */
  const cardWidth = isMobile
    ? Math.min(310, viewportWidth - 48)
    : DESKTOP_CARD_WIDTH;

  /*
   * Three copies allow us to create an infinite carousel:
   *
   * [ A B C D E ] [ A B C D E ] [ A B C D E ]
   *
   * We start in the middle copy.
   */
  const extendedProjects = [
    ...typedProjects,
    ...typedProjects,
    ...typedProjects,
  ];

  const [activeIndex, setActiveIndex] =
    useState(projectCount);

  const [isResetting, setIsResetting] =
    useState(false);

  /* Keep viewport width updated. */
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* Move to next project. */
  const nextProject = () => {
    setActiveIndex(
      (current) => current + 1
    );
  };

  /* Move to previous project. */
  const previousProject = () => {
    setActiveIndex(
      (current) => current - 1
    );
  };

  /* Automatic scrolling. */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (current) => current + 1
      );
    }, AUTO_SCROLL_INTERVAL);

    return () =>
      clearInterval(interval);
  }, []);

  /*
   * Once we move into the third copy,
   * silently jump back to the middle copy.
   */
  useEffect(() => {
    if (
      activeIndex >=
      projectCount * 2
    ) {
      const timeout = setTimeout(() => {
        setIsResetting(true);

        setActiveIndex(
          (current) =>
            current - projectCount
        );
      }, 550);

      return () =>
        clearTimeout(timeout);
    }

    /*
     * Same thing when moving backwards.
     */
    if (activeIndex < projectCount) {
      const timeout = setTimeout(() => {
        setIsResetting(true);

        setActiveIndex(
          (current) =>
            current + projectCount
        );
      }, 550);

      return () =>
        clearTimeout(timeout);
    }
  }, [
    activeIndex,
    projectCount,
  ]);

  /*
   * Turn animations back on after
   * the invisible repositioning.
   */
  useEffect(() => {
    if (!isResetting) return;

    const timeout = setTimeout(() => {
      setIsResetting(false);
    }, 50);

    return () =>
      clearTimeout(timeout);
  }, [isResetting]);

  return (
    <section
      id="projects"
      className="
        overflow-hidden
        px-4
        py-20

        sm:px-6
        sm:py-24

        md:py-40
      "
    >

      {/* Section Heading */}

      <motion.div
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <div
          className="
            mx-auto
            mb-10
            flex
            max-w-6xl
            items-center
            gap-3

            sm:mb-12
            sm:gap-5

            md:mb-14
          "
        >

          <h2
            className="
              whitespace-nowrap
              text-2xl
              font-semibold
              tracking-tight

              sm:text-3xl
              md:text-4xl
            "
          >
            / projects
          </h2>

          <div
            className="
              flex-1
              border-t
              border-[#CCD0CF]/20
            "
          />

          <a
            href="https://github.com/Ashwin-Reddy?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              w-fit
              shrink-0
              items-center
              gap-1
              text-xs
              text-[#64FFDD]
              transition-colors
              hover:text-[#CCD0CF]

              sm:gap-2
              sm:text-sm
            "
          >
            View all projects
            <ArrowRight size={14} />
          </a>

        </div>
      </motion.div>


      {/* Coverflow Container */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
        "
      >

        {/* Carousel Viewport */}
        <div
          className="
            relative
            h-[350px]
            overflow-visible

            sm:h-[370px]

            md:h-[390px]
            [perspective:1200px]
          "
        >

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              flex
              h-[330px]
              items-center

              sm:h-[340px]

              md:h-[350px]
            "
            animate={{
              x: `calc(-${
                activeIndex * cardWidth
              }px - ${
                cardWidth / 2
              }px)`,

              y: "-50%",
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    duration: 0.55,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }
            }
            style={{
              transformStyle:
                "preserve-3d",
            }}
          >

            {extendedProjects.map(
              (project, index) => {
                const distance =
                  index - activeIndex;

                const absoluteDistance =
                  Math.abs(distance);

                /*
                 * Active card.
                 */
                const isActive =
                  distance === 0;

                const sideOffset =
                  distance *
                  (isMobile
                    ? -70
                    : -125);

                /*
                 * Softer rotation on mobile.
                 */
                const rotateY =
                  distance *
                  (isMobile
                    ? -15
                    : -32);

                /*
                 * Keep the active card dominant.
                 */
                const scale = Math.max(
                  isMobile
                    ? 0.88
                    : 0.78,
                  1 -
                    absoluteDistance *
                      (isMobile
                        ? 0.06
                        : 0.08)
                );

                /*
                 * Side cards become subtle,
                 * especially on mobile.
                 */
                const opacity =
                  Math.max(
                    isMobile
                      ? 0.3
                      : 0.2,
                    1 -
                      absoluteDistance *
                        (isMobile
                          ? 0.22
                          : 0.18)
                  );

                /*
                 * Reduce blur on mobile so
                 * neighboring cards don't
                 * disappear completely.
                 */
                const blur = Math.min(
                  absoluteDistance *
                    (isMobile ? 1.5 : 2),
                  isMobile ? 4 : 6
                );

                /*
                 * Active card stays above
                 * surrounding cards.
                 */
                const zIndex =
                  20 -
                  absoluteDistance;

                return (
                  <motion.div
                    key={`${project.name}-${index}`}
                    className="
                      absolute
                      left-0
                      top-0
                    "
                    style={{
                      width: `${cardWidth}px`,
                      transformStyle:
                        "preserve-3d",
                    }}
                    animate={{
                      x:
                        index *
                          cardWidth +
                        sideOffset,

                      scale,
                      opacity,
                      rotateY,
                      zIndex,

                      filter: `blur(${blur}px)`,
                    }}
                    transition={
                      isResetting
                        ? { duration: 0 }
                        : {
                            duration: 0.55,
                            ease: [
                              0.22,
                              1,
                              0.36,
                              1,
                            ],
                          }
                    }
                  >

                    {/* Project Card */}
                    <div
                      className={`
                        flex
                        h-[330px]
                        flex-col
                        rounded-2xl
                        border
                        p-5
                        transition-colors
                        duration-500

                        sm:h-[340px]
                        sm:p-6

                        md:h-[350px]
                        md:p-7

                        ${
                          isActive
                            ? `
                              border-[#CCD0CF]/60
                              bg-[#11212D]
                            `
                            : `
                              border-[#CCD0CF]/10
                              bg-[#11212D]
                            `
                        }
                      `}
                    >

                      {/* Project Name + Date */}
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                        "
                      >

                        <h3
                          className="
                            text-lg
                            font-semibold
                            leading-snug
                            text-[#CCD0CF]

                            sm:text-xl
                          "
                        >
                          {project.name}
                        </h3>

                        <div
                          className="
                            shrink-0
                            text-right
                            text-[10px]
                            leading-5
                            text-[#9BA8AB]

                            sm:text-xs
                          "
                        >
                          <div>
                            {project.startDate}
                            {" - "}
                            {project.endDate}
                          </div>
                        </div>

                      </div>


                      {/* Description */}
                      <p
                        className="
                          mt-4
                          text-xs
                          leading-6
                          text-[#9BA8AB]

                          sm:mt-5
                          sm:text-sm
                        "
                        title={
                          project.description
                        }
                      >
                        {project.description}
                      </p>


                      {/* Technologies */}
                      <div
                        className="
                          mt-7
                          flex
                          flex-wrap
                          gap-1.5

                          sm:mt-10
                          sm:gap-2
                        "
                      >
                        {project.technologies.map(
                          (technology) => (
                            <span
                              key={
                                technology
                              }
                              className="
                                rounded-full
                                border
                                border-[#CCD0CF]/10
                                px-2.5
                                py-1
                                text-[10px]
                                text-[#9BA8AB]

                                sm:px-3
                                sm:py-1.5
                                sm:text-xs
                              "
                            >
                              {technology}
                            </span>
                          )
                        )}
                      </div>


                      {/* Push link to bottom */}
                      <div className="flex-1" />


                      {/* GitHub */}
                      <a
                        href={
                          project.github
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          w-fit
                          items-center
                          gap-2
                          text-xs
                          text-[#64FFDD]
                          transition-colors
                          duration-300
                          hover:text-[#CCD0CF]

                          sm:text-sm
                        "
                      >
                        <ExternalLink
                          size={15}
                        />

                        View Project
                      </a>

                    </div>
                  </motion.div>
                );
              }
            )}

          </motion.div>
        </div>


        {/* Previous Button */}

        <button
          type="button"
          onClick={previousProject}
          aria-label="Previous project"
          className="
            absolute
            left-1
            top-1/2
            z-30
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#CCD0CF]/20
            bg-[#06141B]
            text-[#CCD0CF]
            transition-all
            duration-300
            hover:border-[#CCD0CF]/50
            hover:bg-[#CCD0CF]
            hover:text-[#06141B]

            sm:left-2
            sm:h-11
            sm:w-11

            md:left-4
          "
        >
          <ArrowLeft size={17} />
        </button>


        {/* Next Button */}

        <button
          type="button"
          onClick={nextProject}
          aria-label="Next project"
          className="
            absolute
            right-1
            top-1/2
            z-30
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-[#CCD0CF]/20
            bg-[#06141B]
            text-[#CCD0CF]
            transition-all
            duration-300
            hover:border-[#CCD0CF]/50
            hover:bg-[#CCD0CF]
            hover:text-[#06141B]

            sm:right-2
            sm:h-11
            sm:w-11

            md:right-4
          "
        >
          <ArrowRight size={17} />
        </button>

      </div>

    </section>
  );
};

export default Projects;