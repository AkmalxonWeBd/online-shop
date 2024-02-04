import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Home from '../components/admin/sidebar/Sidebar';
import Login from '../components/admin/auth/sigin';
import SidebarCom from '../components/admin/sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Login />} />
          <Route path='admin/home' element={<SidebarCom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
