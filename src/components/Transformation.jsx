function Transformation() {
    return (
        <section className="py-24 bg-gradient-to-r from-black via-[#111] to-black">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <img
                            src="/images/transformation.jpg"
                            alt="Transformation"
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>

                    <div>
                        <h4 className="text-yellow-500 font-bold">
                            TRANSFORM YOUR LIFE
                        </h4>

                        <h2 className="text-5xl font-bold text-white mt-4">
                            Stronger Every Day
                        </h2>

                        <p className="text-gray-400 mt-6 text-lg">
                            At Shapes Gym, we help you build strength,
                            improve fitness, and achieve your dream physique
                            with professional guidance and modern equipment.
                        </p>

                        <button
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition"
                        >
                            Start Today
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Transformation;