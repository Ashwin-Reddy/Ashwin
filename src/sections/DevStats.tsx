const DevStats = () => {
    return (
        <section
            id="devstats"
            className="overflow-hidden px-6 py-32 md:py-40"
        >
            {/* Section Heading */}
            <div className="mx-auto mb-14 flex max-w-6xl items-center gap-5">
                <h2 className="whitespace-nowrap text-3xl font-semibold tracking-tight md:text-4xl">
                    / developer stats
                </h2>

                <div className="flex-1 border-t border-[#CCD0CF]/20" />
            </div>

            {/* Stats Glass Box */}
            <div className="mx-auto max-w-3xl">
                <div
                    className="
                        rounded-2xl
                        border border-[#CCD0CF]/15
                        bg-[#11212D]/45
                        px-8 py-10
                        shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                        backdrop-blur-md
                        md:px-14 md:py-12
                    "
                >
                    {/* Box Header */}
                    <div className="mb-8 border-b border-[#CCD0CF]/10 pb-5">
                        <h3 className="text-center text-lg font-semibold tracking-widest text-[#CCD0CF] md:text-xl">
                            ASHWIN.DEV
                        </h3>
                    </div>

                    {/* Stats */}
                    <div className="space-y-5 text-base text-[#9BA8AB] md:space-y-6 md:text-lg">

                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 md:grid-cols-[220px_24px_1fr]">
                            <span>PROJECTS BUILT</span>
                            <span className="text-[#CCD0CF]/50">:</span>
                            <span className="font-medium text-[#CCD0CF]">07</span>
                        </div>

                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 md:grid-cols-[220px_24px_1fr]">
                            <span>LANGUAGES USED</span>
                            <span className="text-[#CCD0CF]/50">:</span>
                            <span className="font-medium text-[#CCD0CF]">08</span>
                        </div>

                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 md:grid-cols-[220px_24px_1fr]">
                            <span>COFFEE CONSUMED</span>
                            <span className="text-[#CCD0CF]/50">:</span>
                            <span className="font-medium text-[#CCD0CF]">∞</span>
                        </div>

                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 md:grid-cols-[220px_24px_1fr]">
                            <span>LEETCODE VISITS</span>
                            <span className="text-[#CCD0CF]/50">:</span>
                            <span className="font-medium text-[#CCD0CF]">Lost Track</span>
                        </div>

                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 md:grid-cols-[220px_24px_1fr]">
                            <span>BUGS CREATED</span>
                            <span className="text-[#CCD0CF]/50">:</span>
                            <span className="font-medium text-[#CCD0CF]">???</span>
                        </div>

                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 md:grid-cols-[220px_24px_1fr]">
                            <span>BUGS FIXED</span>
                            <span className="text-[#CCD0CF]/50">:</span>
                            <span className="font-medium text-[#CCD0CF]">
                                Eventually
                            </span>
                        </div>

                        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 md:grid-cols-[220px_24px_1fr]">
                            <span>CURRENT STATUS</span>
                            <span className="text-[#CCD0CF]/50">:</span>
                            <span className="font-medium text-[#64FFDD]">
                                BUILDING
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevStats;