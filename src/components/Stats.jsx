function Stats() {
    const stats = [
        { number: "5+", label: "Years Experience" },
        { number: "100+", label: "Active Members" },
        { number: "15+", label: "Fitness Programs" },
        { number: "4.9★", label: "Google Rating" },
    ];

    return (
        <section className="bg-[#111] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 text-center">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="bg-black p-8 rounded-3xl border border-yellow-500/20"
                        >
                            <h2 className="text-5xl font-bold text-yellow-500">
                                {item.number}
                            </h2>

                            <p className="text-gray-400 mt-3">
                                {item.label}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Stats;