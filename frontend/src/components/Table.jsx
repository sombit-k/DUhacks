import React, { useState } from "react";
import { Minus, Plus, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useAuthStore } from "../../store/useAuthstore";
import { useInventoryStore } from "../../store/useInventorystore";
export default function TableDemo() {
  const { authUser } = useAuthStore();
  //authUser.uuid
  const {inventory,getAllInventory}=useInventoryStore();
  getAllInventory(authUser.uuid)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  // inventory
  const [products, setProducts] = useState([inventory
  ]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDecrease = index => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity -= 1;
    }
    setProducts(updatedProducts);
  };

  const handleIncrease = index => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
  };

  const handleShow = product => {
    alert(`Showing details for ${product.name}`);
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
          {currentProducts.map((product, index) => (
            <tr key={product.name} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b hidden md:table-cell">
                {product.price}
              </td>
              <td className="py-2 px-4 border-b hidden md:table-cell">
                {product.category}
              </td>
              <td className="py-2 px-4 border-b hidden md:table-cell">
                {product.expiryDate}
              </td>
              <td className="py-2 px-4 border-b">{product.quantity}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDecrease(index)}
                  className="mr-2 text-red-600"
                >
                  <Minus />
                </button>
                <button
                  onClick={() => handleIncrease(index)}
                  className="mr-2 text-green-600"
                >
                  <Plus />
                </button>
                <button
                  onClick={() => handleShow(product)}
                  className="text-blue-600"
                >
                  <Eye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6} className="py-2 px-4 border-t">
              <div className="flex justify-between">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
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
                    setCurrentPage(prev => Math.min(prev + 1, totalPages))
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
