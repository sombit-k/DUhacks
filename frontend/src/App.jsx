import React from "react";
import { Toaster } from "react-hot-toast";

import Homepage from "./components/Homepage";
import LoginFrom from "./components/LoginFrom";
import SignupForm from "./components/SignupForm";
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import UserProfile from "./components/UserProfile";
import ContactUs from "./components/ContactUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginFrom />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/settings" element={<EditProfile />} />
          <Route path="/dashboard/profile" element={<UserProfile />} />
          <Route path="/dashboard/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
