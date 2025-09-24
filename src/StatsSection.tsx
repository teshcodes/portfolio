export default function StatsSection() {
    return (
        <div id="stats" className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-12 lg:px-20 pb-12 md:pb-20">
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
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FFFFFF]">
                        {stat.value}
                    </h2>
                    <p className="text-[#D9ECFF] text-xs md:text-sm">{stat.label}</p>
                </div>
            ))}
        </div>
    );
}
