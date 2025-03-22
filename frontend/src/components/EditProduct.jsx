import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useInventoryStore } from "../../store/useInventorystore";
import { useAuthStore } from "../../store/useAuthstore";
import { Loader2 } from "lucide-react";

function EditProduct() {
  const { id } = useParams();
  const { authUser,isUpdatingInventory } = useAuthStore();
  const { getOneInventory, updateInventory, inventory } = useInventoryStore();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    quantity: 0,
    expiryDate: new Date(),
    price: 0,
    image: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      if (authUser) {
        await getOneInventory(authUser.uuid, id);
      }
    };
    fetchProduct();
  }, [authUser, getOneInventory, id]);

  useEffect(() => {
    const foundProduct = inventory.find((item) => item.uuid === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [inventory, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleDateChange = (date) => {
    setProduct({ ...product, expiryDate: date });
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateInventory(authUser.uuid, id, product);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Edit Product
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Name
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
              Description
            </label>
            <input
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Enter description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
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
              Quantity
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
              Expiry Date
            </label>
            <input
              type="date"
              name="expiryDate"
              value={new Date(product.expiryDate).toISOString().split("T")[0]}
              onChange={(e) => handleDateChange(new Date(e.target.value))}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Price
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
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Product Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
            {product.image && (
              <img
                src={product.image}
                alt="Product"
                className="mt-4 w-32 h-32 rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex justify-center">
          <button
                type="submit"
                className="w-full btn btn-primary bg-green-400 p-2 rounded-md flex items-center justify-center" // Added flex and justify-center
                disabled={isUpdatingInventory} // Disable button while signing up
              >
                {isUpdatingInventory ? (
                  <Loader2 className="h-5 w-5 animate-spin" /> // Ensure proper size and alignment
                ) : (
                  "Update Product"
                )}
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
