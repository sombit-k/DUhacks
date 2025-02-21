import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between items-center">
      <header className="w-full bg-white py-4 shadow-md flex justify-between items-center px-8">
        <Link to="/">
          <div className="text-xl font-bold">Hospital Stock Manager</div>
        </Link>

        <Link to="/signup">
          <button className="text-white bg-green-500 font-semibold rounded-full px-6 py-3">
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
