import { FaUsers } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="bg-[#000000] text-white relative">
            {/* Background accents */}
            <img
                src="/bg-top-left.png"
                className="absolute top-0 left-0 w-20 md:w-40 opacity-30"
                alt=""
            />
            <img
                src="/bg-bottom-right.png"
                className="absolute bottom-0 right-0 w-20 md:w-40 opacity-30"
                alt=""
            />

            {/* Navbar */}
            <nav className="p-4 md:p-15">
                <div className="bg-[#1D1C22] flex flex-row justify-between items-center mx-3 md:mx-5 px-6 md:px-10 py-4 mt-4 rounded-xl gap-4">
                    <div className="flex items-center gap-2">
                        <img src="/mylogo.png" className="w-10 h-10 rounded-full" alt="logo" />
                        <span className="font-bold">Teslim THC</span>
                    </div>

                    <div className="hidden md:flex gap-6 lg:gap-8 items-center cursor-pointer">
                        <a href="#" className="text-[#D9ECFF] hover:text-white transition">Work</a>
                        <a href="#" className="text-[#D9ECFF] hover:text-white transition">Skills</a>
                        <a href="#" className="text-[#D9ECFF] hover:text-white transition">Experience</a>
                        <a href="#" className="text-[#D9ECFF] hover:text-white transition">Testimonials</a>
                    </div>

                    <button className="text-black px-4 py-2 rounded-lg font-medium bg-gradient-to-b from-[#EBF3FA] to-[#DFEDFA] cursor-pointer">
                        Contact me
                    </button>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-12 lg:px-20 py-12 md:py-20">
                {/* Left side */}
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        Shaping{" "}
                        <span className="inline-flex items-center gap-2 text-blue-400">
                            <FaUsers className="text-2xl md:text-4xl" /> Ideas
                        </span>
                        <br />
                        into Real Projects <br />
                        that <span className="text-purple-400">Deliver Results</span>
                    </h1>

                    <p className="mt-4 text-[#D9ECFF] text-sm md:text-base">
                        Hi, I'm TeshCodes, a developer based in côté d'Ivoire with a passion for code.
                    </p>
                    <button className="mt-6 text-[#000000] text-sm font-semibold px-4 py-3 bg-gradient-to-b from-[#EBF3FA] to-[#DFEDFA] rounded-lg shadow-lg cursor-pointer">
                        See My Work ↓
                    </button>
                </div>

                {/* Right side */}
                <div className="flex justify-center">
                    <img
                        src="/office-illustration.png"
                        className="rounded-2xl max-w-full h-auto"
                        alt="workspace"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20 pb-12 md:pb-20">
                {[
                    { value: "15+", label: "Years of Experience" },
                    { value: "200+", label: "Satisfied Clients" },
                    { value: "108+", label: "Completed Projects" },
                    { value: "90%", label: "Client Retention Rate" },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        className="bg-[#1C1C21] border border-[#0E0E10] rounded-xl p-6 text-start"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF]">{stat.value}</h2>
                        <p className="text-[#D9ECFF] text-xs md:text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Projects Section */}
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

            {/* Logos Marquee */}
            <div className="relative max-w-[1200px] mx-auto overflow-hidden px-4">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent"></div>

                <div className="flex gap-[30px] md:gap-[50px] font-sans animate-marquee whitespace-nowrap">
                    <img src="/nvidia-logo.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px] inline-block" alt="Nvidia" />
                    <img src="/appwrite.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px] inline-block" alt="Appwrite" />
                    <img src="/adobe.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px] inline-block" alt="Adobe" />
                    <img src="/hostinger.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px] inline-block" alt="Hostinger" />
                    <img src="/docker.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px] inline-block" alt="Docker" />


                    {/* duplicate logos for smooth loop */}
                    <img src="/nvidia-logo.png" className="w-[140px] h-[32px] inline-block" alt="Nvidia" />
                    <img src="/appwrite.png" className="w-[140px] h-[32px] inline-block" alt="Appwrite" />
                    <img src="/adobe.png" className="w-[140px] h-[32px] inline-block" alt="Adobe" />
                    <img src="/hostinger.png" className="w-[140px] h-[32px] inline-block" alt="Hostinger" />
                    <img src="/docker.png" className="w-[140px] h-[32px] inline-block" alt="Docker" />
                    <img src="/nvidia-logo.png" className="w-[140px] h-[32px] inline-block" alt="Nvidia" />
                    <img src="/appwrite.png" className="w-[140px] h-[32px] inline-block" alt="Appwrite" />
                </div>
            </div>


            {/* Features */}
            <div className="px-6 md:px-12 lg:px-20 mt-12 md:mt-20 flex flex-col md:flex-row gap-6">
                <div className="bg-[#1C1C21] flex-1 p-[24px] rounded-xl">
                    <img src="/quality-icon.png" className="mb-2" />
                    <p className="text-[#FFFFFF] mb-2 font-semibold">Quality Focus</p>
                    <p className="text-[#D9ECFF] opacity-75 text-sm">
                        Delivering high-quality results while maintaining attention to every detail.
                    </p>
                </div>

                <div className="bg-[#1C1C21] flex-1 p-[24px] rounded-xl">
                    <img src="/message-icon.png" className="mb-2" />
                    <p className="text-[#FFFFFF] mb-2 font-semibold">Reliable Communication</p>
                    <p className="text-[#D9ECFF] opacity-75 text-sm">
                        Keeping you updated at every step to ensure transparency and clarity.
                    </p>
                </div>

                <div className="bg-[#1C1C21] flex-1 p-[24px] rounded-xl">
                    <img src="/time-icon.png" className="mb-2" />
                    <p className="text-[#FFFFFF] mb-2 font-semibold">On-Time Delivery</p>
                    <p className="text-[#D9ECFF] opacity-75 text-sm">
                        Making sure projects are completed on schedule, with quality & attention to detail.
                    </p>
                </div>
            </div>

            {/* Career pill */}
            <div className="mt-12 md:mt-20 flex justify-center">
                <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#282732]">
                    <img src="/career-image.png" alt="career" className="w-6 h-6" />
                    <p className="text-white text-sm font-sans">My Career Overview</p>
                </div>
            </div>

            <p className="text-[#FFFFFF] text-2xl md:text-4xl font-bold text-center mt-6 md:mt-7">
                Professional Work Experience
            </p>
        </section>
    );
}
