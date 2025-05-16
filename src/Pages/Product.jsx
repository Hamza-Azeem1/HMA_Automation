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
      image: "https://images.unsplash.com/photo-1710609886561-d94c866a7913?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        {
          name: "Automatic Sliding Doors",
          image: "https://plus.unsplash.com/premium_photo-1677156471548-067bde00aacd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Automatic Swing Doors",
          image: "https://images.unsplash.com/photo-1634125939366-bef6e0300eb7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          name: "Automatic Sliding Gates",
          image: "https://pentagonfencing.com.au/wp-content/uploads/2023/11/aluminum-horizontal-slat-fencing-and-sliding-gate.jpg"
        },
        {
          name: "Automatic Swing Gates",
          image: "https://baroon.pk/wp-content/uploads/2024/09/Swing_Gate_Motor-rotated.jpg"
        },
        {
          name: "Automatic Roller Shutters",
          image: "https://www.technoone.pk/wp-content/uploads/2017/08/Automatic-Roller-Shutter.jpg"
        },
        {
          name: "Automatic Industrial High speed PVC Shutters",
          image: "https://zamtas.com.pk/wp-content/uploads/2023/09/WhatsApp-Image-2025-03-14-at-1.10.09-PM-1.jpeg"
        },
        {
          name: "Hinged Doors",
          image: "https://lh3.googleusercontent.com/proxy/qgvEF8HVV8WkjANbXIodbevuZKluWUMhvgVQHRaq_1Ddso5zWr7Zyp_p8WRCNlHysfrBWUs7PX4KYmep9W6Q0bFbgDKzHqXV7xXwGdYWuU7rO-GvLGk9"
        },
        {
          name: "Automatic Awnings",
          image: "https://zamtas.com.pk/wp-content/uploads/2023/09/awnings2.jpg"
        }
      ],
    },
    {
      id: "traffic-control",
      title: "Traffic & Perimeter Control",
      icon: <FaTrafficLight className="text-3xl" />,
      image: "https://plus.unsplash.com/premium_photo-1736517545267-92346c5fc0a8?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        {
          name: "Tyre Killer",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdkrZAd9H0CKNL8_aXxlgHv6BGEqigaMakg&s"
        },
        {
          name: "Speed Breaker",
          image: "https://5.imimg.com/data5/AM/PV/BA/SELLER-948192/speed-breaker-500x500.JPG"
        },
        {
          name: "Road Blocker",
          image: "https://cdn.prod.website-files.com/5edf9e74d5a7585ab5e77dc2/609ce5cd51a49295219d7afb_WG%20Road%20Blocker.jpg"
        },
        {
          name: "Bollards",
          image: "https://themaintainers.com.pk/wp-content/uploads/2021/12/UQYE3287.jpg"
        },
        {
          name: "Automatic Boom Barriers",
          image: "https://www.universalmincon.com/wp-content/uploads/2024/10/Boom-Barrier-scaled.webp"
        },
        {
          name: "Traffic Lights",
          image: "https://static.vecteezy.com/system/resources/thumbnails/009/733/037/small_2x/illustration-graphic-of-traffic-light-cartoon-vector.jpg"
        },
        {
          name: "Walkthrough Gates",
          image: "https://www.adamsfiretech.com/wp-content/uploads/2025/01/Walk-Through-Gate.jpg"
        },
        {
          name: "Electric Fence",
          image: "https://i0.wp.com/alkhairtec.com/wp-content/uploads/2023/02/electric-fencing.jpg?fit=1920%2C1200&ssl=1"
        }
      ],
    },
    {
      id: "access-control",
      title: "Access Control Systems",
      icon: <MdOutlineSecurity className="text-3xl" />,
      image: "https://www.brothersfireandsecurity.com/hubfs/images/blog/controlled%20access-1-1.jpeg",
      items: [
        {
          name: "RFID Access Systems",
          image: "https://qariya.net/wp-content/uploads/2019/04/RFID-Access-control-.jpg"
        },
        {
          name: "Keypad Entry Systems",
          image: "https://i.pcmag.com/imagery/roundups/06P1OlW9vFcdY3lbkWUJiby-12..v1668785204.jpg"
        },
        {
          name: "Biometric Access Control",
          image: "https://www.sourcesecurity.com/img/news/920/biometric-access-control-920-2.jpg"
        },
        {
          name: "Mobile Application Control",
          image: "https://blog.airdroid.com/wp-content/uploads/2020/10/Manage-mobile-apps-with-MAM.jpg"
        },
        {
          name: "Integrated Security Systems",
          image: "https://dpsalarm.com/wp-content/uploads/2023/02/integratedsecuritysystems.png"
        }
      ],
    },
    {
      id: "surveillance",
      title: "Surveillance & Safety",
      icon: <FaShieldAlt className="text-3xl" />,
      image: "https://images.unsplash.com/photo-1723186508830-ef518623fa6a?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        {
          name: "CCTV/Video Surveillance",
          image: "https://safeguardsystems.co.uk/wp-content/uploads/2022/02/Video-Surveillance-Systems.jpg"
        },
        {
          name: "Fire Alarm Systems",
          image: "https://universalfireprotection.com.pk/wp-content/uploads/2020/12/fire-alarm-system-installation.jpg"
        },
        {
          name: "Fire Rated Doors (UL Listed)",
          image: "https://kitbdltd.com/uploads/2020/05/fire-doors.png"
        },
        {
          name: "Public Address (PA) Systems",
          image: "https://ksa.technostream.org/wp-content/uploads/2024/05/Public-Address-System-Working.webp"
        },
        {
          name: "Voice Alarm Systems",
          image: "https://mlycz7tyv3gh.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://acoustechno.com/wp-content/uploads/2023/04/EVC.jpg"
        }
      ],
    },
    {
      id: "energy-lighting",
      title: "Energy & Lighting",
      icon: <FaSolarPanel className="text-3xl" />,
      image: "https://www.benefyd.com/wp-content/uploads/2016/12/hands-holding-traditional-and-energy-efficient-light-bulbs.jpg",
      items: [
        {
          name: "Solar Power Systems",
          image: "https://www.energydawnice.com/wp-content/uploads/2022/12/What-Is-Off-Grid-Solar-Power-System1.png"
        },
        {
          name: "Street Lights",
          image: "https://3.imimg.com/data3/NL/PT/MY-10568056/untitled-1.jpg"
        },
        {
          name: "Air Curtains (Black/White/Custom)",
          image: "https://novatech.ind.in/wp-content/uploads/2022/03/air-curtain-novatech.jpg"
        },
        {
          name: "Energy Efficient Solutions",
          image: "https://thumbs.dreamstime.com/b/energy-efficiency-rating-house-illustration-36874182.jpg"
        }
      ],
    },
    {
      id: "specialty",
      title: "Specialty Systems",
      icon: <MdOutlineElectricBolt className="text-3xl" />,
      image: "https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/scissor-lift-safety-construction-1.webp",
      items: [
        {
          name: "Lifts/Elevators",
          image: "https://5.imimg.com/data5/EL/QQ/MY-830981/stainless-steel-passenger-lifts-500x500.jpg"
        },
        {
          name: "Restaurant & Kitchen Equipment",
          image: "https://5.imimg.com/data5/SELLER/Default/2023/8/335943466/TD/PD/XB/126292895/restaurant-kitchen-equipment-500x500.png"
        },
        {
          name: "Computer & Laptop Accessories",
          image: "https://www.the-xperts.com/upload/images/-9514984124.JPG.png"
        },
        {
          name: "Printers",
          image: "https://static.independent.co.uk/2024/10/23/12/Printers-2024.jpg"
        },
        {
          name: "Custom Fabrication",
          image: "https://www.paragonmodelshop.com/wp-content/uploads/2023/11/creating-custom-industrial-stairs-grand-rapids-metal-fabrication.jpg"
        }
      ],
    },
  ];

  const filteredCategories = categories.filter((category) => {
    if (!searchTerm) return true;
    return (
      category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.items.some((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
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
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item, index) => (
                  <div
                    key={index}
                    className="overflow-hidden transition-shadow border border-gray-200 rounded-lg cursor-pointer hover:shadow-md"
                    onClick={() => setActiveProduct(item)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">
                        Premium quality {item.name.toLowerCase()} solution
                      </p>
                      <button className="mt-3 font-medium text-blue-600 hover:text-blue-800">
                        View Details →
                      </button>
                    </div>
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
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 flex items-center gap-4 p-6">
                    <div className="text-white">{category.icon}</div>
                    <h2 className="text-xl font-bold text-white">
                      {category.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items
                      .filter(
                        (item) =>
                          !searchTerm ||
                          item.name.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .slice(0, 4)
                      .map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-blue-500">•</span>
                          <span className="text-gray-700">{item.name}</span>
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
                  {activeProduct.name}
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

              <div className="h-64 mt-4 mb-6 overflow-hidden rounded-lg">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-gray-800">
                Product Details
              </h3>
              <p className="mb-4 text-gray-600">
                Premium quality {activeProduct.name.toLowerCase()} solution with
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