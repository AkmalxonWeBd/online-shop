<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Home from '../components/admin/sidebar/Sidebar';
import Login from '../components/admin/auth/sigin';
import Table from '../components/admin/categoriesCrud/Table';
import SidebarCom from '../components/admin/sidebar/Sidebar';
=======
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from '../components/admin/layout/index.jsx';;
import Login from '../components/admin/auth/sigin.jsx';
// import HomePage from '../components/pages/client/home/index.jsx';
import Dasjboard from '../components/admin/Dasjboard/Dasjboard.jsx';

>>>>>>> e9b88470c83798b5b42cf955dfdc526b26d0dbd5
function App() {
  const location = useLocation();
  const isClientPage = !location.pathname.startsWith('/admin');

  const is_admin = localStorage.getItem("token");


  return (
    <>
      <NavbarMobile/>
     
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/categories/:id" element={<CategoryIdPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path='basket' element={<BaskerPage />} />
        <Route path="/admin" element={<Login />} />
        
        {
          is_admin ? (
            <Route element={<Layout />}>
              <Route path="/admin/home" element={<Dasjboard />} />
              <Route path="/admin/order" element={<OrderCrud />} />
              <Route path="/admin/subcategories" element={<SubcategorieCom />} />
              <Route path="/admin/banners" element={<Banners />} />
              <Route path="/admin/dashbord" element={<ProductTable />} />
              <Route path="/admin/discount" element={<DiscountTbale />} />
              <Route path="/admin/categories" element={<CategoriesCrud />} />
              <Route path="/admin/products" element={<ProductCrud />} />
              <Route path="/admin/deliveries" element={<Deliveries />} />
              <Route path="/admin/note" element={<NoteTable />} />
            </Route>
          ) : null
          // <Route path="/admin/*" element={<Login />} />
        }
        <Route path="/*" element={
          <NotFound is_admin={is_admin} />
        } />
      </Routes>

    </>
  );
}

export default App;