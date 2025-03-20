import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Homepage from "./components/Homepage";
import LoginFrom from "./components/LoginFrom";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import UserProfile from "./components/UserProfile";
import ContactUs from "./components/ContactUs";
import CreateProduct from "./components/CreateProduct";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthstore";
import { useInventoryStore } from "../store/useInventorystore";
import LowStockproducts from "./components/LowStockproducts";
import ShowProduct from "./components/ShowProduct";
import EditProduct from "./components/EditProduct";

const App = () => {
  const { checkAuth, authUser } = useAuthStore();
  const { getAllInventory } = useInventoryStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (authUser) {
      getAllInventory(authUser.uuid);
    }
  }, [authUser, getAllInventory]);

  return (
    <BrowserRouter>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/login"
            element={!authUser ? <LoginFrom /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/signup"
            element={!authUser ? <SignupForm /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={authUser ? <Dashboard /> : <Navigate to="/signup" />}
          />
          <Route
            path="/dashboard/settings"
            element={authUser ? <EditProfile /> : <Navigate to="/signup" />}
          />
          <Route
            path="/dashboard/profile"
            element={authUser ? <UserProfile /> : <Navigate to="/signup" />}
          />
          <Route path="/dashboard/contact" element={<ContactUs />} />
          <Route path="/dashboard/low-stock" element={<LowStockproducts />} />
          <Route path="/dashboard/new-product" element={<CreateProduct />} />
          <Route path="/dashboard/product/:id" element={<ShowProduct />} />
          <Route path="/dashboard/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
