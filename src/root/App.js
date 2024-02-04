import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Home from '../components/admin/sidebar/Sidebar';
import Login from '../components/admin/auth/sigin';
import SidebarCom from '../components/admin/sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
      <Routes>
          <Route path='login' element={<Login />} />
          <Route path='admin/home' element={<Home />} />
=======
        <Routes>
          <Route path='/admin' element={<Login />} />
          <Route path='admin/home' element={<SidebarCom />} />
>>>>>>> d79153e5882ddb54bf864723fbe999c095fbd871
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
