export default function BringToTheTable() {
    const skills = [
        { name: "React Developer", img: "/react1.png" },
        { name: "Mobile App Developer", img: "/React2.svg", specialBg: true },
        { name: "Backend Developer", img: "/nodejs1.png" },
        { name: "Interactive Developer", img: "/image-interactive.png" },
        { name: "Project Manager", img: "/git.svg" },
    ];

    return (
        <section className="mt-12 md:mt-20">
            {/* Section Heading */}
            <div className="text-center">
                <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-[#282732] text-sm text-[#FFFFFF]">
                    🤝 What I Bring To The Table
                </div>
                <p className="text-[#FFFFFF] font-serif text-2xl md:text-4xl font-bold mt-6 md:mt-7">
                    How I Can Contribute & My Key Skill
                </p>
            </div>

            {/* Skills Grid */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 p-2 rounded-lg">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className={`flex flex-col items-center text-center gap-2 border border-[#1C1C21] rounded-t-full rounded-b-full py-7 px-6 w-[140px] ${skill.specialBg ? "bg-[#2D3240]" : ""
                            }`}
                    >

                        <img src={skill.img} alt={skill.name} className="w-full h-full" />
                        <p className="text-[#FFFFFF] text-m font-medium">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
