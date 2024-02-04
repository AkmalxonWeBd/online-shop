import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import {
  MdOutlineAddPhotoAlternate,
  MdOutlineDashboard,
  MdOutlineDiscount,
} from "react-icons/md";
import { PiTaxi, PiUsersFourLight } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiCategoryAlt } from "react-icons/bi";

const Home = () => {
  const menus = [
    { id: 3, name: "Boshqaruv paneli", link: "/home", icon: GoHome },
    { name: "Buyurtmalar", link: "/order", icon: PiUsersFourLight },
    {
      name: "Asosiy sahifa rasmi",
      link: "/banners",
      icon: MdOutlineAddPhotoAlternate,
    },
    { name: "Mahsulotlar", link: "/products", icon: MdOutlineDashboard },
    { name: "Chegirma", link: "/discount", icon: MdOutlineDiscount },
    { name: "Katta Turkum", link: "/categories", icon: BiCategoryAlt },
    {
      name: "Kichik Turkum",
      link: "/subcategories",
      icon: BiCategoryAlt,
      margin: true,
    },
    { name: "Yetkazib berish", link: "/deliveries", icon: PiTaxi },
    { name: "Yon daftarcha", link: "/note", icon: TbReportAnalytics },
  ];

  const [open, setOpen] = useState(true);

  const handleSidebarToggle = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button
        onClick={handleSidebarToggle}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          open ? "-translate-x-full sm:translate-x-0" : "translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {menus.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <menu.icon className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                  <span className="ms-3">{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {/* ... (your placeholder content) */}
        </div>
      </div>
    </div>
  );
};

export default Home;
