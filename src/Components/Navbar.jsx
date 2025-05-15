import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    const linkStyle =
        "px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group";
    const activeStyle = "text-blue-600 font-medium";

    const mobileMenuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    };

    const mobileLinkVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <motion.img
                            src="/Logo.jpg"
                            alt="HMA Builders"
                            className="object-contain w-auto h-16"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="items-center hidden gap-2 md:flex">
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

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={toggleMenu}
                            className="p-2 text-2xl text-blue-600 focus:outline-none"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
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
                        className="bg-white shadow-lg md:hidden"
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
                                        `px-6 py-4 block text-lg ${
                                            isActive ? activeStyle : "text-gray-800"
                                        } border-b border-gray-100`
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
    );
};

export default Navbar;
