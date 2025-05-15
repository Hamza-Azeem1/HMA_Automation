import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaDoorOpen, FaShieldAlt, FaBolt, FaCogs, FaRobot, FaChartLine } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { MdPrecisionManufacturing, MdSupportAgent } from "react-icons/md";

const Home = () => {
    return (
        <div className="min-h-screen text-gray-800 bg-gray-50">
            {/* Hero Section */}
            <section className="relative px-4 py-32 overflow-hidden text-white bg-gradient-to-br from-gray-900 to-blue-900">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070')] bg-cover bg-center"></div>
                </div>
                
                <div className="relative z-10 max-w-6xl mx-auto text-center">
                    <motion.h1
                        className="mb-6 text-4xl font-bold md:text-6xl"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-400">Smart</span> Automated Solutions <br />by <span className="text-yellow-400">HMA Build & Automation</span>
                    </motion.h1>
                    <motion.p
                        className="max-w-3xl mx-auto mb-10 text-lg md:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Cutting-edge automatic doors and access systems engineered for security, convenience, and futuristic living.
                    </motion.p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            to="/products"
                            className="inline-block px-8 py-4 font-semibold text-white transition-all transform bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-xl hover:-translate-y-1"
                        >
                            View Our Products
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 font-semibold text-blue-400 transition-all transform border-2 border-blue-400 rounded-lg shadow-lg hover:bg-blue-400 hover:text-white hover:shadow-xl hover:-translate-y-1"
                        >
                            Get a Free Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="px-4 py-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Premium Automation Solutions</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">Innovative products designed for seamless access control and modern living</p>
                    </div>
                    
                    <div className="grid gap-8 md:grid-cols-3">
                        <motion.div 
                            className="relative p-8 overflow-hidden transition-all border border-gray-200 bg-gray-50 rounded-xl hover:border-blue-400 group"
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute text-blue-100 transition -right-10 -top-10 text-9xl opacity-20 group-hover:opacity-30">
                                <FaDoorOpen />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-16 h-16 mb-6 text-blue-600 bg-blue-100 rounded-lg">
                                    <FaDoorOpen className="text-2xl" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">Automatic Sliding Doors</h3>
                                <p className="mb-6 text-gray-600">Sleek, energy-efficient sliding doors with motion sensors and smart controls for commercial and residential spaces.</p>
                                <Link to="/products/sliding-doors" className="flex items-center font-medium text-blue-600 transition group-hover:text-blue-800">
                                    Explore <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="relative p-8 overflow-hidden transition-all border border-gray-200 bg-gray-50 rounded-xl hover:border-blue-400 group"
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute text-blue-100 transition -right-10 -top-10 text-9xl opacity-20 group-hover:opacity-30">
                                <FaRobot />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-16 h-16 mb-6 text-blue-600 bg-blue-100 rounded-lg">
                                    <FaRobot className="text-2xl" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">Smart Gate Automation</h3>
                                <p className="mb-6 text-gray-600">Advanced swing and sliding gate systems with biometric access, remote control, and AI-powered security features.</p>
                                <Link to="/products/gate-automation" className="flex items-center font-medium text-blue-600 transition group-hover:text-blue-800">
                                    Explore <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="relative p-8 overflow-hidden transition-all border border-gray-200 bg-gray-50 rounded-xl hover:border-blue-400 group"
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute text-blue-100 transition -right-10 -top-10 text-9xl opacity-20 group-hover:opacity-30">
                                <IoMdSettings />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-16 h-16 mb-6 text-blue-600 bg-blue-100 rounded-lg">
                                    <IoMdSettings className="text-2xl" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">Industrial Automation</h3>
                                <p className="mb-6 text-gray-600">Heavy-duty automatic doors and access systems for warehouses, factories, and industrial facilities.</p>
                                <Link to="/products/industrial" className="flex items-center font-medium text-blue-600 transition group-hover:text-blue-800">
                                    Explore <span className="ml-2">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            to="/products"
                            className="inline-block px-8 py-3 font-semibold text-white transition-all bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl"
                        >
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technology Showcase */}
            <section className="px-4 py-20 text-white bg-gradient-to-r from-gray-900 to-blue-900">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Advanced Access Technology</h2>
                        <p className="max-w-2xl mx-auto text-blue-200">We integrate the latest innovations for seamless, secure automation</p>
                    </div>

                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <motion.div 
                                className="p-8 border bg-white/10 rounded-xl border-white/20 backdrop-blur-sm"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-start mb-6">
                                    <div className="p-3 mr-4 bg-blue-500 rounded-lg">
                                        <FaShieldAlt className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">Biometric Security</h3>
                                        <p className="text-blue-100">Fingerprint and facial recognition technology integrated with our access systems for maximum security.</p>
                                    </div>
                                </div>
                                <div className="flex items-start mb-6">
                                    <div className="p-3 mr-4 bg-blue-500 rounded-lg">
                                        <FaBolt className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">Smart Connectivity</h3>
                                        <p className="text-blue-100">Control and monitor your automated systems from anywhere using our mobile app and cloud platform.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="p-3 mr-4 bg-blue-500 rounded-lg">
                                        <MdPrecisionManufacturing className="text-2xl" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">Precision Engineering</h3>
                                        <p className="text-blue-100">Military-grade components and rigorous testing ensure reliability in all conditions.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div 
                            className="relative"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="overflow-hidden border bg-white/5 border-white/10 rounded-xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070" 
                                    alt="Smart door technology"
                                    className="object-cover w-full h-auto"
                                />
                            </div>
                            <div className="absolute p-4 bg-blue-600 rounded-lg shadow-lg -bottom-6 -left-6">
                                <div className="flex items-center">
                                    <FaChartLine className="mr-2 text-2xl" />
                                    <span className="font-bold">+87%</span>
                                    <span className="ml-1 text-sm">Customer Satisfaction</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="px-4 py-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why HMA Build & Automation?</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">We're redefining access automation with innovation and excellence</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <motion.div 
                            className="p-8 transition-all bg-gray-50 rounded-xl hover:shadow-lg"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center justify-center mx-auto mb-6 text-blue-600 bg-blue-100 rounded-full w-14 h-14">
                                <MdSupportAgent className="text-2xl" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-center">24/7 Support</h3>
                            <p className="text-center text-gray-600">Our dedicated support team is always available to ensure your systems run smoothly.</p>
                        </motion.div>

                        <motion.div 
                            className="p-8 transition-all bg-gray-50 rounded-xl hover:shadow-lg"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center justify-center mx-auto mb-6 text-blue-600 bg-blue-100 rounded-full w-14 h-14">
                                <FaCogs className="text-2xl" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-center">Custom Solutions</h3>
                            <p className="text-center text-gray-600">Tailored automation systems designed for your specific needs and space requirements.</p>
                        </motion.div>

                        <motion.div 
                            className="p-8 transition-all bg-gray-50 rounded-xl hover:shadow-lg"
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center justify-center mx-auto mb-6 text-blue-600 bg-blue-100 rounded-full w-14 h-14">
                                <FaShieldAlt className="text-2xl" />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-center">5-Year Warranty</h3>
                            <p className="text-center text-gray-600">Industry-leading warranty coverage on all our products and installations.</p>
                        </motion.div>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            to="/about"
                            className="inline-block px-8 py-3 font-semibold text-blue-600 transition-all border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:shadow-lg"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 py-20 text-white bg-gradient-to-r from-blue-600 to-blue-800">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Automate Your Space?</h2>
                    <p className="mb-10 text-xl">Get a free consultation and quote for your custom automation solution today.</p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 font-semibold text-blue-600 transition-all transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1"
                        >
                            Contact Our Experts
                        </Link>
                        <Link
                            to="/products"
                            className="inline-block px-8 py-4 font-semibold text-white transition-all transform border-2 border-white rounded-lg shadow-lg hover:bg-white/10 hover:shadow-xl hover:-translate-y-1"
                        >
                            Browse Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;