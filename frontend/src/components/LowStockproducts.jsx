import React, { useState, useEffect } from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useInventoryStore } from "../../store/useInventorystore";
import { useAuthStore } from "../../store/useAuthstore";

function LowStockproducts() {
  const { authUser } = useAuthStore();
  const { inventory, getAllInventory } = useInventoryStore();
  const [lowStockProducts, setLowStockProducts] = useState([]);

  useEffect(() => {
    if (authUser) {
      getAllInventory(authUser.uuid);
    }
  }, [authUser, getAllInventory]);

  useEffect(() => {
    const lowStockThreshold = 10;
    const filteredProducts = inventory.filter(
      (product) => product.quantity < lowStockThreshold
    );
    setLowStockProducts(filteredProducts);
  }, [inventory]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">
        Low Stock Products
      </h2>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-red-600 text-white">
          <tr>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Expiry Date</th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Image</th>
          </tr>
        </thead>
        <tbody>
          {lowStockProducts.map((product) => (
            <tr key={product.uuid} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">{new Date(product.expiryDate).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b">{product.quantity}</td>
              <td className="py-2 px-4 border-b">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
      <Link to="/dashboard">
            <button className="text-blue-600 hover:text-blue-800 font-semibold">
              <Home className="inline-block mr-2" /> Back to Dashboard
            </button>
          </Link>
      </div>
    </div>
  );
}

export default LowStockproducts;
