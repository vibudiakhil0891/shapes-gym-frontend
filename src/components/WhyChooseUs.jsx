import {
    FaDumbbell,
    FaUsers,
    FaAward,
    FaHeartbeat,
} from "react-icons/fa";

function WhyChooseUs() {
    const features = [
        {
            icon: <FaDumbbell />,
            title: "Modern Equipment",
            desc: "Latest machines and training tools.",
        },
        {
            icon: <FaUsers />,
            title: "Expert Trainers",
            desc: "Professional guidance for every goal.",
        },
        {
            icon: <FaAward />,
            title: "Proven Results",
            desc: "Helping members transform since 2013.",
        },
        {
            icon: <FaHeartbeat />,
            title: "Healthy Lifestyle",
            desc: "Fitness, nutrition and motivation.",
        },
    ];

    return (
        <section className="bg-black py-24">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">
                    <h4 className="text-yellow-500 font-bold">
                        WHY CHOOSE US
                    </h4>

                    <h2 className="text-5xl font-bold text-white mt-4">
                        Your Fitness Journey Starts Here
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#111] p-8 rounded-3xl text-center border border-yellow-500/20 hover:border-yellow-500 transition"
                        >
                            <div className="text-yellow-500 text-5xl flex justify-center">
                                {item.icon}
                            </div>

                            <h3 className="text-white text-2xl font-bold mt-6">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 mt-4">
                                {item.desc}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;