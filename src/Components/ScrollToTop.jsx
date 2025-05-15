import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Scroll to the top when the path changes
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    // Show or hide the scroll-to-top button based on scroll position
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll the page to the top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    // Listen to scroll events
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <div>
            {/* Scroll to top button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 bg-blue-600 text-white p-4 text-2xl rounded-full shadow-xl hover:bg-blue-700 transition-all transform hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <FaArrowUpLong size={25} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
