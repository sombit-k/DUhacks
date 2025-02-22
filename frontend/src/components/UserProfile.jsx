import React from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <img
          src="https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?ga=GA1.1.711152203.1740165473&semt=ais_hybridhttps://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?ga=GA1.1.711152203.1740165473&semt=ais_hybrid"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-semibold mb-2 text-black">somu</h2>
        <p className="text-gray-700 mb-4">somu@gmail.com</p>
        <div className="flex justify-center">
          <Link to="/dashboard/settings">
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
