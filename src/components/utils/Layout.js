// Layout.jsx

import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Header from "../Dashboard/Header";

const Layout = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default Layout;
