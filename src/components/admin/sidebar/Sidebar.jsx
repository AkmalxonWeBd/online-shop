import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { MdOutlineAddPhotoAlternate, MdOutlineDashboard, MdOutlineDiscount } from "react-icons/md";
import { PiTaxi, PiUsersFourLight } from "react-icons/pi";
import { TbReportAnalytics } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SlNote } from "react-icons/sl";
import { BiCategoryAlt } from "react-icons/bi";
const Home = () => {
  const navigate = useNavigate();
  const path_name=useLocation();

  const menus = [
    { name: "Boshqaruv paneli", link: "/home", icon: GoHome },
    { name: "Buyurtmalar", link: "/order", icon: PiUsersFourLight },
    { name: "Asosiy sahifa rasmi", link: "/banners", icon: MdOutlineAddPhotoAlternate },
    { name: "Mahsulotlar", link: "/products", icon: MdOutlineDashboard },
    { name: "Chegirma", link: "/discount", icon: MdOutlineDiscount },
    { name: "Katta Turkum", link: "/categories", icon: BiCategoryAlt },
    { name: "Kichik Turkum", link: "/subcategories", icon: BiCategoryAlt, margin: true },
    { name: "Yetkazib berish", link: "/deliveries", icon: PiTaxi },
    { name: "Yon daftarcha", link: "/note", icon: TbReportAnalytics },
  ];

  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div
        className={`bg-white min-h-screen ${open ? "w-72" : "w-16"
          } duration-500 text-gray-100 px-4 h-96 overflow-x-auto`}
      >

        <div className="py-3 flex justify-end text-center items-center gap-6">
          <Link to={"/admin/home"} className={`no-underline ${open ? "block" : "hidden"}`}>
            <h1 className="text-black">Omo Food</h1>
          </Link>

          {open ? (
            <FiArrowRight
              className="cursor-pointer text-black text-2xl"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <FiArrowLeft
              className="cursor-pointer text-black text-2xl" // Adjust the font size here
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
         <div key={i} className="" onClick={() => navigate(`/admin${menu?.link}`)}>
         <Link
           to={`/admin${menu.link}`}
           className={`${menu?.margin && ""} ${path_name.pathname===`/admin${menu.link}`? "actives text-white" : "text-black"} group flex items-center text-sm no-underline text-center gap-3.5 font-medium p-2 rounded-md`}
         >
           <h1 className="text-xl  ">{React.createElement(menu?.icon)}</h1>
           <h2
            //  style={{
            //    transitionDelay: `${i + 3}00ms`,
            //  }}
             className={`text-xl  ${!open && "opacity-0 translate-x-28 overflow-hidden"
               }`}
           >
             {menu?.name}
           </h2>
         </Link>
<<<<<<< HEAD
         <li className='sidebar'>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Kichik Turkum</span>
            </a>
         </li>
         <li className='sidebar'>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M240,112H228.64L201.25,64.06A16,16,0,0,0,187.36,56H165.42l-12-29.94A15.93,15.93,0,0,0,138.58,16H117.42a15.93,15.93,0,0,0-14.86,10.06L90.58,56H68.64a16,16,0,0,0-13.89,8.06L27.36,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM117.42,32h21.16l9.6,24H107.82ZM68.64,72H187.36l22.85,40H45.79ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z"></path></svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Yetkazib Berish</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
=======
       </div>
          ))}
        </div>
>>>>>>> e9b88470c83798b5b42cf955dfdc526b26d0dbd5

      </div>
    </section>
  );
};

export default Home;
  