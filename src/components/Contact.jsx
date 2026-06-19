function Contact() {
    return (
        <section
            id="contact"
            className="bg-black py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">
                    <h4 className="text-yellow-500 font-bold">
                        CONTACT US
                    </h4>

                    <h2 className="text-5xl font-bold text-white mt-4">
                        Join Shapes Gym Today
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-16">

                    <div>
                        <h3 className="text-2xl text-yellow-500 font-bold">
                            Contact Information
                        </h3>

                        <p className="text-gray-400 mt-6">
                            📞 +91 9701433281
                        </p>

                        <p className="text-gray-400 mt-4">
                            📍 Bairagi Patteda,
                            Tirupati,
                            Andhra Pradesh
                        </p>

                        <a
                            href="tel:9701433281"
                            className="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-full font-bold"
                        >
                            Call Now
                        </a>
                    </div>

                    <div>
                        <iframe
                            title="map"
                            src="https://www.google.com/maps?q=Tirupati&output=embed"
                            className="w-full h-80 rounded-3xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;