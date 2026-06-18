function Gallery() {
    const images = [
        "/images/gym1.jpg",
        "/images/gym2.jpg",
        "/images/gym3.jpg",
        "/images/hero.jpg",
        "/images/member.jpg",
        "/images/gym1.jpg",
    ];

    return (
        <section
            id="gallery"
            className="bg-black py-24"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h4 className="text-yellow-500 font-bold text-xl">
                        GALLERY
                    </h4>

                    <h2 className="text-5xl font-bold text-white mt-4">
                        Inside Shapes Gym
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">

                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-3xl"
                        >
                            <img
                                src={img}
                                alt=""
                                className="w-full h-80 object-cover hover:scale-110 hover:brightness-110 transition-all duration-500"
                            />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Gallery;