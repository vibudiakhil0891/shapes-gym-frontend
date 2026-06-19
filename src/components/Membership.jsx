function Membership() {

    const plans = [
        {
            title: "MONTHLY",
            plans: [
                ["GENERAL", "₹2250"],
                ["STUDENTS", "₹2000"],
                ["WOMENS", "₹1500"],
                ["COUPLE", "₹5000"]
            ]
        },
        {
            title: "3 MONTHS",
            plans: [
                ["GENERAL", "₹5999"],
                ["STUDENTS", "₹4999"],
                ["WOMENS", "₹5999"],
                ["COUPLE", "₹8999"]
            ]
        },
        {
            title: "6+1 MONTHS",
            plans: [
                ["GENERAL", "₹7999"],
                ["STUDENTS", "₹6999"],
                ["WOMENS", "₹7999"],
                ["COUPLE", "₹11999"]
            ]
        }
    ];


    return (
        <section className="bg-black py-24">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <h4 className="text-red-500 font-bold tracking-widest">
                        MEMBERSHIP PACKAGES
                    </h4>

                    <h2 className="text-5xl text-white font-black mt-4">
                        Choose Your Plan
                    </h2>

                </div>


                <div className="grid md:grid-cols-3 gap-8 mt-16">


                    {plans.map((item, index) => (

                        <div
                            key={index}
                            className="bg-[#111] border border-red-600 rounded-3xl p-8 shadow-xl hover:scale-105 duration-300"
                        >

                            <h3 className="text-red-500 text-3xl font-black">
                                {item.title}
                            </h3>


                            <div className="mt-8 space-y-5">


                                {item.plans.map((p, i) => (

                                    <div
                                        key={i}
                                        className="flex justify-between bg-black p-4 rounded-xl border border-gray-700"
                                    >

                                        <span className="text-white font-bold">
                                            {p[0]}
                                        </span>

                                        <span className="text-yellow-400 font-black">
                                            {p[1]}
                                        </span>

                                    </div>

                                ))}


                            </div>


                            <a
                                href="https://wa.me/919999999999?text=Hi%20I%20want%20to%20enquire%20about%20membership%20plans"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
    mt-8 w-full block text-center
    bg-green-500 
    text-white
    py-3
    rounded-full
    font-bold
    hover:bg-green-600
    duration-300
  "
                            >
                                WHATSAPP ENQUIRE
                            </a>


                        </div>

                    ))}


                </div>


                <div className="text-center mt-16">

                    <h2 className="text-yellow-400 text-4xl font-black">
                        ANNUAL OFFER ₹10999
                    </h2>

                    <p className="text-gray-300 mt-3">
                        14 Months (12+2 FREE) • Diet Plan • T-Shirt • Shaker
                    </p>

                </div>


            </div>

        </section>
    );
}

export default Membership;