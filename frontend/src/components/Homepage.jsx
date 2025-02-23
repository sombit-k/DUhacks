import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ActivitySquare,
  ClipboardList,
  Users,
  Package,
} from "lucide-react";
import { useAuthStore } from "../../store/useAuthstore";
import { useState } from "react";

function Home() {
  const { authUser } = useAuthStore();

  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the accordion open/close
  const handleAccordionToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between items-center">
      <header className="w-full bg-white py-4 shadow-md flex justify-between items-center px-8">
        <Link to="/">
          <svg
            id="logo-16"
            width="109"
            height="43"
            viewBox="0 0 109 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z"
              class="ccompli1"
              fill="#FFD200"
            ></path>{" "}
            <path
              d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z"
              class="ccompli2"
              fill="#06E07F"
            ></path>{" "}
            <path
              d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z"
              class="ccustom"
              fill="#E3073C"
            ></path>{" "}
            <path
              d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z"
              class="ccustom"
              fill="#1F84EF"
            ></path>
          </svg>
        </Link>

        <Link to={authUser?.uuid ? "/dashboard" : "/signup"}>
          <button className="text-white bg-blue-600 font-semibold rounded-full px-6 py-3">
            Get Started
          </button>
        </Link>
      </header>

      <div class="w-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 px-6 sm:py-20 py-10 font-[sans-serif]">
        <div class="container mx-auto text-center text-white">
          <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">
            Hospital Inventory Management
          </h1>
          <p class="text-lg mb-12">
            Efficiently track and manage medical supplies, equipment, and
            medicines in real-time.
          </p>
          <Link to="/signup">
            <button
              type="button"
              class="bg-blue-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              Manage Inventory
            </button>
          </Link>
        </div>
      </div>

      <main>
        <div class="my-4 font-[sans-serif] max-w-6xl max-md:max-w-md mx-auto">
          <div class="md:mb-28 mb-12 text-center">
            <h2 class="text-gray-800 text-3xl font-bold">
              What our happy client say
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-6 relative">
            <div class="bg-gradient-to-tr from-[#caf0f8] via-[#ade8f4] to-[#90e0ef] max-w-[65%] h-[145%] w-full -top-16 left-0 right-0 mx-auto rounded-3xl absolute max-md:hidden"></div>

            <div class="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
              <div>
                <img
                  src="https://readymadeui.com/profile_2.webp"
                  class="w-10 h-10 rounded-full"
                />
                <h4 class="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">
                  John Doe
                </h4>
                <p class="mt-0.5 text-xs text-gray-600">Founder of Rubik</p>
              </div>
              <div class="mt-4">
                <p class="text-gray-800 text-sm leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>
            </div>

            <div class="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
              <div>
                <img
                  src="https://readymadeui.com/profile_3.webp"
                  class="w-10 h-10 rounded-full"
                />
                <h4 class="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">
                  Mark Adair
                </h4>
                <p class="mt-0.5 text-xs text-gray-600">Founder of Alpha</p>
              </div>
              <div class="mt-4">
                <p class="text-gray-800 text-sm leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>
            </div>

            <div class="h-auto p-6 rounded-2xl mx-auto bg-white relative max-md:shadow-md">
              <div>
                <img
                  src="https://readymadeui.com/profile_4.webp"
                  class="w-10 h-10 rounded-full"
                />
                <h4 class="text-gray-800 text-sm whitespace-nowrap font-bold mt-3">
                  Simon Konecki
                </h4>
                <p class="mt-0.5 text-xs text-gray-600">Founder of Labar</p>
              </div>
              <div class="mt-4">
                <p class="text-gray-800 text-sm leading-relaxed">
                  The service was amazing. I never had to wait that long for my
                  food. The staff was friendly and attentive, and the delivery
                  was impressively prompt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <br />
      <br />
      <br />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="accordion-group">
            {[
              {
                question:
                  "How do I check the current inventory stock in the hospital?",
                answer:
                  "To check the current inventory stock, log into the hospital's inventory management system. Navigate to the 'Inventory' or 'Stock' section, where you can view the available quantities of medical supplies, medicines, and other items.",
              },
              {
                question:
                  "How can I update inventory records when stock levels change?",
                answer:
                  "To update inventory records, access the inventory management system, select the item whose stock level has changed, and enter the new quantity. Make sure to save and verify the updated data. You can also generate inventory reports after updates.",
              },
              {
                question: "What should I do if an item goes out of stock?",
                answer:
                  "If an item is out of stock, immediately notify the inventory manager and place an order with suppliers. You can also check alternative suppliers or adjust stock levels accordingly. Make sure to update the system once the stock is replenished.",
              },
              {
                question: "How do I track expired stock in the hospital?",
                answer:
                  "To track expired stock, set up an automated reminder in the system to notify you when items near their expiration date. Regularly review inventory reports to remove expired stock, and update the inventory system accordingly.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="accordion border border-solid border-gray-300 p-4 rounded-xl transition duration-500 accordion-active:bg-indigo-50 accordion-active:border-indigo-600 mb-8 lg:p-4"
              >
                <button
                  className="accordion-toggle group flex items-center justify-between w-full text-left text-lg font-normal leading-8 text-gray-900 transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600"
                  onClick={() => handleAccordionToggle(index)}
                >
                  <h5 className="flex-1">{faq.question}</h5>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 ${
                      activeIndex === index ? "hidden" : ""
                    } group-hover:text-indigo-600`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M12 18V6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <svg
                    className={`w-6 h-6 text-gray-900 transition duration-500 ${
                      activeIndex !== index ? "hidden" : ""
                    } group-hover:text-indigo-600`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`accordion-content w-full overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-[200px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base text-gray-900 font-normal leading-6 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full font-sans tracking-wide bg-gray-50 px-10 pt-12 pb-6">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-md">
            <a href="javascript:void(0)" className="flex items-center">
              <Heart className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                MediTrack Pro
              </span>
            </a>
            <div className="mt-6">
              <p className="text-gray-600 leading-relaxed text-sm">
                MediTrack Pro provides comprehensive inventory management
                solutions for modern healthcare facilities. Our system ensures
                accurate tracking of medical supplies, equipment, and
                pharmaceuticals while maintaining optimal stock levels for
                quality patient care.
              </p>
            </div>
            <ul className="mt-10 flex space-x-5">
              <li>
                <a href="javascript:void(0)">
                  <ActivitySquare className="w-8 h-8 text-blue-600" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-between w-full mt-10">
            <div className="max-lg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer flex items-center">
                <ClipboardList className="w-4 h-4 mr-2" />
                Inventory Control
              </h4>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Stock Management
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Supply Chain
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Order Processing
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-lg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Department Access
              </h4>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Emergency Room
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Operating Theater
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Pharmacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-lg:min-w-[140px]">
              <h4 className="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer flex items-center">
                <Package className="w-4 h-4 mr-2" />
                Resources
              </h4>
              <ul className="mt-6 space-y-4">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Analytics Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Reports & Metrics
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-gray-800 text-gray-600 text-sm"
                  >
                    Training Materials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="mt-10 mb-6 border-gray-300" />

        <div className="flex flex-wrap max-md:flex-col gap-4 w-full justify-between">
          <ul className="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                className="hover:text-gray-800 text-gray-600 text-sm"
              >
                HIPAA Compliance
              </a>
            </li>
          </ul>
          <p className="text-gray-600 text-sm md:ml-auto">
            © 2025 MediTrack Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
