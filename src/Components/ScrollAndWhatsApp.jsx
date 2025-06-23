import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const ScrollAndWhatsApp = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const phoneNumber = '923291667476';
    const message = 'Hello, I would like to get more information about your services.';

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Scroll To Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed z-40 p-4 text-2xl text-white transition-all transform bg-blue-600 rounded-full shadow-xl bottom-10 right-10 hover:bg-blue-700 hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <FaArrowUpLong size={25} />
                </button>
            )}

            {/* WhatsApp Button with extra gap and animation */}
            <div
                className={`fixed ${isVisible ? 'bottom-32' : 'bottom-10'} right-10 z-50 transition-all duration-300`}
            >
                <button
                    onClick={handleWhatsAppClick}
                    className="p-4 text-white transition-all transform bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 animate-bounce"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp size={30} />
                </button>
            </div>
        </>
    );
};

export default ScrollAndWhatsApp;
