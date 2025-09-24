import { FaLaptopCode, FaCode, FaMobileAlt } from "react-icons/fa";

export default function TimelineSection() {
    return (
        <section 
        id="experience"
        className="relative max-w-6xl mx-auto mt-16 px-6">
            {/* Vertical timeline line */}
            <div
                className="absolute left-1/2 top-0 hidden md:block w-[3px] h-full transform -translate-x-1/2"
                style={{
                    background:
                        "linear-gradient(0deg, rgba(69, 222, 196, 0) 0%, #62E0FF 25%, #52AEFF 37.51%, #FD5C79 62.83%, #6D45CE 92.91%)",
                }}
            ></div>

            <div className="grid md:grid-cols-2 gap-12 relative">
                {/* LEFT COLUMN - Testimonials */}
                <div className="flex flex-col gap-12">
                    {/* Hostinger */}
                    <div className="bg-[#1C1C21] p-6 rounded-xl shadow-lg">
                        <p className="text-gray-300 mb-4">
                            Teslim brought creativity and technical expertise to the team,
                            significantly improving our frontend performance. His work has
                            been invaluable in delivering faster experiences.
                        </p>
                        <img src="/hostinger2.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px]" alt="Hostinger" />
                    </div>

                    {/* Appwrite */}
                    <div className="bg-[#1C1C21] p-6 rounded-xl shadow-lg">
                        <p className="text-gray-300 mb-4">
                            Teslim’s contributions to Docker’s web applications have been
                            outstanding. He approaches challenges with a problem-solving
                            mindset.
                        </p>
                        <img src="/appwrite3.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px]" alt="Appwrite" />
                    </div>

                    {/* Docker */}
                    <div className="bg-[#1C1C21] p-6 rounded-xl shadow-lg">
                        <p className="text-gray-300 mb-4">
                            Teslim’s work on Appwrite’s mobile app brought a high level of
                            quality and efficiency. He delivered solutions that enhanced our
                            mobile experience & met our product goals.
                        </p>
                        <img src="/docker2.png" className="w-[100px] md:w-[140px] h-[24px] md:h-[32px] inline-block" alt="Docker" />
                    </div>
                </div>

                {/* RIGHT COLUMN - Job Roles */}
                <div className="flex flex-col gap-20 relative">
                    {/* Frontend Developer */}
                    <div className="relative">
                        <div className="absolute -left-8 md:-left-14 top-1/8 transform -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500">
                            <FaLaptopCode className="text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">Frontend Developer</h3>
                        <p className="text-gray-400 text-sm">January 2023 – Present</p>
                        <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1">
                            <li>
                                Developed and maintained user-facing features for the Hostinger
                                website.
                            </li>
                            <li>
                                Collaborated closely with UI/UX designers to ensure seamless
                                user experiences.
                            </li>
                            <li>
                                Optimized web applications for maximum speed and scalability.
                            </li>
                        </ul>
                    </div>

                    {/* Full Stack Developer */}
                    <div className="relative">
                        <div className="absolute -left-8 md:-left-14 top-1/8 transform -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-500">
                            <FaCode className="text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">Full Stack Developer</h3>
                        <p className="text-gray-400 text-sm">June 2020 – December 2023</p>
                        <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1">
                            <li>
                                Led the development of Docker’s web applications, focusing on
                                scalability.
                            </li>
                            <li>
                                Worked with backend engineers to integrate APIs seamlessly with
                                the frontend.
                            </li>
                            <li>
                                Contributed to open-source projects within Docker ecosystem.
                            </li>
                        </ul>
                    </div>

                    {/* React Native Developer */}
                    <div className="relative">
                        <div className="absolute -left-8 md:-left-14 top-1/8 transform -translate-y-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500">
                            <FaMobileAlt className="text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">React Native Developer</h3>
                        <p className="text-gray-400 text-sm">March 2019 – May 2020</p>
                        <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1">
                            <li>
                                Built cross-platform mobile apps using React Native, integrating
                                with Appwrite’s backend services.
                            </li>
                            <li>
                                Improved app performance and user experience through optimization.
                            </li>
                            <li>
                                Coordinated with product team to implement features based on
                                feedback.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
