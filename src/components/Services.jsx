import {
    FaDumbbell,
    FaHeartbeat,
    FaRunning,
    FaAppleAlt,
    FaUserTie,
    FaFire
} from "react-icons/fa";

function Services() {
    const services = [
        {
            icon: <FaDumbbell />,
            title: "Strength Training",
            desc: "Build power, endurance, and confidence with advanced strength programs."
        },
        {
            icon: <FaHeartbeat />,
            title: "Cardio Fitness",
            desc: "Boost heart health and stamina through high-energy cardio workouts."
        },
        {
            icon: <FaRunning />,
            title: "Weight Loss",
            desc: "Burn fat efficiently with customized training and fitness plans."
        },
        {
            icon: <FaAppleAlt />,
            title: "Nutrition Guidance",
            desc: "Personalized meal plans designed to maximize your fitness results."
        },
        {
            icon: <FaUserTie />,
            title: "Personal Training",
            desc: "One-on-one coaching from certified fitness professionals."
        },
        {
            icon: <FaFire />,
            title: "Muscle Building",
            desc: "Gain lean muscle mass using proven training techniques."
        }
    ];

    return (
        <section
            id="services"
            className="bg-gradient-to-b from-black via-[#0a0a0a] to-black py-28"
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <span className="text-yellow-500 font-semibold tracking-[4px] uppercase">
                        Premium Fitness Services
                    </span>

                    <h2 className="text-5xl md:text-6xl font-extrabold text-white">
                        Transform Your
                        <span className="text-yellow-500"> Body</span>
                    </h2>

                    <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>

                    <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
                        Experience world-class fitness programs designed to help
                        you become stronger, healthier, and more confident.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="
                group
                bg-[#111]
                border border-yellow-500/20
                rounded-3xl
                p-8
                hover:border-yellow-500
                hover:-translate-y-3
                transition-all
                duration-500
                overflow-hidden
                relative
              "
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                            {/* Icon */}
                            <div className="
                relative z-10
                w-20 h-20
                flex items-center justify-center
                rounded-2xl
                bg-yellow-500/10
                text-yellow-500
                text-4xl
                group-hover:scale-110
                transition
                duration-500
              ">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 text-white text-2xl font-bold mt-6">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 text-gray-400 mt-4 leading-relaxed">
                                {service.desc}
                            </p>

                            {/* Button */}
                            <button
                                className="
                  relative z-10
                  mt-6
                  text-yellow-500
                  font-semibold
                  hover:text-yellow-400
                  transition
                "
                            >
                                Learn More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;