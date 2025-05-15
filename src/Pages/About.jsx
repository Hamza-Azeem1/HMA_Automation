import { FaTools, FaUserShield, FaHandshake, FaLightbulb, FaChartLine, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen overflow-hidden text-gray-800 bg-gray-50">
            {/* Hero Header */}
            <section className="relative px-4 py-32 overflow-hidden text-white bg-gradient-to-br from-gray-900 to-blue-900">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070')] bg-cover bg-center"></div>
                </div>
                
                <motion.div 
                    className="relative z-10 max-w-6xl mx-auto text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="mb-6 text-4xl font-bold md:text-6xl"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Building <span className="text-blue-400">Smart</span> Futures
                    </motion.h1>
                    <motion.p
                        className="max-w-3xl mx-auto mb-8 text-lg md:text-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Pioneering automation solutions that redefine security, convenience, and modern living in Pakistan.
                    </motion.p>
                </motion.div>
            </section>

            {/* Company Story */}
            <section className="px-4 py-20 mx-auto max-w-7xl">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        variants={staggerContainer}
                        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    >
                        <motion.h2 
                            className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
                            variants={fadeInUp}
                        >
                            Our Journey in Automation
                        </motion.h2>
                        <motion.p 
                            className="mb-6 text-lg leading-relaxed text-gray-700"
                            variants={fadeInUp}
                        >
                            Founded with a vision to transform access control in Pakistan, HMA Build & Automation has grown from a small workshop to a leading provider of cutting-edge automated solutions.
                        </motion.p>
                        <motion.p 
                            className="mb-8 text-lg leading-relaxed text-gray-700"
                            variants={fadeInUp}
                        >
                            We combine German engineering precision with local market understanding to deliver systems that stand the test of time in Pakistan's challenging climate and usage conditions.
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full">
                                    Since 2015
                                </div>
                                <div className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-full">
                                    500+ Installations
                                </div>
                                <div className="px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-full">
                                    98% Satisfaction
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="p-2 bg-white shadow-xl rounded-xl">
                            <img 
                                src="https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070" 
                                alt="HMA Build & Automation Team"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                        <div className="absolute p-4 text-white bg-blue-600 rounded-lg shadow-lg -bottom-6 -right-6">
                            <div className="flex items-center">
                                <FaCogs className="mr-2 text-2xl" />
                                <span className="font-bold">15+</span>
                                <span className="ml-1">Years Combined Experience</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="px-4 py-20 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="mb-16 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Core Principles</h2>
                        <p className="max-w-2xl mx-auto text-gray-600">
                            The foundation of everything we do at HMA Build & Automation
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <motion.div 
                            className="relative p-8 overflow-hidden transition-all bg-gray-50 rounded-xl hover:shadow-lg group"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute text-blue-100 transition -right-10 -top-10 text-9xl opacity-20 group-hover:opacity-30">
                                <FaUserShield />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-16 h-16 mb-6 text-blue-600 bg-blue-100 rounded-lg">
                                    <FaUserShield className="text-2xl" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">Reliability First</h3>
                                <p className="text-gray-600">
                                    We source only the most durable components and rigorously test every system before installation to ensure years of trouble-free operation.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="relative p-8 overflow-hidden transition-all bg-gray-50 rounded-xl hover:shadow-lg group"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute text-blue-100 transition -right-10 -top-10 text-9xl opacity-20 group-hover:opacity-30">
                                <FaLightbulb />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-16 h-16 mb-6 text-blue-600 bg-blue-100 rounded-lg">
                                    <FaLightbulb className="text-2xl" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">Smart Innovation</h3>
                                <p className="text-gray-600">
                                    We continuously integrate the latest technologies like IoT connectivity and biometric access to keep your systems future-ready.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="relative p-8 overflow-hidden transition-all bg-gray-50 rounded-xl hover:shadow-lg group"
                            initial="hidden"
                            whileInView="visible"
                            variants={fadeInUp}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="absolute text-blue-100 transition -right-10 -top-10 text-9xl opacity-20 group-hover:opacity-30">
                                <FaHandshake />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center justify-center w-16 h-16 mb-6 text-blue-600 bg-blue-100 rounded-lg">
                                    <FaHandshake className="text-2xl" />
                                </div>
                                <h3 className="mb-3 text-xl font-semibold">Customer Partnership</h3>
                                <p className="text-gray-600">
                                    From initial consultation to after-sales support, we treat every client as a long-term partner in their automation journey.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technology Showcase */}
            <section className="px-4 py-20 text-white bg-gradient-to-r from-gray-900 to-blue-900">
                <div className="max-w-6xl mx-auto">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Technology Edge</h2>
                            <p className="mb-8 text-lg text-blue-200">
                                We combine global innovations with local engineering expertise to deliver automation solutions perfectly adapted for Pakistan's needs.
                            </p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-3 mr-4 bg-blue-600 rounded-lg">
                                        <FaTools className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">Military-Grade Components</h3>
                                        <p className="text-blue-100">
                                            Our systems use industrial-grade motors and controllers that withstand extreme weather and heavy usage.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 p-3 mr-4 bg-blue-600 rounded-lg">
                                        <FaChartLine className="text-xl" />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">Energy Efficient</h3>
                                        <p className="text-blue-100">
                                            Smart power management reduces electricity consumption by up to 40% compared to conventional systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="p-1 overflow-hidden border bg-white/10 rounded-xl border-white/20 backdrop-blur-sm">
                                <img 
                                    src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070" 
                                    alt="Automation Technology"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                            {!isMobile && (
                                <div className="absolute p-4 bg-blue-600 border rounded-lg shadow-lg -bottom-8 -left-8 border-white/10">
                                    <div className="flex items-center">
                                        <FaCogs className="mr-2 text-2xl" />
                                        <span className="font-bold">24/7</span>
                                        <span className="ml-1">Remote Monitoring Available</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team/Call to Action */}
            <section className="px-4 py-20 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Meet Our Expert Team
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto mb-10 text-lg text-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Certified automation specialists with extensive training in the latest access control technologies.
                    </motion.p>

                    <div className="grid gap-6 mb-12 sm:grid-cols-3">
                        {['Automation Engineers', 'Installation Experts', 'Support Staff'].map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-gray-50 rounded-xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-blue-600 bg-blue-100 rounded-full">
                                    <FaUserShield className="text-xl" />
                                </div>
                                <h3 className="font-semibold">{item}</h3>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/contact"
                            className="inline-block px-8 py-4 font-semibold text-white transition-all transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
                        >
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;