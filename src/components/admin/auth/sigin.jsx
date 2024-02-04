import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const checkLogin = () => {
    if (username === 'admin' && password === '123') {
      // Foydalanuvchi nomi va parol to'g'ri bo'lsa
      // Ma'lumotlarni saqlash yoki kerakli sahifaga o'tish
      // Masalan, localStorage yoki qo'shimcha sahifa nomini ishlatish mumkin
      localStorage.setItem('isLoggedIn', 'true');
      // Keyin boshqa sahifaga o'tish
      navigate('/admin/home');
    } else {
      alert("Noto'g'ri foydalanuvchi nomi yoki parol. Iltimos, qaytadan urinib ko'ring.");
    }
  };

  return (
    <div className='hbvsdj'>
      <div className="box">
        <div className="login">
          <div className="loginBx">
            <h1>Kirish</h1>
            <div className="inputBox">
              <input
                id="username"
                className="user"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span>Login</span>
            </div>
            <div className="inputBox">
              <input
                id="password"
                className="pw"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>password</span>
            </div>
            <input
              className="submit"
              type="submit"
              value="Kirish"
              onClick={checkLogin}
            />
          </div>
          <div className='group'>
            <h1>Parol yo'qmi</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
