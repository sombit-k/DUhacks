import React from "react";
import { Toaster } from "react-hot-toast";

import Homepage from "./components/Homepage";
import LoginFrom from "./components/LoginFrom";
import SignupForm from "./components/SignupForm";
import DaisyuiTest from "./components/DaisyuiTest";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Toaster />
        <Routes>
          <Route path="/daisyuitest" element={<DaisyuiTest />} />{ /*delete this route after testing*/}
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginFrom />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
