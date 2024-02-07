import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// import Sidebar from "../sidebar/Sidebar";
// import TopHeader from "../TopHeader";
import SidebarCom from "../admin/sidebar/Sidebar";
import TopHeader from "../admin/TopHeader";
// import Topheder from "../topheader/TopHeader.jsx";
// import SecondSidebar from "../sidebar/SecondSidebar";
export default function Layout() {
  const token = "1";

  return (
        <div className="flex">
          <SidebarCom />
          <div className="w-full layout">
        <TopHeader/>
            <Outlet />
          </div>
        </div>
  );
}