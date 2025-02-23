import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthstore"; // Import useAuthStore

function EditProfile() {
  const { authUser, updateProfile } = useAuthStore(); // Use useAuthStore
  const [selectedImg, setSelectedImg] = useState(null);
  const [password, setPassword] = useState("");

  const handleImageUpload = async e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ password, image: base64Image });
    };
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await updateProfile({ password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-black">
          Edit Profile
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-success w-full max-w-xs bg-white"
              onChange={handleImageUpload}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
              placeholder="Enter new password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-4">
          <Link to="/dashboard">
            <button className="text-blue-600 hover:text-blue-800 font-semibold">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
