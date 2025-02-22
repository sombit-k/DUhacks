import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthstore";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between items-center">
      <header className="w-full bg-white py-4 shadow-md flex justify-between items-center px-8">
        <Link to="/">
        <svg id="logo-16" width="109" height="43" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z" class="ccompli1" fill="#FFD200"></path> <path d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z" class="ccompli2" fill="#06E07F"></path> <path d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z" class="ccustom" fill="#E3073C"></path> <path d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z" class="ccustom" fill="#1F84EF"></path></svg>
        </Link>

        <Link to="/signup">
          <button className="text-white bg-green-500 font-semibold rounded-full px-6 py-3" >
            Get Started
          </button>
        </Link>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center">
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
      </main>
      <section className="bg-white py-16 w-full flex flex-col items-center">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4 inline-block">
              <span className="text-green-500 text-2xl">📦</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
            <p className="text-gray-600">
              Monitor stock levels in real-time to ensure you never run out of
              essential supplies.
            </p>
            <Link to="#">
              <span className="text-green-500 mt-4 block">Learn more</span>
            </Link>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4 inline-block">
              <span className="text-green-500 text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Customizable Reports</h3>
            <p className="text-gray-600">
              Generate detailed reports tailored to your hospital's needs.
            </p>
            <Link to="#">
              <span className="text-green-500 mt-4 block">Learn more</span>
            </Link>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4 inline-block">
              <span className="text-green-500 text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cost-effective</h3>
            <p className="text-gray-600">
              Optimize your inventory to reduce waste and save costs.
            </p>
            <Link to="#">
              <span className="text-green-500 mt-4 block">Learn more</span>
            </Link>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4 inline-block">
              <span className="text-green-500 text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Contact us 24 hours a day, 7 days a week for any assistance.
            </p>
            <Link to="#">
              <span className="text-green-500 mt-4 block">Learn more</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
