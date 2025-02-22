import React, { useState } from "react";
import undrawsvg from "../assets/signup.svg";
import { useAuthStore } from "../../store/useAuthstore";
import { Eye, EyeOff } from "lucide-react";

const  LoginForm=()=> {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { logIn, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    logIn(formData);
  };


  return (
    <div className="flex h-screen">
      {/* Left Pane */}
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="max-w-md text-center">
          <img src={undrawsvg} alt="login" className="w-96 h-96" />
        </div>
      </div>
      {/* Right Pane */}
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">
            Log In
          </h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">
            Welcome back! Please login to your account.
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="input input-bordered mt-1 p-2 w-full border rounded-md bg-white text-black  focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
              <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="input input-bordered mt-1 p-2 w-full border rounded-md bg-white text-black  focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-500" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
            </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-400 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="text-black hover:underline">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
