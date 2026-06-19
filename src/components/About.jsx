import { motion } from "framer-motion";

function About() {
    const yearsExperience = new Date().getFullYear() - 2022;

    return (
        <section
            id="about"
            className="bg-black text-white py-24"
        >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/images/hero.jpg"
                        alt="Shapes Gym"
                        className="rounded-3xl shadow-xl"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h4 className="text-yellow-500 font-bold text-xl">
                        ABOUT US
                    </h4>

                    <h2 className="text-5xl font-bold mt-3">
                        Building Strength Since 2022
                    </h2>

                    <p className="mt-6 text-gray-400 leading-8">
                        Shapes Gym Tirupati is dedicated to helping individuals
                        achieve their fitness goals through professional training,
                        modern equipment, and a motivating workout environment.
                    </p>

                    <p className="mt-4 text-gray-400 leading-8">
                        Whether your goal is weight loss, muscle gain,
                        strength training, or overall fitness, our experienced
                        trainers are committed to guiding and supporting you
                        every step of the way.
                    </p>

                    <div className="grid grid-cols-2 gap-6 mt-10">
                        <div>
                            <h3 className="text-4xl text-yellow-500 font-bold">
                                {yearsExperience}+
                            </h3>
                            <p>Years Experience</p>
                        </div>

                        <div>
                            <h3 className="text-4xl text-yellow-500 font-bold">
                                100+
                            </h3>
                            <p>Happy Members</p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default About;