function Membership() {
    return (
        <section className="bg-black py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">
                    <h4 className="text-yellow-500 font-bold">
                        MEMBERSHIP PLANS
                    </h4>

                    <h2 className="text-5xl text-white font-bold mt-4">
                        Choose Your Plan
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">

                    <div className="bg-[#111] p-8 rounded-3xl">
                        <h3 className="text-yellow-500 text-2xl font-bold">
                            Monthly
                        </h3>

                        <p className="text-gray-400 mt-4">
                            Contact Gym
                        </p>

                        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full font-bold">
                            Enquire
                        </button>
                    </div>

                    <div className="bg-yellow-500 text-black p-8 rounded-3xl scale-105">
                        <h3 className="text-2xl font-bold">
                            Quarterly
                        </h3>

                        <p className="mt-4">
                            Best Value
                        </p>

                        <button className="mt-8 bg-black text-white px-6 py-3 rounded-full">
                            Enquire
                        </button>
                    </div>

                    <div className="bg-[#111] p-8 rounded-3xl">
                        <h3 className="text-yellow-500 text-2xl font-bold">
                            Annual
                        </h3>

                        <p className="text-gray-400 mt-4">
                            Contact Gym
                        </p>

                        <button className="mt-8 bg-yellow-500 text-black px-6 py-3 rounded-full font-bold">
                            Enquire
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Membership;