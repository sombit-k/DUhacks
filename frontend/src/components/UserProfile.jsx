import React from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthstore";

function UserProfile() {
  const { authUser } = useAuthStore();

  if (!authUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <img
          src={authUser.image}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2 text-black">{authUser.username}</h2>
        <p className="text-gray-700 mb-4">{authUser.email}</p>
        <div className="flex justify-center mb-4">
          <Link to="/dashboard/settings">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Edit Profile
            </button>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link to="/dashboard">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Go to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
