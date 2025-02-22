import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  ActivitySquare,
  ClipboardList,
  Users,
  Package,
} from "lucide-react";
function Home() {
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

        <Link to="/signup">
          <button className="text-white bg-green-500 font-semibold rounded-full px-6 py-3">
            Get Started
          </button>
        </Link>
      </header>
      {/* <main className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
          <h1 className="text-4xl font-bold mb-4">
            Hospital <span className="text-green-500">Stock Manager</span>
          </h1>

          <p className="text-gray-700 mb-8">
            Efficiently manage and track your hospital's inventory with our
            comprehensive stock management system.
          </p>
          <Link to="/signup">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold">
              Get started
            </button>
          </Link>
        </div>
      </main> */}

      <div class="w-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-500 px-6 sm:py-20 py-10 font-[sans-serif]">
        <div class="container mx-auto text-center text-white">
          <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">
            Hospital Inventory Management
          </h1>
          <p class="text-lg mb-12">
            Efficiently track and manage medical supplies, equipment, and
            medicines in real-time.
          </p>
          <button
            type="button"
            class="bg-blue-600 text-white text-lg tracking-wide px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Manage Inventory
          </button>
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

      <section>
        <div class="font-sans divide-y rounded-lg max-w-4xl mx-auto px-4">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-800">
              Frequently asked questions
            </h2>
          </div>
          <div class="accordion" role="accordion">
            <button
              type="button"
              class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-blue-600 hover:text-blue-600 flex items-center"
            >
              <span class="mr-4">
                Are there any special discounts or promotions available during
                the event.
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                class="w-3 fill-current ml-auto shrink-0"
              >
                <path
                  class="plus hidden"
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                />
                <path d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
              </svg>
            </button>
            <div class="content pb-6 max-h-[1000px] overflow-hidden transition-all duration-300">
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas vestibulum a
                turpis in lacinia. Proin aliquam turpis at erat venenatis
                malesuada. Sed semper, justo vitae consequat fermentum, felis
                diam posuere ante, sed fermentum quam justo in dui. Nulla
                facilisi. Nulla aliquam auctor purus, vitae dictum dolor
                sollicitudin vitae. Sed bibendum purus in efficitur consequat.
                Fusce et tincidunt arcu. Curabitur ac lacus lectus. Morbi congue
                facilisis sapien, a semper orci facilisis in.
              </p>
            </div>
          </div>
          <div class="accordion" role="accordion">
            <button
              type="button"
              class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center"
            >
              <span class="mr-4">
                What are the dates and locations for the product launch events?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                class="w-3 fill-current ml-auto shrink-0"
              >
                <path
                  class="plus"
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                />
                <path d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
              </svg>
            </button>
            <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas ongue facilisis
                sapien, a semper orci facilisis in.
              </p>
            </div>
          </div>
          <div class="accordion" role="accordion">
            <button
              type="button"
              class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center"
            >
              <span class="mr-4">
                Can I bring a guest with me to the product launch event?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                class="w-3 fill-current ml-auto shrink-0"
              >
                <path
                  class="plus"
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                />
                <path d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
              </svg>
            </button>
            <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas ongue facilisis
                sapien, a semper orci facilisis in.
              </p>
            </div>
          </div>
          <div class="accordion" role="accordion">
            <button
              type="button"
              class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center"
            >
              <span class="mr-4">How can I register for the event?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                class="w-3 fill-current ml-auto shrink-0"
              >
                <path
                  class="plus"
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                />
                <path d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
              </svg>
            </button>
            <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas ongue facilisis
                sapien, a semper orci facilisis in.
              </p>
            </div>
          </div>
          <div class="accordion" role="accordion">
            <button
              type="button"
              class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center"
            >
              <span class="mr-4">Is there parking available at the venue?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                class="w-3 fill-current ml-auto shrink-0"
              >
                <path
                  class="plus"
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                />
                <path d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
              </svg>
            </button>
            <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas ongue facilisis
                sapien, a semper orci facilisis in.
              </p>
            </div>
          </div>
          <div class="accordion" role="accordion">
            <button
              type="button"
              class="toggle-button w-full text-base outline-none text-left font-semibold py-6 text-gray-800 hover:text-blue-600 flex items-center"
            >
              <span class="mr-4">How can I contact the event organizers?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 42 42"
                class="w-3 fill-current ml-auto shrink-0"
              >
                <path
                  class="plus"
                  d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                />
                <path d="M37.059 16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5h32.118C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
              </svg>
            </button>
            <div class="content invisible max-h-0 overflow-hidden transition-all duration-300">
              <p class="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas ongue facilisis
                sapien, a semper orci facilisis in.
              </p>
            </div>
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
