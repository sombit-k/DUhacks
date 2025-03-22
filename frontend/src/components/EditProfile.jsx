import React, { useState, useEffect } from "react";
import { useAuthStore } from "../../store/useAuthstore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function EditProfile() {
  const { authUser, updateProfile } = useAuthStore();
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (authUser) {
      setImage(authUser.image);
    }
  }, [authUser]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { password, image };
    try {
      await updateProfile(data);
      navigate("/dashboard/profile"); // Redirect to  updating profile
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Enter new password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
            {image && (
              <img
                src={image}
                alt="Profile"
                className="mt-4 w-32 h-32 rounded-full object-cover"
              />
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Update Profile
            </button>
          </div>
        </form>
        <div className="flex justify-center">
                <Link to="/dashboard">
                    <button className="text-blue-600 hover:text-blue-800 font-semibold">
                      <Home className="inline-block mr-2" /> Back to Dashboard
                    </button>
                  </Link>
                </div>
      </div>
    </div>
  );
}

export default EditProfile;
