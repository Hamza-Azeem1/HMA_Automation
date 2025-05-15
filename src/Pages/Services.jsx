import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
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
      title: "Automated Doors & Gates",
      image:
        "https://images.unsplash.com/photo-1582563811089-e412366f6bc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        "Sliding Doors",
        "Swing Doors",
        "Sliding Gates",
        "Swing Gates",
        "Roller Shutters",
        "Industrial PVC Shutters",
      ],
    },
    {
      title: "Traffic Control Systems",
      image:
        "https://plus.unsplash.com/premium_photo-1744914809901-d99e93c85e5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        "Boom Barriers",
        "Tyre Killers",
        "Road Blockers",
        "Bollards",
        "Traffic Lights",
        "Walkthrough Gates",
      ],
    },
    {
      title: "Security Solutions",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070",
      items: [
        "CCTV Systems",
        "Access Control",
        "Biometric Systems",
        "Fire Alarm Systems",
        "Electric Fences",
        "PA Systems",
      ],
    },
    {
      title: "Energy & Lighting",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072",
      items: [
        "Solar Systems",
        "Street Lights",
        "Air Curtains",
        "LED Solutions",
        "Energy Management",
      ],
    },
    {
      title: "Industrial Automation",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
      items: [
        "High-Speed Doors",
        "Loading Systems",
        "Conveyor Solutions",
        "Custom Fabrication",
      ],
    },
    {
      title: "Specialty Systems",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070",
      items: [
        "Lifts/Elevators",
        "Kitchen Equipment",
        "Computer Systems",
        "Awnings",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      {/* Hero Header */}
      <section className="relative px-4 py-32 overflow-hidden text-white bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073')] bg-cover bg-center"></div>
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
            Our <span className="text-blue-400">Automation</span> Solutions
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto mb-8 text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive range of premium automation products for every need
          </motion.p>
        </motion.div>
      </section>

      {/* Product Categories */}
      <section className="px-4 py-20 mx-auto max-w-7xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Product Range
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our comprehensive automation solutions
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true }}
        >
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden shadow-lg group rounded-xl h-80"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 to-black/30"></div>
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="relative z-20 flex flex-col justify-end h-full p-6">
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.slice(0, 4).map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-white/90">
                      • {item}
                    </li>
                  ))}
                  {category.items.length > 4 && (
                    <li className="text-sm text-white/70">
                      + {category.items.length - 4} more
                    </li>
                  )}
                </ul>
                <Link
                  to={`/products/${category.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="inline-block mt-4 font-medium text-white transition hover:text-blue-300"
                >
                  View All →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Why Choose Our Solutions?
              </h2>
              <p className="mb-8 text-lg text-blue-200">
                We combine cutting-edge technology with reliable engineering
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 bg-blue-600 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
                    <h3 className="mb-2 text-xl font-semibold">
                      Military-Grade Components
                    </h3>
                    <p className="text-blue-100">
                      Built to withstand extreme conditions with premium
                      materials
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 mr-4 bg-blue-600 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
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
                    <h3 className="mb-2 text-xl font-semibold">
                      Smart Integration
                    </h3>
                    <p className="text-blue-100">
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
              className="relative"
            >
              <div className="p-1 overflow-hidden border bg-white/10 rounded-xl border-white/20 backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070"
                  alt="Automation Technology"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute p-4 bg-blue-600 rounded-lg shadow-lg -bottom-6 -left-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2"
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
      <section className="px-4 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Need Custom Automation Solutions?
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto mb-10 text-lg text-gray-700"
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
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-4 font-semibold text-white transition-all transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1"
            >
              Request Consultation
            </Link>
            <Link
              to="/products"
              className="inline-block px-8 py-4 font-semibold text-blue-600 transition-all transform border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:shadow-lg hover:-translate-y-1"
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
