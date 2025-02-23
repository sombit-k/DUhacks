import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chart from "./Chart";
// import Loader from "./utils/Loader";
// import TableDemo from "./Table.jsx";
function Dashboard() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen bg-slate-200">
      <Sidebar isVisible={isSidebarVisible} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="p-5">
          <Chart />
          {/* charts and all products components add here*/}
          {/* <Loader /> */}
          {/* <TableDemo /> */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
