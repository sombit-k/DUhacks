import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInventoryStore } from "../../store/useInventorystore";
import { useAuthStore } from "../../store/useAuthstore";

function ShowProduct() {
  const { oneInventory, deleteInventory } = useInventoryStore();
  const { authUser } = useAuthStore();
  const product = oneInventory;
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  

  const handleDelete = () => {
    setShowDeleteDialog(false);
    deleteInventory(authUser.uuid, product.uuid);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
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
          <Link to={`/dashboard/edit-product/${product.uuid}`}>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Edit
            </button>
          </Link>
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
              <Link to="/dashboard">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShowProduct;
