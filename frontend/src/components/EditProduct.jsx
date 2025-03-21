import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInventoryStore } from "../../store/useInventorystore";
import { useAuthStore } from "../../store/useAuthstore";

function EditProduct() {
  // default values
  const {oneInventory,updateInventory} = useInventoryStore();
  const {authUser} = useAuthStore();
  const {name, description, category, quantity, expiryDate, price} = oneInventory;
  const [product, setProduct] = useState({name, description, category, quantity, expiryDate, price});
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]:
        name === "quantity" || name === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await updateInventory(authUser.uuid, oneInventory.uuid, product);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Edit Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            />
          </div>
          
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={product.quantity}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              value={product.expiryDate}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
            />
          </div>
          <div className="flex justify-between mt-6">
            <Link
              to="/dashboard"
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Back
            </Link>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
