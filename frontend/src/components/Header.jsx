import React, { useState, useEffect } from "react";
import { BellIcon, MenuIcon } from "lucide-react";
import { useAuthStore } from "../../store/useAuthstore";
import { useInventoryStore } from "../../store/useInventorystore";

function Header({ toggleSidebar }) {
  const { logOut, authUser } = useAuthStore();
  const { inventory, getAllInventory } = useInventoryStore();
  const [lowStockCount, setLowStockCount] = useState(0);
  const [showLowStockPopup, setShowLowStockPopup] = useState(false);

  useEffect(() => {
    if (authUser) {
      getAllInventory(authUser.uuid);
    }
  }, [authUser, getAllInventory]);

  useEffect(() => {
    const lowStockThreshold = 10;
    const lowStockProducts = inventory.filter(
      product => product.quantity < lowStockThreshold
    );
    setLowStockCount(lowStockProducts.length);
  }, [inventory]);

  const handleBellClick = () => {
    setShowLowStockPopup(!showLowStockPopup);
  };

  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white w-full">
      {/* Left Section: Sidebar Toggle */}
      <div className="flex items-center">
        <MenuIcon
          className="h-6 w-6 cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
      </div>

      {/* Right Section: Bell Icon and Logout Button */}
      <div className="flex gap-5 items-center">
        {/* Bell Icon with Notification Dot */}
        <div className="relative">
          <BellIcon
            className="h-6 w-6 cursor-pointer"
            onClick={handleBellClick}
          />
          {lowStockCount > 0 && (
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          )}
          {showLowStockPopup && (
            <div className="absolute top-8 right-0 bg-red-500 text-white border border-gray-300 shadow-lg rounded-lg p-4 w-64">
              <p>
                {lowStockCount > 0
                  ? `You have ${lowStockCount} low stock product${
                      lowStockCount > 1 ? "s" : ""
                    }.`
                  : "All products are sufficiently stocked."}
              </p>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={logOut}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
