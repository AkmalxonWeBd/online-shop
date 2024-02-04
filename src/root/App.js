import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../login/login';
import Home from '../components/admin/sidebar/Sidebar';
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
