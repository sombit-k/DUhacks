import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Dashboard() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isVisible={isSidebarVisible} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-5">
          {/* charts and all products components add here*/}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
