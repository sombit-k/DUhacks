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
import LowStockproducts from "./components/LowStockproducts";

const App = () => {
  const { checkAuth, authUser, onlineUsers } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster />
        <Routes>
          {/* <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginFrom />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<EditProfile />} />
          <Route path="/dashboard/profile" element={<UserProfile />} />
          <Route path="/dashboard/contact" element={<ContactUs />} />
          <Route path="/dashboard/new-product" element={<CreateProduct />} />
          <Route path="/dashboard/low-stock" element={<LowStockproducts />} /> */}

          {/* testing the routes */}

          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={!authUser?<LoginFrom />:<Navigate to ="/dashboard"/>} />
          <Route path="/signup" element={!authUser?<SignupForm />:<Navigate to ="/dashboard"/>} />
          <Route path="/dashboard" element={authUser?<Dashboard />:<Navigate to ="/signup"/>}/>
          <Route path="/dashboard/settings" element={authUser?<EditProfile />:<Navigate to ="/signup"/>} />
          <Route path="/dashboard/profile" element={authUser?<UserProfile />:<Navigate to ="/signup"/>} />
          <Route path="/dashboard/contact" element={<ContactUs />} />
          <Route path="/dashboard/low-stock" element={<LowStockproducts />} />
          <Route path="/dashboard/new-product" element={<CreateProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
