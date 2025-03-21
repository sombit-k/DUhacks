import React from "react";
import { SearchIcon, BellIcon, MenuIcon } from "lucide-react";
import { useAuthStore } from "../../store/useAuthstore";
function Header({ toggleSidebar }) {
  const { logOut } = useAuthStore();


  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white w-full">
      <div className="flex gap-2 items-center p-2 rounded-md border max-w-lg bg-white">
        <SearchIcon className="text-black" />
        <input
          type="text"
          placeholder="Search ..."
          className="outline-none bg-white text-black"
        />
      </div>

      <div className="flex gap-5 items-center">
        <BellIcon className="h-6 w-6 cursor-pointer" />
        <button
          onClick={logOut}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 transition-colors duration-300"
        >
          Logout
        </button>
        <MenuIcon
          className="h-6 w-6 cursor-pointer lg:hidden"
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
}

export default Header;
