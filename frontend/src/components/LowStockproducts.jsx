import React, { useState, useEffect } from "react";

function LowStockproducts() {
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

  const lowStockThreshold = 10;
  const lowStockProducts = products.filter(
    product => product.quantity < lowStockThreshold
  );

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
          </tr>
        </thead>
        <tbody>
          {lowStockProducts.map(product => (
            <tr key={product.name} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">{product.category}</td>
              <td className="py-2 px-4 border-b">{product.expiryDate}</td>
              <td className="py-2 px-4 border-b">{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LowStockproducts;
