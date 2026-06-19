import { motion } from "framer-motion";

function Hero() {
    return (
        <section id="home" className="relative h-screen overflow-hidden">

            {/* VIDEO BACKGROUND */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/gym.mp4" type="video/mp4" />
            </video>

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* CONTENT */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

                <h1 className="text-5xl md:text-7xl font-black text-white">
                    SHAPES <span className="text-yellow-500">GYM</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mt-4">
                    Legacy Of Strength Since 2022
                </p>

                <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
                    Train Hard. Stay Strong.
                </h2>

                <div className="mt-10 flex gap-4">
                    <a
                        href="tel:9701433281"
                        className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold shadow-lg"
                    >
                        Call Now
                    </a>

                    <a
                        href="#contact"
                        className="border border-yellow-500 text-white px-8 py-4 rounded-full"
                    >
                        Join Now
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Hero;