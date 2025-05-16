import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="pt-16 pb-8 text-gray-300 bg-gradient-to-br from-gray-900 to-blue-900">
            <div className="grid grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-4">
                {/* Brand / About */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Link to="/" className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-white">HMA Build & Automation</span>
                    </Link>
                    <p className="mb-4 text-sm">
                        Pioneering automated door and access solutions with cutting-edge technology for homes and industries.
                    </p>
                    <div className="flex gap-4">
                        <motion.a 
                            href="#" 
                            className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-white/10 hover:bg-blue-600"
                            whileHover={{ y: -3 }}
                        >
                            <FaFacebookF className="text-lg" />
                        </motion.a>
                        <motion.a 
                            href="#" 
                            className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-white/10 hover:bg-blue-600"
                            whileHover={{ y: -3 }}
                        >
                            <FaInstagram className="text-lg" />
                        </motion.a>
                        <motion.a 
                            href="#" 
                            className="flex items-center justify-center w-10 h-10 transition-all rounded-full bg-white/10 hover:bg-blue-600"
                            whileHover={{ y: -3 }}
                        >
                            <FaLinkedinIn className="text-lg" />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="flex items-center mb-5 text-lg font-semibold text-white">
                        <span className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                        Quick Links
                    </h3>
                    <ul className="space-y-3">
                        <motion.li whileHover={{ x: 5 }}>
                            <Link to="/" className="flex items-center text-sm transition-all hover:text-white">
                                <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full"></span>
                                Home
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ x: 5 }}>
                            <Link to="/about" className="flex items-center text-sm transition-all hover:text-white">
                                <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full"></span>
                                About Us
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ x: 5 }}>
                            <Link to="/product" className="flex items-center text-sm transition-all hover:text-white">
                                <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full"></span>
                                Products
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ x: 5 }}>
                            <Link to="/contact" className="flex items-center text-sm transition-all hover:text-white">
                                <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full"></span>
                                Contact
                            </Link>
                        </motion.li>
                    </ul>
                </motion.div>

                {/* Products */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h3 className="flex items-center mb-5 text-lg font-semibold text-white">
                        <span className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                        Our Products
                    </h3>
                    <ul className="space-y-3">
                        <motion.li whileHover={{ x: 5 }}>
                            <Link to="/products/sliding-doors" className="flex items-center text-sm transition-all hover:text-white">
                                <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full"></span>
                                Automatic Sliding Doors
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ x: 5 }}>
                            <Link to="/products/gate-automation" className="flex items-center text-sm transition-all hover:text-white">
                                <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full"></span>
                                Smart Gate Automation
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ x: 5 }}>
                            <Link to="/products/industrial" className="flex items-center text-sm transition-all hover:text-white">
                                <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full"></span>
                                Industrial Solutions
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ x: 5 }}>
                            <Link to="/products/access-control" className="flex items-center text-sm transition-all hover:text-white">
                                <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full"></span>
                                Access Control Systems
                            </Link>
                        </motion.li>
                    </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <h3 className="flex items-center mb-5 text-lg font-semibold text-white">
                        <span className="w-3 h-3 mr-2 bg-blue-500 rounded-full"></span>
                        Contact Us
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <div className="p-2 mr-3 bg-blue-600 rounded-full">
                                <FaEnvelope className="text-sm" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Email</p>
                                <a href="mailto:hmabuildautomatesolution@gmail.com" className="text-sm transition hover:text-white">
                                    hmabuildautomatesolution@gmail.com
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="p-2 mr-3 bg-blue-600 rounded-full">
                                <FaPhoneAlt className="text-sm" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Phone</p>
                                <div className="space-y-1">
                                    <a href="tel:03246953254" className="block text-sm transition hover:text-white">
                                        0324 6953254
                                    </a>
                                    <a href="tel:03291667476" className="block text-sm transition hover:text-white">
                                        0329 1667476
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <div className="p-2 mr-3 bg-blue-600 rounded-full">
                                <FaMapMarkerAlt className="text-sm" />
                            </div>
                            <div>
                                <p className="text-sm font-medium">Address</p>
                                <p className="text-sm">Lahore, Pakistan</p>
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </div>

            <div className="px-4 mx-auto max-w-7xl">
                <div className="pt-6 mt-12 border-t border-white/10">
                    <div className="text-sm text-center text-gray-400">
                        © {new Date().getFullYear()} <span className="text-blue-400">HMA Build & Automation</span>. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;