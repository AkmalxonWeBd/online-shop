import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../components/admin/sidebar/Sidebar';
import Login from '../components/admin/auth/sigin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='login' element={<Login />} />
          <Route path='admin/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
