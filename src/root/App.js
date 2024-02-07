<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Login from '../components/admin/auth/sigin';
import SidebarCom from '../components/admin/sidebar/Sidebar';
import Table from '../components/admin/categoriesCrud/Table';
=======
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
>>>>>>> 049116e833f86b04b7565394a57c6bbb237460ba
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Login />} />
          <Route path='/admin/home' element={<SidebarCom />} />
          <Route path='/admin/categories' element={<Table/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
