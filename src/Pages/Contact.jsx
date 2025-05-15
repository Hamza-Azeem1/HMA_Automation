import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            className="min-h-screen bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 px-6 py-16 text-gray-800 pt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Header */}
            <div className="text-center mb-12">
                <motion.h1
                    className="text-4xl md:text-5xl font-extrabold text-white mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Get In Touch
                </motion.h1>
                <p className="text-lg text-white max-w-xl mx-auto">
                    We would love to assist you with your automation needs! Drop us a message.
                </p>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {/* Contact Form */}
                <motion.form
                    className="bg-white p-8 rounded-3xl shadow-xl space-y-6"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Your message"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </motion.form>

                {/* Contact Info */}
                <motion.div
                    className="space-y-6 text-white"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="bg-white p-6 rounded-3xl shadow-lg flex items-start space-x-6">
                        <FaPhoneAlt className="text-blue-600 text-3xl" />
                        <div>
                            <h4 className="text-lg font-semibold mb-2 text-blue-600">Phone</h4>
                            <p className="text-gray-700">+92 300 1234567</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg flex items-start space-x-6">
                        <FaEnvelope className="text-blue-600 text-3xl" />
                        <div>
                            <h4 className="text-lg font-semibold mb-2 text-blue-600">Email</h4>
                            <p className="text-gray-700">info@autosecure.pk</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl shadow-lg flex items-start space-x-6">
                        <FaMapMarkerAlt className="text-blue-600 text-3xl" />
                        <div>
                            <h4 className="text-lg font-semibold mb-2 text-blue-600">Location</h4>
                            <p className="text-gray-700">Lahore, Pakistan</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Contact;
