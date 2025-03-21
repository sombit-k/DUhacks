import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useInventoryStore } from "../../store/useInventorystore";
import { useAuthStore } from "../../store/useAuthstore";
import { useNavigate } from "react-router-dom";

export default function TableDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { authUser } = useAuthStore();
  const { inventory, getAllInventory, incrementMedicineQuantity, decrementMedicineQuantity } = useInventoryStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      getAllInventory(authUser.uuid);
    }
  }, [authUser, getAllInventory]);

  const totalPages = Math.ceil(inventory.length / itemsPerPage);
  const currentProducts = inventory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDecrease = async (product) => {
    try {
      await decrementMedicineQuantity(authUser.uuid, product.uuid);
    } catch (error) {
      console.error("Error decrementing quantity:", error);
    }
  };

  const handleIncrease = async (product) => {
    try {
      await incrementMedicineQuantity(authUser.uuid, product.uuid);
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  const handleShow = (product) => {
    navigate(`/dashboard/product/${product.uuid}`);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <caption className="text-lg font-semibold mb-4">
          A list of your products.
        </caption>
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="py-2 px-4 border-b">Product Name</th>
            <th className="py-2 px-4 border-b hidden md:table-cell">Price</th>
            <th className="py-2 px-4 border-b hidden md:table-cell">
              Category
            </th>
            <th className="py-2 px-4 border-b hidden md:table-cell">
              Expiry Date
            </th>
            <th className="py-2 px-4 border-b">Quantity</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product.uuid} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b hidden md:table-cell">
                {product.price}
              </td>
              <td className="py-2 px-4 border-b hidden md:table-cell">
                {product.category}
              </td>
              <td className="py-2 px-4 border-b hidden md:table-cell">
                {formatDate(product.expiryDate)}
              </td>
              <td className="py-2 px-4 border-b">{product.quantity}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDecrease(product)}
                  className="mr-2 text-red-600"
                >
                  <Minus />
                </button>
                <button
                  onClick={() => handleIncrease(product)}
                  className="mr-2 text-green-600"
                >
                  <Plus />
                </button>
                <Link
                  to={`/dashboard/product/${product.uuid}`}
                  className="mr-2 text-blue-600">
                <button
                onClick={() => getOneInventory(authUser.uuid, product.uuid)}
                  className="text-blue-600"
                >
                  <Eye />
                </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6} className="py-2 px-4 border-t">
              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="text-blue-600"
                >
                  <ChevronLeft />
                </button>
                <span>
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="text-blue-600"
                >
                  <ChevronRight />
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
