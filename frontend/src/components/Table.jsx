import React, { useState } from "react";
import { Minus, Plus, Eye, ChevronLeft, ChevronRight } from "lucide-react";

export default function TableDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [products, setProducts] = useState([
    {
      name: "Product 1",
      price: "$250.00",
      category: "Category 1",
      expiryDate: "2025-12-31",
      quantity: 10,
    },
    {
      name: "Product 2",
      price: "$150.00",
      category: "Category 2",
      expiryDate: "2025-11-30",
      quantity: 5,
    },
    {
      name: "Product 3",
      price: "$350.00",
      category: "Category 3",
      expiryDate: "2025-10-31",
      quantity: 8,
    },
    {
      name: "Product 4",
      price: "$450.00",
      category: "Category 4",
      expiryDate: "2025-09-30",
      quantity: 12,
    },
    {
      name: "Product 5",
      price: "$550.00",
      category: "Category 5",
      expiryDate: "2025-08-31",
      quantity: 7,
    },
    {
      name: "Product 6",
      price: "$200.00",
      category: "Category 6",
      expiryDate: "2025-07-31",
      quantity: 15,
    },
    {
      name: "Product 7",
      price: "$300.00",
      category: "Category 7",
      expiryDate: "2025-06-30",
      quantity: 9,
    },
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
