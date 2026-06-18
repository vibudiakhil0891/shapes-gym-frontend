function Testimonials() {
    return (
        <section className="bg-[#0a0a0a] py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">
                    <h4 className="text-yellow-500 font-bold text-xl">
                        TESTIMONIALS
                    </h4>

                    <h2 className="text-5xl text-white font-bold mt-4">
                        What Members Say
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <div className="bg-black p-8 rounded-3xl">
                        <p className="text-gray-400">
                            Great environment and a great place to train.
                        </p>
                        <h3 className="text-yellow-500 mt-6 font-bold">
                            Gym Member
                        </h3>
                    </div>

                    <div className="bg-black p-8 rounded-3xl">
                        <p className="text-gray-400">
                            Friendly trainers and quality equipment.
                        </p>
                        <h3 className="text-yellow-500 mt-6 font-bold">
                            Fitness Enthusiast
                        </h3>
                    </div>

                    <div className="bg-black p-8 rounded-3xl">
                        <p className="text-gray-400">
                            Highly recommended for anyone serious about fitness.
                        </p>
                        <h3 className="text-yellow-500 mt-6 font-bold">
                            Shapes Member
                        </h3>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Testimonials;