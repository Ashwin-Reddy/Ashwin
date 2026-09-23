import { useEffect, useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "devstats", label: "Stats" },
];

const Navbar = () => {
    const [isSticky, setIsSticky] =
        useState(false);

    const [activeSection, setActiveSection] =
        useState("home");

    /*
     * Handles:
     * 1. Sticky navbar
     * 2. Active section
     */
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            /*
             * ------------------------------------------------
             * Sticky Navbar
             * ------------------------------------------------
             *
             * The navbar becomes sticky when the About
             * section reaches the top of the viewport.
             */
            const aboutSection =
                document.getElementById("about");

            if (aboutSection) {
                const aboutTop =
                    aboutSection.getBoundingClientRect().top;

                setIsSticky(aboutTop <= 0);
            }

            /*
             * ------------------------------------------------
             * Active Section
             * ------------------------------------------------
             *
             * When we're at the very top of the page,
             * Home should always be active.
             */
            if (scrollY < 100) {
                setActiveSection("home");
                return;
            }

            /*
             * Reference point used to determine which
             * section is currently active.
             *
             * 35% down the viewport works well for this
             * portfolio because it avoids changing the
             * active section too early.
             */
            const referencePoint =
                scrollY +
                window.innerHeight * 0.35;

            let currentSection = "home";
            let closestSectionTop = -Infinity;

            sections.forEach((section) => {
                const element =
                    document.getElementById(
                        section.id
                    );

                if (!element) {
                    return;
                }

                /*
                 * Get the absolute position of the
                 * section's top edge.
                 */
                const sectionTop =
                    element.getBoundingClientRect().top +
                    scrollY;

                /*
                 * If the section has reached our
                 * reference point, it becomes a
                 * candidate for the active section.
                 */
                if (
                    sectionTop <=
                        referencePoint &&
                    sectionTop >
                        closestSectionTop
                ) {
                    closestSectionTop =
                        sectionTop;

                    currentSection =
                        section.id;
                }
            });

            setActiveSection(
                currentSection
            );
        };

        /*
         * Run once immediately so the navbar has
         * the correct state when the page loads.
         */
        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        window.addEventListener(
            "resize",
            handleScroll
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                handleScroll
            );
        };
    }, []);

    return (
        <nav
            className={`
                z-50 w-full px-6
                transition-all duration-300
                ${
                    isSticky
                        ? "fixed left-0 top-3"
                        : "absolute left-0 top-0"
                }
            `}
        >
            <div
                className={`
                    mx-auto flex max-w-6xl
                    items-center justify-between
                    px-0 py-5
                    transition-all duration-300
                    ${
                        isSticky
                            ? `
                                rounded-2xl
                                border border-[#CCD0CF]/15
                                bg-[#11212D]/55
                                px-6
                                shadow-[0_8px_32px_rgba(0,0,0,0.2)]
                                backdrop-blur-md
                            `
                            : ""
                    }
                `}
            >

                {/* Logo / Name */}
                <a
                    href="#home"
                    className="
                        text-xl
                        font-semibold
                        tracking-tight
                    "
                >
                    Ashwin
                    <span className="text-[#64ffdd]">
                        .
                    </span>
                </a>

                {/* Navigation */}
                <div
                    className="
                        hidden
                        items-center
                        gap-8
                        md:flex
                    "
                >
                    {sections.map(
                        (section) => {
                            const isActive =
                                activeSection ===
                                section.id;

                            return (
                                <a
                                    key={
                                        section.id
                                    }
                                    href={`#${section.id}`}
                                    className={`
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        transition-all
                                        duration-300
                                        ${
                                            isActive
                                                ? "text-[#CCD0CF]"
                                                : "text-[#9BA8AB]"
                                        }
                                        hover:text-[#CCD0CF]
                                    `}
                                >

                                    {/* Active Indicator */}
                                    <span
                                        className={`
                                            h-1.5
                                            w-1.5
                                            rounded-full
                                            bg-[#64ffdd]
                                            transition-all
                                            duration-300
                                            ${
                                                isActive
                                                    ? "scale-100 opacity-100"
                                                    : "scale-0 opacity-0"
                                            }
                                        `}
                                    />

                                    {
                                        section.label
                                    }
                                </a>
                            );
                        }
                    )}
                </div>

                {/* Social Links */}
                <div
                    className="
                        flex
                        items-center
                        gap-5
                        text-[#64FFDD]
                    "
                >

                    {/* Email */}
                    <a
                        href="mailto:ashwindeepak.official@gmail.com"
                        aria-label="Email"
                        className="
                            transition-colors
                            hover:text-[#CCD0CF]
                        "
                    >
                        <FaEnvelope
                            size={18}
                        />
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Ashwin-Reddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="
                            transition-colors
                            hover:text-[#CCD0CF]
                        "
                    >
                        <FaGithub
                            size={18}
                        />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/ashwinreddy16"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="
                            transition-colors
                            hover:text-[#CCD0CF]
                        "
                    >
                        <FaLinkedin
                            size={18}
                        />
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;