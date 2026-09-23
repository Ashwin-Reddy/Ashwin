import { motion } from "motion/react";
import aboutImage from "../assets/images/about.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="
        px-4
        py-20
        sm:px-6
        sm:py-24
        md:py-40
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-4xl
          flex-col
          items-center
          gap-10

          sm:gap-12

          md:flex-row
          md:gap-20
        "
      >

        {/* Image */}

        <motion.div
          className="
            w-[85%]
            max-w-sm

            sm:w-[75%]

            md:w-2/5
            md:max-w-none
          "
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            scale: 1.04,
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
          <div className="overflow-hidden rounded-xl">
            <img
              src={aboutImage}
              alt="About Ashwin"
              className="
                h-auto
                w-full
                object-cover
              "
            />
          </div>
        </motion.div>


        {/* Content */}

        <motion.div
          className="
            w-full
            md:w-3/5
          "
          initial={{
            opacity: 0,
            x: 50,
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
            delay: 0.15,
            ease: "easeOut",
          }}
        >

          {/* Heading */}
          <div
            className="
              mb-7
              flex
              items-center
              gap-4

              sm:mb-8
              sm:gap-5

              md:mb-10
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
              / about me
            </h2>

            <div
              className="
                h-px
                flex-1
                bg-[#CCD0CF]/20
              "
            />
          </div>


          {/* Description */}
          <p
            className="
              max-w-xl
              text-sm
              leading-7
              text-[#9BA8AB]

              sm:text-base
              sm:leading-8

              md:text-lg
            "
          >
            I build software that solves real
            problems, explore AI and enjoy
            understanding what happens under
            the hood. When I'm not building,
            I'm wondering what to build next.
          </p>


          {/* Technologies */}
          <div className="mt-7 sm:mt-8">

            <p
              className="
                mb-5
                max-w-xl
                text-sm
                leading-7
                text-[#9BA8AB]

                sm:text-base
                sm:leading-8

                md:text-lg
              "
            >
              Here are some technologies I have
              been working with:
            </p>


            <div
              className="
                grid
                max-w-sm
                grid-cols-2
                gap-x-6
                gap-y-3
                text-sm
                text-[#9BA8AB]

                sm:gap-x-10
                sm:text-base

                md:max-w-md
              "
            >

              <div>
                <span className="text-[#64ffda]">
                  ▷
                </span>{" "}
                Python
              </div>

              <div>
                <span className="text-[#64ffda]">
                  ▷
                </span>{" "}
                Java
              </div>

              <div>
                <span className="text-[#64ffda]">
                  ▷
                </span>{" "}
                PostgreSQL
              </div>

              <div>
                <span className="text-[#64ffda]">
                  ▷
                </span>{" "}
                C++
              </div>

              <div>
                <span className="text-[#64ffda]">
                  ▷
                </span>{" "}
                React.js
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default About;