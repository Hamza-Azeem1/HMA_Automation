import { useEffect, useState } from "react";
import {
  FaDoorOpen,
  FaTrafficLight,
  FaShieldAlt,
  FaSolarPanel,
  FaSearch,
} from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineElectricBolt } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const location = useLocation();
  useEffect(() => {
    if (location.state?.preselectedCategory) {
      setSelectedCategory(location.state.preselectedCategory);
    }
  }, [location.state]);

  const categories = [
    {
      id: "doors-gates",
      title: "Automated Doors & Gates",
      icon: <FaDoorOpen className="text-3xl" />,
      items: [
        "Automatic Sliding Doors",
        "Automatic Swing Doors",
        "Automatic Sliding Gates",
        "Automatic Swing Gates",
        "Automatic Roller Shutters",
        "Automatic Industrial High speed PVC Shutters",
        "Hinged Doors",
        "Automatic Awnings",
      ],
    },
    {
      id: "traffic-control",
      title: "Traffic & Perimeter Control",
      icon: <FaTrafficLight className="text-3xl" />,
      items: [
        "Tyre Killer",
        "Speed Breaker",
        "Road Blocker",
        "Bollards",
        "Automatic Boom Barriers",
        "Traffic Lights",
        "Walkthrough Gates",
        "Electric Fence",
      ],
    },
    {
      id: "access-control",
      title: "Access Control Systems",
      icon: <MdOutlineSecurity className="text-3xl" />,
      items: [
        "RFID Access Systems",
        "Keypad Entry Systems",
        "Biometric Access Control",
        "Mobile Application Control",
        "Integrated Security Systems",
      ],
    },
    {
      id: "surveillance",
      title: "Surveillance & Safety",
      icon: <FaShieldAlt className="text-3xl" />,
      items: [
        "CCTV/Video Surveillance",
        "Fire Alarm Systems",
        "Fire Rated Doors (UL Listed)",
        "Public Address (PA) Systems",
        "Voice Alarm Systems",
      ],
    },
    {
      id: "energy-lighting",
      title: "Energy & Lighting",
      icon: <FaSolarPanel className="text-3xl" />,
      items: [
        "Solar Power Systems",
        "Street Lights",
        "Air Curtains (Black/White/Custom)",
        "Energy Efficient Solutions",
      ],
    },
    {
      id: "specialty",
      title: "Specialty Systems",
      icon: <MdOutlineElectricBolt className="text-3xl" />,
      items: [
        "Lifts/Elevators",
        "Restaurant & Kitchen Equipment",
        "Computer & Laptop Accessories",
        "Printers",
        "Custom Fabrication",
      ],
    },
  ];

  const filteredCategories = categories.filter((category) => {
    if (!searchTerm) return true;
    return (
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.items.some((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  });

  const displayedCategory = selectedCategory
    ? categories.find((cat) => cat.id === selectedCategory)
    : null;

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="text-white shadow-lg bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container px-4 py-6 mx-auto">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">
            Security & Automation Solutions
          </h1>
          <p className="text-blue-100">
            Premium products for modern security and automation needs
          </p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col gap-4 mb-8 md:flex-row">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full py-3 pl-10 pr-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search products or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Mobile Category Dropdown Button */}
          <button
            className="flex items-center justify-between px-4 py-3 text-white bg-blue-600 rounded-lg md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span>
              {selectedCategory ? displayedCategory.title : "All Categories"}
            </span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Category Menu */}
        {isMobileMenuOpen && (
          <div className="mb-6 overflow-hidden bg-white rounded-lg shadow-md md:hidden">
            <div
              className={`px-4 py-3 cursor-pointer ${
                !selectedCategory
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => {
                setSelectedCategory(null);
                setIsMobileMenuOpen(false);
              }}
            >
              All Categories
            </div>
            {categories.map((category) => (
              <div
                key={category.id}
                className={`px-4 py-3 cursor-pointer ${
                  selectedCategory === category.id
                    ? "bg-blue-100 text-blue-700"
                    : "hover:bg-gray-50"
                }`}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {category.title}
              </div>
            ))}
          </div>
        )}

        {/* Desktop Category Filter */}
        <div className="flex-wrap hidden gap-3 mb-8 md:flex">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full ${
              !selectedCategory
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category.icon}
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Filters */}
        {(searchTerm || selectedCategory) && (
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-gray-600">Active filters:</span>
            {searchTerm && (
              <span className="flex items-center px-3 py-1 text-blue-800 bg-blue-100 rounded-full">
                Search: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm("")}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  &times;
                </button>
              </span>
            )}
            {selectedCategory && (
              <span className="flex items-center px-3 py-1 text-blue-800 bg-blue-100 rounded-full">
                Category: {displayedCategory.title}
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="ml-2 text-blue-500 hover:text-blue-700"
                >
                  &times;
                </button>
              </span>
            )}
            <button
              onClick={resetFilters}
              className="text-blue-600 underline hover:text-blue-800"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Products Display */}
        {selectedCategory ? (
          // Single Category View
          <div className="overflow-hidden bg-white shadow-md rounded-xl">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="flex items-center gap-4">
                <div className="text-blue-600">{displayedCategory.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {displayedCategory.title}
                </h2>
              </div>
              <p className="mt-2 text-gray-600">
                Explore our range of {displayedCategory.title.toLowerCase()}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
              {displayedCategory.items
                .filter(
                  (item) =>
                    !searchTerm ||
                    item.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    key={index}
                    className="p-5 transition-shadow border border-gray-200 rounded-lg cursor-pointer hover:shadow-md"
                    onClick={() => setActiveProduct(item)}
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                      {item}
                    </h3>
                    <p className="text-gray-600">
                      Premium quality {item.toLowerCase()} solution
                    </p>
                    <button className="mt-4 font-medium text-blue-600 hover:text-blue-800">
                      View Details →
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          // All Categories View
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="overflow-hidden transition-shadow bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="text-blue-600">{category.icon}</div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h2>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items
                      .filter(
                        (item) =>
                          !searchTerm ||
                          item.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .slice(0, 4)
                      .map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-blue-500">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    {category.items.length > 4 && (
                      <li className="mt-3 font-medium text-blue-600">
                        +{category.items.length - 4} more products
                      </li>
                    )}
                  </ul>
                  <button className="mt-4 font-medium text-blue-600 hover:text-blue-800">
                    View all {category.title} →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-4 text-gray-400">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-medium text-gray-700">
              No products found
            </h3>
            <p className="mb-4 text-gray-500">
              We couldn't find any products matching your search.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h2 className="mb-2 text-2xl font-bold text-gray-800">
                  {activeProduct}
                </h2>
                <button
                  onClick={() => setActiveProduct(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-center h-48 mt-4 mb-6 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200">
                <span className="text-gray-500">Product Image</span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Product Details
              </h3>
              <p className="mb-4 text-gray-600">
                Premium quality {activeProduct.toLowerCase()} solution with
                advanced features and robust construction. Designed for
                durability and high performance in various environments.
              </p>

              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Key Features
              </h3>
              <ul className="pl-5 mb-4 space-y-1 text-gray-600 list-disc">
                <li>High-quality materials for long-lasting performance</li>
                <li>Advanced security features</li>
                <li>Energy efficient operation</li>
                <li>Easy installation and maintenance</li>
                <li>Customizable options available</li>
              </ul>

              <div className="flex flex-wrap gap-3 mt-6">
                <Link
                  to="/contact"
                  className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Request Quote
                </Link>
                <button className="px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
