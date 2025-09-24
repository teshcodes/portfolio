export default function Testimonials() {
    const testimonials = [
        {
            name: "Esther Howard",
            handle: "@estherhoward",
            text: "I can't say enough good things about Teslim. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
            avatar: "/avatar1.png",
        },
        {
            name: "Guy Hawkins",
            handle: "@guyhawkins",
            text: "Collaborating with Teslim was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Teslim's enthusiasm for every facet of development truly stands out.",
            avatar: "/avatar2.png",
        },
        {
            name: "Wade Warren",
            handle: "@wadewarren",
            text: "Working with Teslim was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched.",
            avatar: "/avatar3.png",
        },
        {
            name: "Floyd Miles",
            handle: "@floydmiles",
            text: "Teslim's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
            avatar: "/avatar4.png",
        },
        {
            name: "Marvin McKinney",
            handle: "@marvinmckinney",
            text: "Teslim was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
            avatar: "/avatar5.png",
        },
        {
            name: "Albert Flores",
            handle: "@albertflores",
            text: "Teslim was great to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
            avatar: "/avatar6.png",
        },
    ];

    return (
        <section
            id="testimonials"
            className="mt-16 md:mt-24 px-6 md:px-20">
            {/* Header */}
            <div className="flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#282732] text-xs md:text-sm text-[#FFFFFF]">
                    ⭐ Customer feedback highlights
                </div>
            </div>

            <p className="text-[#FFFFFF] text-2xl md:text-4xl font-bold text-center mt-6">
                What People Say About Me?
            </p>

            {/* Testimonials Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-[#1C1C21] p-6 rounded-lg flex flex-col justify-between"
                    >
                        {/* Stars */}
                        <div className="flex mb-3 gap-1">
                            {"★★★★★".split("").map((star, idx) => (
                                <span
                                    key={idx}
                                    className={`text-[#FFFFFF] animate-star-glow`}
                                    style={{ animationDelay: `${idx * 0.2}s` }}
                                >
                                    {star}
                                </span>
                            ))}
                        </div>

                        {/* Feedback */}
                        <p className="text-[#CCCCCC] text-sm md:text-base mb-4 flex-1">
                            {t.text}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-3">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                                <p className="text-[#FFFFFF] text-sm font-medium">{t.name}</p>
                                <p className="text-[#888888] text-xs">{t.handle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
