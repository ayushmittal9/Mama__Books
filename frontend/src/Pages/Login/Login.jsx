import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:1002/formData')
      .then((res) => {
        console.log(res.data);
        setAdmins(res.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 function login_admin(e) {
  e.preventDefault();

  const loggedUser = admins.find(
    (admin) => admin.username === username && admin.password === password
  );

  if (loggedUser) {
    localStorage.setItem("userId", loggedUser.id);
    localStorage.setItem("username", loggedUser.username);
    localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));

    toast.success("Login successful");

    navigate('/');
  } else {
    toast.error("Login error - Invalid username or password");
  }
}



  return (
    <div className="Login">
      <form onSubmit={login_admin}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;