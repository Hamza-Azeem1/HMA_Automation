import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <motion.div
            className="min-h-screen flex items-center justify-center bg-gray-100 p-6 text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-md">
                <motion.h1
                    className="text-7xl font-extrabold text-blue-600 mb-4"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    404
                </motion.h1>
                <p className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</p>
                <p className="text-gray-600 mb-6">
                    Sorry! The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
                >
                    Go Back Home
                </Link>
            </div>
        </motion.div>
    );
};

export default NotFound;
