import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from '../login/login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        {/* <Route path='admin' element={}/> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
