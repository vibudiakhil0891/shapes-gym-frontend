function Footer() {
    return (
        <footer className="bg-black border-t border-yellow-500/20 py-12">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Brand */}
                <h2 className="text-3xl font-bold text-yellow-500 tracking-wider">
                    SHAPES GYM
                </h2>

                {/* Tagline */}
                <p className="text-gray-400 mt-4 text-lg">
                    Legacy of Strength Since 2013
                </p>

                {/* Divider */}
                <div className="w-20 h-[2px] bg-yellow-500 mx-auto my-6 opacity-50"></div>

                {/* Copyright */}
                <p className="text-gray-500 text-sm">
                    © 2026 Shapes Gym Tirupati. All Rights Reserved.
                </p>

            </div>
        </footer>
    );
}

export default Footer;