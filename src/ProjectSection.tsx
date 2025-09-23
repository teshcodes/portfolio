export default function HeroContent() {
    return(
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 md:px-12 lg:px-20 pb-12 md:pb-20">
                {/* Left side */}
                <div className="flex flex-col h-auto lg:h-[795px]">
                    <img
                        src="/iphone.png"
                        className="w-full h-[300px] md:h-[650px] object-cover bg-[#C0EAFF] rounded-lg"
                        alt="Ryde App"
                    />
                    <p className="font-mono mt-6 md:mt-8 text-xl md:text-2xl font-semibold">
                        On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde
                    </p>
                    <p className="text-sm text-[#D9ECFF] opacity-75 mt-3">
                        An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
                    </p>
                </div>

                {/* Right side */}
                <div className="flex flex-col gap-6 w-full">
                    {/* Library */}
                    <div className="flex-1 flex flex-col">
                        <div className="bg-[#FFEFDB] py-3 px-6 md:px-10 rounded-lg">
                            <img
                                src="/library2.png"
                                className="w-full h-[200px] md:h-[300px] object-cover bg-[#FFEFDB] rounded-lg"
                                alt="Library App"
                            />
                        </div>
                        <p className="font-mono font-semibold text-lg md:text-xl mt-4 md:mt-6 text-white">
                            The Library Management Platform
                        </p>
                    </div>

                    {/* Directory */}
                    <div className="flex-1 flex flex-col mt-3">
                        <div className="bg-[#FFEFDB] py-3 px-6 md:px-10 rounded-lg">
                            <img
                                src="/directory2.png"
                                className="w-full h-[210px] md:h-[310px] object-cover bg-[#FFE7EB] rounded-lg"
                                alt="YC Directory"
                            />
                        </div>
                        <p className="font-mono text-lg md:text-xl font-semibold text-white mt-4 md:mt-6">
                            YC Directory - A Startup Showcase App
                        </p>
                    </div>
                </div>
            </section>
    );
}