import React, { useState } from "react";
import { Calendar, Image, Package, DollarSign, Hash, Home } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import { useInventoryStore } from "../../store/useInventorystore";
import { useAuthStore } from "../../store/useAuthstore";

function CreateProduct() {
  const { addNewInventory } = useInventoryStore();
  const { authUser } = useAuthStore();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    quantity: 0,
    expiryDate: new Date(),
    price: 0,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = async e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setProduct({ ...product, image: base64Image });
    };
  };

  const handleDateChange = date => {
    setProduct({ ...product, expiryDate: date });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewInventory(authUser.uuid, product);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              <Package className="inline-block mr-2" /> Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              <Image className="inline-block mr-2" /> Product Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              <Package className="inline-block mr-2" /> Category
            </label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Enter category"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              <Hash className="inline-block mr-2" /> Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Enter quantity"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              <Calendar className="inline-block mr-2" /> Expiry Date
            </label>
            <DatePicker
              selected={product.expiryDate}
              onChange={handleDateChange}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              <DollarSign className="inline-block mr-2" /> Price
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Enter price"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Add Product
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <Link to="/dashboard">
            <button className="text-blue-600 hover:text-blue-800 font-semibold">
              <Home className="inline-block mr-2" /> Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
