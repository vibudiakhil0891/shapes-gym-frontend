import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
    return (
        <button
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            className="fixed bottom-24 right-6 bg-yellow-500 text-black p-3 rounded-full z-50"
        >
            <FaArrowUp />
        </button>
    );
}

export default BackToTop;