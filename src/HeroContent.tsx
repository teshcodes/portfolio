import { FaUsers } from "react-icons/fa";

export default function HeroContent() {
    //  {Hero Content}
    return (
        <section className="grid md:grid-cols-2 gap-10 items-center px-6 md:px-12 lg:px-20 py-12 md:py-20">
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
                <a href="#work-experience">
                    <button className="mt-6 text-[#000000] text-sm font-semibold px-4 py-3 bg-gradient-to-b from-[#EBF3FA] to-[#DFEDFA] rounded-lg shadow-lg cursor-pointer">
                        See My Work ↓
                    </button>
                </a>
            </div>

            {/* Right side */}
            <div className="flex justify-center">
                <img
                    src="/office-illustration.png"
                    alt="workspace"
                    className="rounded-2xl max-w-full h-auto shadow-2xl animate-[float3D_3s_ease-in-out_infinite] [transform-style:preserve-3d]"
                />
            </div>
        </section>
    );
}