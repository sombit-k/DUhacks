import React, { useState } from "react";
import { Link } from "react-router-dom";

function ShowProduct() {
  // Sample product data
  const product = {
    name: "Sample Product",
    description: "This is a sample product description.",
    image: {
      url: "https://media.istockphoto.com/id/901063844/photo/medical-vital-signs-monitor-in-a-hospital.jpg?s=2048x2048&w=is&k=20&c=hJEG51_MqdFO50hLcWENFoLe6VpWlDBhEuKaQ4m7Gjw=",
    },
    category: "Sample Category",
    quantity: 10,
    expiryDate: "2025-12-31",
    price: 100,
  };

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleDelete = () => {
    setShowDeleteDialog(false);
    alert("Product deleted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <img
          src={product.image.url}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-600">
          <strong>Category:</strong> {product.category}
        </p>
        <p className="text-gray-600">
          <strong>Quantity:</strong> {product.quantity}
        </p>
        <p className="text-gray-600">
          <strong>Expiry Date:</strong>{" "}
          {new Date(product.expiryDate).toLocaleDateString()}
        </p>
        <p className="text-gray-600">
          <strong>Price:</strong> ${product.price}
        </p>
        <div className="flex justify-between mt-6">
          <Link
            to="/dashboard"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Back
          </Link>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Edit
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            onClick={() => setShowDeleteDialog(true)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to delete this product?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                onClick={() => setShowDeleteDialog(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowProduct;
