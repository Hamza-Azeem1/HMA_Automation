import { useState, useRef, useEffect } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaCalendarAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const productCategories = [
  {
    name: "Automated Doors & Gates",
    products: [
      "Automatic Sliding Doors",
      "Automatic Swing Doors",
      "Automatic Sliding Gates",
      "Automatic Swing Gates",
      "Automatic Roller Shutters",
    ],
  },
  {
    name: "Traffic Control Systems",
    products: [
      "Boom Barriers",
      "Tyre Killers",
      "Road Blockers",
      "Bollards",
      "Traffic Lights",
    ],
  },
  {
    name: "Security Solutions",
    products: [
      "CCTV Systems",
      "Access Control",
      "Biometric Systems",
      "Fire Alarm Systems",
      "Electric Fences",
    ],
  },
  {
    name: "Energy & Lighting",
    products: [
      "Solar Systems",
      "Street Lights",
      "Air Curtains",
      "LED Solutions",
    ],
  },
];

const Contact = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    product: "",
    date: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const dateInputRef = useRef(null);
  const formRef = useRef(null);
  const today = new Date().toISOString().split("T")[0];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedProduct("");
    setFormData((prev) => ({ ...prev, category, product: "" }));
    setShowCategoryDropdown(false);
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setFormData((prev) => ({ ...prev, product }));
    setShowProductDropdown(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare the template parameters
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone,
      category: formData.category,
      product: formData.product,
      date: formData.date,
      details: formData.details,
      to_name: "HMA Build Automate Solution",
    };

    // Replace these with your actual EmailJS service ID, template ID, and public key
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitStatus("success");
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          category: "",
          product: "",
          date: "",
          details: "",
        });
        setSelectedCategory("");
        setSelectedProduct("");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <motion.div
      className="min-h-screen px-2 py-8 pt-20 text-gray-100 bg-gradient-to-br from-gray-900 to-blue-900 sm:px-4 md:px-6 md:py-16 md:pt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="mb-8 text-center md:mb-12">
        <motion.h1
          className="mb-3 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Request a Quote
        </motion.h1>
        <p className="max-w-xl mx-auto text-base text-blue-200 sm:text-lg">
          Get customized pricing for your automation project
        </p>
      </div>

      {/* Main Content */}
      <div className="grid max-w-4xl gap-8 mx-auto md:max-w-6xl md:grid-cols-2">
        {/* Quote Form */}
        <motion.form
          ref={formRef}
          className="p-4 space-y-5 border shadow-xl bg-white/10 backdrop-blur-sm rounded-xl border-white/20 sm:p-6 md:p-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
        >
          {submitStatus === "success" && (
            <div className="p-4 mb-4 text-green-100 bg-green-800 rounded-lg">
              Thank you! Your quote request has been submitted successfully.
              We'll contact you shortly.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 mb-4 text-red-100 bg-red-800 rounded-lg">
              Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-semibold text-blue-200 sm:mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-blue-200 sm:mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-blue-200 sm:mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-blue-200 sm:mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+92 300 1234567"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3"
              required
            />
          </div>

          <div className="relative">
            <label className="block mb-1 text-sm font-semibold text-blue-200 sm:mb-2">
              Product Category
            </label>
            <div
              className="flex items-center justify-between w-full px-3 py-2 border rounded-lg cursor-pointer bg-white/5 border-white/20 sm:px-4 sm:py-3"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              <span
                className={selectedCategory ? "text-white" : "text-white/50"}
              >
                {selectedCategory || "Select a category"}
              </span>
              <FaChevronDown
                className={`transition ${
                  showCategoryDropdown ? "transform rotate-180" : ""
                }`}
              />
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
              <label className="block mb-1 text-sm font-semibold text-blue-200 sm:mb-2">
                Product
              </label>
              <div
                className="flex items-center justify-between w-full px-3 py-2 border rounded-lg cursor-pointer bg-white/5 border-white/20 sm:px-4 sm:py-3"
                onClick={() => setShowProductDropdown(!showProductDropdown)}
              >
                <span
                  className={selectedProduct ? "text-white" : "text-white/50"}
                >
                  {selectedProduct || "Select a product"}
                </span>
                <FaChevronDown
                  className={`transition ${
                    showProductDropdown ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {showProductDropdown && (
                <div className="absolute z-10 w-full mt-1 overflow-hidden bg-gray-800 border rounded-lg shadow-lg border-white/10">
                  {productCategories
                    .find((cat) => cat.name === selectedCategory)
                    ?.products.map((product, index) => (
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
                <label className="block mb-1 text-sm font-semibold text-blue-200 sm:mb-2">
                  Installation Date Preference
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    ref={dateInputRef}
                    min={today}
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 pr-10 text-white transition border rounded-lg sm:px-4 sm:py-3 bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <FaCalendarAlt
                    className="absolute right-3 top-2.5 sm:top-3.5 text-white/50 cursor-pointer"
                    onClick={() => dateInputRef.current?.showPicker()}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm font-semibold text-blue-200 sm:mb-2">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  name="details"
                  placeholder="Tell us about your project requirements, dimensions, and any special requests..."
                  value={formData.details}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-white transition border rounded-lg bg-white/5 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:px-4 sm:py-3"
                  required
                ></textarea>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-4 py-3 mt-4 font-semibold text-white transition-all transform rounded-lg shadow-lg sm:px-6 sm:py-4 sm:mt-6 ${
              isSubmitting
                ? "bg-blue-800 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
            }`}
          >
            {isSubmitting ? "Sending..." : "Get Your Custom Quote"}
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="space-y-4 sm:space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="flex flex-col items-start p-4 space-y-3 transition border shadow-lg bg-white/10 backdrop-blur-sm rounded-xl border-white/20 hover:border-blue-500 sm:flex-row sm:space-x-6 sm:space-y-0 sm:p-6"
            whileHover={{ y: -5 }}
          >
            <div className="flex-shrink-0 p-3 mb-2 bg-blue-600 rounded-lg sm:mb-0">
              <FaPhoneAlt className="text-xl text-white" />
            </div>
            <div>
              <h4 className="mb-1 text-base font-semibold text-white sm:text-lg">
                Phone Support
              </h4>
              <div className="space-y-1">
                <p className="text-blue-200">0324 6953254</p>
                <p className="text-blue-200">0329 1667476</p>
              </div>
              <p className="mt-1 text-xs text-white/70 sm:mt-2 sm:text-sm">
                Available 9:00 AM - 7:00 PM, 7 days a week
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-start p-4 space-y-3 transition border shadow-lg bg-white/10 backdrop-blur-sm rounded-xl border-white/20 hover:border-blue-500 sm:flex-row sm:space-x-6 sm:space-y-0 sm:p-6"
            whileHover={{ y: -5 }}
          >
            <div className="flex-shrink-0 p-3 mb-2 bg-blue-600 rounded-lg sm:mb-0">
              <FaEnvelope className="text-xl text-white" />
            </div>
            <div>
              <h4 className="mb-1 text-base font-semibold text-white sm:text-lg">
                Email Us
              </h4>
              <p className="text-blue-200">
                hmabuildautomatesolution@gmail.com
              </p>
              <p className="mt-1 text-xs text-white/70 sm:mt-2 sm:text-sm">
                Typically respond within 24 hours
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-start p-4 space-y-3 transition border shadow-lg bg-white/10 backdrop-blur-sm rounded-xl border-white/20 hover:border-blue-500 sm:flex-row sm:space-x-6 sm:space-y-0 sm:p-6"
            whileHover={{ y: -5 }}
          >
            <div className="flex-shrink-0 p-3 mb-2 bg-blue-600 rounded-lg sm:mb-0">
              <FaMapMarkerAlt className="text-xl text-white" />
            </div>
            <div>
              <h4 className="mb-1 text-base font-semibold text-white sm:text-lg">
                Our Location
              </h4>
              <p className="text-blue-200">Lahore, Pakistan</p>
              <p className="mt-1 text-xs text-white/70 sm:mt-2 sm:text-sm">
                Serving clients nationwide with regional offices in major cities
              </p>
            </div>
          </motion.div>

          <div className="p-4 border border-dashed bg-white/5 rounded-xl border-white/20 sm:p-6">
            <h4 className="mb-2 text-base font-semibold text-white sm:text-lg">
              Why Get a Quote?
            </h4>
            <ul className="space-y-2 text-xs text-blue-200 sm:text-sm">
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
                <span>
                  Includes professional site survey (where applicable)
                </span>
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
