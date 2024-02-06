import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from '../components/admin/sidebar/Sidebar';
import Login from '../components/admin/auth/sigin';
import SidebarCom from '../components/admin/sidebar/Sidebar';
import DeleteBanners from '../components/banner/DeleteBanners';
import AddBanners from '../components/banner/AddBanners';
import Banners from '../components/banner/Banners';
// Import the components


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Login />} />
          <Route path='/admin/home' element={<SidebarCom />}>
            // Nested Routes within Sidebar Component
            <Route index element={<Home />} /> // Assuming you want to show something at /admin/home
            <Route path='banners' element={<Banners />} />
            <Route path='add-banners' element={<AddBanners />} />
            <Route path='deletebanner' element={<DeleteBanners />} />
            <Route path='updatebanner' element={<UpdateBanners />} />
            // Assuming DeleteBanners and UpdateBanners are modal components that are part of Banners, no separate route might be needed
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;