import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");
    const [showProductDropdown, setShowProductDropdown] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    const productCategories = [
        {
            name: "Automated Doors & Gates",
            products: [
                "Automatic Sliding Doors",
                "Automatic Swing Doors",
                "Automatic Sliding Gates",
                "Automatic Swing Gates",
                "Automatic Roller Shutters"
            ]
        },
        {
            name: "Traffic Control Systems",
            products: [
                "Boom Barriers",
                "Tyre Killers",
                "Road Blockers",
                "Bollards",
                "Traffic Lights"
            ]
        },
        {
            name: "Security Solutions",
            products: [
                "CCTV Systems",
                "Access Control",
                "Biometric Systems",
                "Fire Alarm Systems",
                "Electric Fences"
            ]
        },
        {
            name: "Energy & Lighting",
            products: [
                "Solar Systems",
                "Street Lights",
                "Air Curtains",
                "LED Solutions"
            ]
        }
    ];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setSelectedProduct("");
        setShowCategoryDropdown(false);
    };

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
        setShowProductDropdown(false);
    };

    return (
        <motion.div
            className="min-h-screen px-6 py-16 pt-24 text-gray-100 bg-gradient-to-br from-gray-900 to-blue-900"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header */}
            <div className="mb-12 text-center">
                <motion.h1
                    className="mb-4 text-4xl font-extrabold text-white md:text-5xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Request a Quote
                </motion.h1>
                <p className="max-w-xl mx-auto text-lg text-blue-200">
                    Get customized pricing for your automation project
                </p>
            </div>

            {/* Main Content */}
            <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2">
                {/* Quote Form */}
                <motion.form
                    className="p-8 space-y-6 border shadow-xl bg-white/10 backdrop-blur-sm rounded-xl border-white/20"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-semibold text-blue-200">First Name</label>
                            <input
                                type="text"
                                placeholder="John"
                                className="w-full px-4 py-3 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-semibold text-blue-200">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                className="w-full px-4 py-3 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-semibold text-blue-200">Email Address</label>
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-semibold text-blue-200">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="+92 300 1234567"
                            className="w-full px-4 py-3 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="relative">
                        <label className="block mb-2 text-sm font-semibold text-blue-200">Product Category</label>
                        <div 
                            className="flex items-center justify-between w-full px-4 py-3 border rounded-lg cursor-pointer bg-white/5 border-white/20"
                            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                        >
                            <span className={selectedCategory ? "text-white" : "text-white/50"}>
                                {selectedCategory || "Select a category"}
                            </span>
                            <FaChevronDown className={`transition ${showCategoryDropdown ? "transform rotate-180" : ""}`} />
                        </div>
                        {showCategoryDropdown && (
                            <div className="absolute z-10 w-full mt-1 overflow-hidden bg-gray-800 border rounded-lg shadow-lg border-white/10">
                                {productCategories.map((category, index) => (
                                    <div 
                                        key={index}
                                        className="px-4 py-3 transition cursor-pointer hover:bg-blue-600"
                                        onClick={() => handleCategorySelect(category.name)}
                                    >
                                        {category.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {selectedCategory && (
                        <div className="relative">
                            <label className="block mb-2 text-sm font-semibold text-blue-200">Product</label>
                            <div 
                                className="flex items-center justify-between w-full px-4 py-3 border rounded-lg cursor-pointer bg-white/5 border-white/20"
                                onClick={() => setShowProductDropdown(!showProductDropdown)}
                            >
                                <span className={selectedProduct ? "text-white" : "text-white/50"}>
                                    {selectedProduct || "Select a product"}
                                </span>
                                <FaChevronDown className={`transition ${showProductDropdown ? "transform rotate-180" : ""}`} />
                            </div>
                            {showProductDropdown && (
                                <div className="absolute z-10 w-full mt-1 overflow-hidden bg-gray-800 border rounded-lg shadow-lg border-white/10">
                                    {productCategories.find(cat => cat.name === selectedCategory)?.products.map((product, index) => (
                                        <div 
                                            key={index}
                                            className="px-4 py-3 transition cursor-pointer hover:bg-blue-600"
                                            onClick={() => handleProductSelect(product)}
                                        >
                                            {product}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {selectedProduct && (
                        <>
                            <div>
                                <label className="block mb-2 text-sm font-semibold text-blue-200">Installation Date Preference</label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        className="w-full px-4 py-3 pr-10 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <FaCalendarAlt className="absolute right-3 top-3.5 text-white/50" />
                                </div>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-semibold text-blue-200">Project Details</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your project requirements, dimensions, and any special requests..."
                                    className="w-full px-4 py-3 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                            </div>
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full px-6 py-4 mt-6 font-semibold text-white transition-all transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
                    >
                        Get Your Custom Quote
                    </button>
                </motion.form>

                {/* Contact Info */}
                <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.div 
                        className="flex items-start p-6 space-x-6 transition border shadow-lg bg-white/10 backdrop-blur-sm rounded-xl border-white/20 hover:border-blue-500"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex-shrink-0 p-3 bg-blue-600 rounded-lg">
                            <FaPhoneAlt className="text-xl text-white" />
                        </div>
                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-white">Phone Support</h4>
                            <div className="space-y-1">
                                <p className="text-blue-200">0324 6953254</p>
                                <p className="text-blue-200">0329 1667476</p>
                            </div>
                            <p className="mt-2 text-sm text-white/70">Available 9:00 AM - 7:00 PM, 7 days a week</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex items-start p-6 space-x-6 transition border shadow-lg bg-white/10 backdrop-blur-sm rounded-xl border-white/20 hover:border-blue-500"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex-shrink-0 p-3 bg-blue-600 rounded-lg">
                            <FaEnvelope className="text-xl text-white" />
                        </div>
                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-white">Email Us</h4>
                            <p className="text-blue-200">hmabuildautomatesolution@gmail.com</p>
                            <p className="mt-2 text-sm text-white/70">Typically respond within 24 hours</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex items-start p-6 space-x-6 transition border shadow-lg bg-white/10 backdrop-blur-sm rounded-xl border-white/20 hover:border-blue-500"
                        whileHover={{ y: -5 }}
                    >
                        <div className="flex-shrink-0 p-3 bg-blue-600 rounded-lg">
                            <FaMapMarkerAlt className="text-xl text-white" />
                        </div>
                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-white">Our Location</h4>
                            <p className="text-blue-200">Lahore, Pakistan</p>
                            <p className="mt-2 text-sm text-white/70">Serving clients nationwide with regional offices in major cities</p>
                        </div>
                    </motion.div>

                    <div className="p-6 border border-dashed bg-white/5 rounded-xl border-white/20">
                        <h4 className="mb-3 text-lg font-semibold text-white">Why Get a Quote?</h4>
                        <ul className="space-y-2 text-sm text-blue-200">
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                                <span>Personalized pricing for your specific needs</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                                <span>No obligation estimate</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                                <span>Includes professional site survey (where applicable)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 mt-2 mr-3 bg-blue-400 rounded-full"></span>
                                <span>Valid for 30 days</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;