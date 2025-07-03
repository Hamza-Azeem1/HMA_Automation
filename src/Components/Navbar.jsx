import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
        { name: "Product", path: "/product" },
    ];

    const linkStyle =
        "px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group text-base sm:text-sm md:text-base";
    const activeStyle = "text-blue-600 font-semibold";

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.07, delayChildren: 0.1 },
        },
    };

    const mobileLinkVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <>
            {/* Navbar */}
            <motion.nav
                className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center shrink-0">
                            <motion.img
                                src="/Logo.png"
                                alt="HMA Builders"
                                className={`object-contain w-auto transition-all duration-300 ${
                                    scrolled 
                                        ? "h-14 sm:h-16 md:h-18 lg:h-20" 
                                        : "h-16 sm:h-18 md:h-22 lg:h-28"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            />
                        </Link>

                        {/* Desktop Menu */}
                        <div className="items-center hidden space-x-4 md:flex lg:space-x-6">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `${linkStyle} ${isActive ? activeStyle : ""}`
                                    }
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
                                </NavLink>
                            ))}
                        </div>

                        {/* Mobile Icon */}
                        <div className="flex items-center md:hidden">
                            <motion.button
                                onClick={toggleMenu}
                                className="text-2xl text-blue-600 focus:outline-none"
                                aria-label="Toggle Menu"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isOpen ? <FaTimes /> : <FaBars />}
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="w-full bg-white shadow-md md:hidden"
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={mobileMenuVariants}
                        >
                            {navLinks.map((link) => (
                                <motion.div key={link.name} variants={mobileLinkVariants}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `block px-6 py-4 text-base border-b border-gray-100 ${
                                                isActive ? activeStyle : "text-gray-800"
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Spacer to prevent content from being hidden behind navbar */}
            <div className="h-20"></div>
        </>
    );
};

export default Navbar;