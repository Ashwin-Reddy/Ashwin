import { motion } from "motion/react";
import aboutImage from "../assets/images/about.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 py-32 md:py-40"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-14 md:flex-row md:gap-20">

        {/* Image */}
        <motion.div
          className="w-full md:w-2/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={aboutImage}
              alt="About Ashwin"
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full md:w-3/5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
        >

          {/* Heading */}
          <div className="mb-10 flex items-center gap-5">
            <h2 className="whitespace-nowrap text-3xl font-semibold tracking-tight md:text-4xl">
              / about me
            </h2>

            <div className="h-px w-full bg-[#CCD0CF]/20" />
          </div>

          {/* text */}
          <p className="text-base leading-8 text-[#9BA8AB] md:text-lg">
            This is where a little bit about me will go. For now, this is
            placeholder text while we work on the structure, spacing,
            typography, and overall visual design of the section.
          </p>

          {/* Technologies */}
          <div className="mt-8">
            <p className="mb-5 text-base text-[#9BA8AB] md:text-lg">
              Here are some technologies I have been working with:
            </p>

            <div className="whitespace-nowrap grid grid-cols-3 gap-x-10 gap-y-4 text-sm text-[#CCD0CF]/60 md:max-w-md md:text-base">
              <div>PROJECTS BUILT</div>
              <div>:</div>
              <div>07</div>
              <div>LANGUAGES USED</div>
              <div>:</div>
              <div>08</div>
              <div>COFFEE CONSUMED</div>
              <div>:</div>
              <div>∞</div>
              <div>TERMINAL TABS</div>
              <div>:</div>
              <div>27</div>
              <div>BUGS CREATED</div>
              <div>:</div>
              <div>???</div>
              <div>BUGS FIXED</div>
              <div>:</div>
              <div>Eventually</div>
              <div>CURRENT STATUS</div>
              <div>:</div>
              <div>BUILDING</div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;