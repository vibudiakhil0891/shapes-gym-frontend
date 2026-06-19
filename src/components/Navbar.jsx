import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                <div className="flex items-center gap-3 mr-auto">
                    <img
                        src="/images/logo.png"
                        alt="Shapes Gym"
                        className="h-14"
                    />

                    {/* <h1 className="text-4xl font-black tracking-[6px] bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 bg-clip-text text-transparent">
                        SHAPES GYM
                    </h1> */}
                </div>

                <ul className="hidden md:flex gap-8 text-white font-medium">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                <button
                    className="md:hidden text-yellow-500 text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-black text-white px-6 py-4 space-y-4">
                    <a href="#home" className="block">Home</a>
                    <a href="#about" className="block">About</a>
                    <a href="#services" className="block">Services</a>
                    <a href="#gallery" className="block">Gallery</a>
                    <a href="#contact" className="block">Contact</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;