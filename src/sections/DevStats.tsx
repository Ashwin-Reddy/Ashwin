import { motion } from "motion/react";
import BorderGlow from "../components/BorderGlow";
import statsBackground from "../assets/images/stats-box.jpeg";

const DevStats = () => {
    return (
        <section
            id="devstats"
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
                        / developer stats
                    </h2>

                    <div
                        className="
                            flex-1
                            border-t
                            border-[#CCD0CF]/20
                        "
                    />
                </div>
            </motion.div>


            {/* Stats Glass Box */}

            <motion.div
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
                    ease: "easeOut",
                }}
            >
                <div
                    className="
                        mx-auto
                        w-full
                        max-w-3xl
                    "
                >

                    <BorderGlow
                        edgeSensitivity={20}
                        glowColor="175 80 65"
                        backgroundColor="#06141B"
                        borderRadius={0}
                        glowRadius={35}
                        glowIntensity={1.8}
                        coneSpread={30}
                        animated={false}
                        colors={[
                            "#64FFDD",
                            "#1C7A82",
                            "#0B3D46",
                        ]}
                        fillOpacity={0.35}
                    >

                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-none
                                px-5
                                py-8
                                shadow-[0_12px_40px_rgba(0,0,0,0.25)]
                                backdrop-blur-xl

                                sm:px-8
                                sm:py-10

                                md:px-14
                                md:py-12
                            "
                        >

                            {/* Background Image */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    -z-20
                                    scale-105
                                    bg-cover
                                    bg-center
                                    opacity-40
                                    blur-[2px]
                                "
                                style={{
                                    backgroundImage: `url(${statsBackground})`,
                                }}
                            />


                            {/* Glass Overlay */}

                            <div
                                className="
                                    absolute
                                    inset-0
                                    -z-10
                                    bg-gradient-to-br
                                    from-[#06141B]/80
                                    via-[#06141B]/55
                                    to-[#06141B]/70
                                    backdrop-blur-md
                                "
                            />


                            {/* Box Header */}

                            <div
                                className="
                                    mb-6
                                    border-b
                                    border-[#CCD0CF]/10
                                    pb-4

                                    sm:mb-8
                                    sm:pb-5
                                "
                            >
                                <h3
                                    className="
                                        text-center
                                        text-base
                                        font-semibold
                                        tracking-widest
                                        text-[#CCD0CF]

                                        sm:text-lg

                                        md:text-xl
                                    "
                                >
                                    ASHWIN.DEV
                                </h3>
                            </div>


                            {/* Stats */}

                            <div
                                className="
                                    space-y-4
                                    text-xs
                                    text-[#9BA8AB]

                                    sm:space-y-5
                                    sm:text-sm

                                    md:space-y-6
                                    md:text-lg
                                "
                            >

                                {/* Projects */}
                                <div
                                    className="
                                        grid
                                        grid-cols-[minmax(0,1fr)_18px_auto]
                                        items-center
                                        gap-x-3

                                        md:grid-cols-[220px_24px_1fr]
                                        md:gap-x-4
                                    "
                                >
                                    <span className="whitespace-nowrap">
                                        PROJECTS BUILT
                                    </span>

                                    <span className="text-center text-[#CCD0CF]/50">
                                        :
                                    </span>

                                    <span className="whitespace-nowrap font-medium text-[#CCD0CF]">
                                        07
                                    </span>
                                </div>


                                {/* Languages */}
                                <div
                                    className="
                                        grid
                                        grid-cols-[minmax(0,1fr)_18px_auto]
                                        items-center
                                        gap-x-3

                                        md:grid-cols-[220px_24px_1fr]
                                        md:gap-x-4
                                    "
                                >
                                    <span className="whitespace-nowrap">
                                        LANGUAGES USED
                                    </span>

                                    <span className="text-center text-[#CCD0CF]/50">
                                        :
                                    </span>

                                    <span className="whitespace-nowrap font-medium text-[#CCD0CF]">
                                        08
                                    </span>
                                </div>


                                {/* Coffee */}
                                <div
                                    className="
                                        grid
                                        grid-cols-[minmax(0,1fr)_18px_auto]
                                        items-center
                                        gap-x-3

                                        md:grid-cols-[220px_24px_1fr]
                                        md:gap-x-4
                                    "
                                >
                                    <span className="whitespace-nowrap">
                                        COFFEE CONSUMED
                                    </span>

                                    <span className="text-center text-[#CCD0CF]/50">
                                        :
                                    </span>

                                    <span className="whitespace-nowrap font-medium text-[#CCD0CF]">
                                        ∞
                                    </span>
                                </div>


                                {/* LeetCode */}
                                <div
                                    className="
                                        grid
                                        grid-cols-[minmax(0,1fr)_18px_auto]
                                        items-center
                                        gap-x-3

                                        md:grid-cols-[220px_24px_1fr]
                                        md:gap-x-4
                                    "
                                >
                                    <span className="whitespace-nowrap">
                                        LEETCODE VISITS
                                    </span>

                                    <span className="text-center text-[#CCD0CF]/50">
                                        :
                                    </span>

                                    <span className="whitespace-nowrap font-medium text-[#CCD0CF]">
                                        Lost Track
                                    </span>
                                </div>


                                {/* Bugs Created */}
                                <div
                                    className="
                                        grid
                                        grid-cols-[minmax(0,1fr)_18px_auto]
                                        items-center
                                        gap-x-3

                                        md:grid-cols-[220px_24px_1fr]
                                        md:gap-x-4
                                    "
                                >
                                    <span className="whitespace-nowrap">
                                        BUGS CREATED
                                    </span>

                                    <span className="text-center text-[#CCD0CF]/50">
                                        :
                                    </span>

                                    <span className="whitespace-nowrap font-medium text-[#CCD0CF]">
                                        ???
                                    </span>
                                </div>


                                {/* Bugs Fixed */}
                                <div
                                    className="
                                        grid
                                        grid-cols-[minmax(0,1fr)_18px_auto]
                                        items-center
                                        gap-x-3

                                        md:grid-cols-[220px_24px_1fr]
                                        md:gap-x-4
                                    "
                                >
                                    <span className="whitespace-nowrap">
                                        BUGS FIXED
                                    </span>

                                    <span className="text-center text-[#CCD0CF]/50">
                                        :
                                    </span>

                                    <span className="whitespace-nowrap font-medium text-[#CCD0CF]">
                                        Eventually
                                    </span>
                                </div>


                                {/* Current Status */}
                                <div
                                    className="
                                        grid
                                        grid-cols-[minmax(0,1fr)_18px_auto]
                                        items-center
                                        gap-x-3

                                        md:grid-cols-[220px_24px_1fr]
                                        md:gap-x-4
                                    "
                                >
                                    <span className="whitespace-nowrap">
                                        CURRENT STATUS
                                    </span>

                                    <span className="text-center text-[#CCD0CF]/50">
                                        :
                                    </span>

                                    <span className="whitespace-nowrap font-medium text-[#64FFDD]">
                                        BUILDING
                                    </span>
                                </div>

                            </div>

                        </div>

                    </BorderGlow>

                </div>

            </motion.div>

        </section>
    );
};

export default DevStats;