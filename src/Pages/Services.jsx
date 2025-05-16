import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Inside your component

const Services = () => {
  const navigate = useNavigate();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const productCategories = [
    {
      id: "doors-gates",
      title: "Automated Doors & Gates",
      image:
        "https://images.unsplash.com/photo-1582563811089-e412366f6bc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        "Automatic Sliding Doors",
        "Automatic Swing Doors",
        "Automatic Sliding Gates",
        "Automatic Swing Gates",
        "Automatic Roller Shutters",
        "Automatic Industrial High speed PVC Shutters",
      ],
    },
    {
      id: "traffic-control",
      title: "Traffic & Perimeter Control",
      image:
        "https://plus.unsplash.com/premium_photo-1744914809901-d99e93c85e5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        "Tyre Killer",
        "Speed Breaker",
        "Road Blocker",
        "Bollards",
        "Automatic Boom Barriers",
        "Traffic Lights",
      ],
    },
    {
      id: "access-control",
      title: "Access Control Systems",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
      items: [
        "RFID Access Systems",
        "Keypad Entry Systems",
        "Biometric Access Control",
        "Mobile Application Control",
      ],
    },
    {
      id: "surveillance",
      title: "Surveillance & Safety",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      items: [
        "CCTV/Video Surveillance",
        "Fire Alarm Systems",
        "Fire Rated Doors (UL Listed)",
        "Public Address (PA) Systems",
      ],
    },
    {
      id: "energy-lighting",
      title: "Energy & Lighting",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
      items: [
        "Solar Power Systems",
        "Street Lights",
        "Air Curtains (Black/White/Custom)",
      ],
    },
    {
      id: "specialty-systems",
      title: "Specialty Systems",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070",
      items: [
        "Lifts/Elevators",
        "Restaurant & Kitchen Equipment",
        "Computer & Laptop Accessories",
      ],
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden text-gray-800 bg-gray-50">
      {/* Hero Header */}
      <section className="relative w-full px-4 py-24 overflow-hidden text-white sm:py-32 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073')] bg-cover bg-center"></div>
        </div>

        <motion.div
          className="relative z-10 w-full max-w-6xl px-4 mx-auto text-center sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-blue-400">Automation</span> Solutions
          </motion.h1>
          <motion.p
            className="w-full max-w-3xl mx-auto mb-6 text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive range of premium automation products for every need
          </motion.p>
        </motion.div>
      </section>

      {/* Product Categories */}
      <section className="w-full px-4 py-16 mx-auto sm:py-20 max-w-7xl sm:px-6">
        <motion.div
          className="w-full mb-12 text-center sm:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
            Our Product Range
          </h2>
          <p className="w-full max-w-2xl mx-auto text-gray-600">
            Explore our comprehensive automation solutions
          </p>
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {productCategories.map((category) => (
            <motion.div
              key={category.id}
              className="relative w-full overflow-hidden shadow-lg group rounded-xl aspect-[4/5] sm:aspect-[3/4]"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-black/30"></div>
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="relative z-20 flex flex-col justify-end h-full p-4 sm:p-6">
                <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl">
                  {category.title}
                </h3>
                <ul className="space-y-1 sm:space-y-2">
                  {category.items.slice(0, 4).map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-xs sm:text-sm text-white/90"
                    >
                      • {item}
                    </li>
                  ))}
                  {category.items.length > 4 && (
                    <li className="text-xs sm:text-sm text-white/70">
                      + {category.items.length - 4} more
                    </li>
                  )}
                </ul>
                <button
                  onClick={() =>
                    navigate("/product", {
                      state: { preselectedCategory: category.id },
                    })
                  }
                  className="inline-block mt-3 text-sm font-medium text-white transition sm:mt-4 sm:text-base hover:text-blue-300"
                >
                  View All →
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Technology Showcase */}
      <section className="w-full px-4 py-16 text-white sm:py-20 bg-gradient-to-r from-gray-900 to-blue-900 sm:px-6">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col w-full gap-8 sm:gap-12 lg:flex-row">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
                Why Choose Our Solutions?
              </h2>
              <p className="mb-6 text-blue-200 sm:text-lg">
                We combine cutting-edge technology with reliable engineering
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 mr-3 bg-blue-600 rounded-lg sm:p-3 sm:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold sm:text-xl">
                      Military-Grade Components
                    </h3>
                    <p className="text-sm text-blue-100 sm:text-base">
                      Built to withstand extreme conditions with premium
                      materials
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 mr-3 bg-blue-600 rounded-lg sm:p-3 sm:mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold sm:text-xl">
                      Smart Integration
                    </h3>
                    <p className="text-sm text-blue-100 sm:text-base">
                      Seamless connectivity with existing systems and IoT
                      platforms
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
              className="relative w-full mt-8 lg:mt-0 lg:w-1/2"
            >
              <div className="overflow-hidden border bg-white/5 border-white/10 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070"
                  alt="Automation Technology"
                  className="object-cover w-full h-auto"
                  loading="lazy"
                />
              </div>
              <div className="absolute p-2 bg-blue-600 rounded-lg shadow-lg sm:p-4 -bottom-4 -left-4 sm:-bottom-6 sm:-left-6">
                <div className="flex items-center text-xs sm:text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 mr-1 sm:w-6 sm:h-6 sm:mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-bold">24/7</span>
                  <span className="ml-1">Support Available</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 py-16 bg-white sm:py-20 sm:px-6">
        <div className="w-full max-w-4xl mx-auto text-center">
          <motion.h2
            className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Need Custom Automation Solutions?
          </motion.h2>
          <motion.p
            className="w-full max-w-2xl mx-auto mb-8 text-gray-700 sm:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our team specializes in tailored systems for unique requirements
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center w-full gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-block w-full px-6 py-3 font-semibold text-white transition-all transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 sm:w-auto sm:px-8 sm:py-4"
            >
              Request Consultation
            </Link>
            <Link
              to="/products"
              className="inline-block w-full px-6 py-3 font-semibold text-blue-600 transition-all transform border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:shadow-lg hover:-translate-y-1 sm:w-auto sm:px-8 sm:py-4"
            >
              View Full Catalog
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
