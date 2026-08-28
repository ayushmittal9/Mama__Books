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
  const [showPassword, setShowPassword] = useState(false);
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

  function login_google() {
    // TODO: hook up real Google OAuth (e.g. @react-oauth/google or Firebase Auth)
    toast.info("Google login not connected yet");
  }

  function login_facebook() {
    // TODO: hook up real Facebook Login SDK
    toast.info("Facebook login not connected yet");
  }

  return (
    <div className="login-page">
      {/* Left image panel */}
      <div className="login-image-panel">
        <div className="login-image-overlay"></div>
      </div>

      {/* Right form panel */}
      <div className="login-form-panel">
        <div className="login-form-wrapper">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Please sign in to continue</p>

          <form onSubmit={login_admin}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <div className="input-with-icon">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="8" r="4" stroke="#94A3B8" strokeWidth="1.5"/>
                </svg>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-with-icon">
                <svg className="input-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="11" width="14" height="9" rx="2" stroke="#94A3B8" strokeWidth="1.5"/>
                  <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="#94A3B8" strokeWidth="1.5"/>
                </svg>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-visibility"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#!" className="forgot-link">Forgot password?</a>
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-btn google-btn" onClick={login_google}>
              <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.4C29.6 35.4 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.6 5.1C9.5 39.6 16.2 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.6 5.4C41.5 35.9 44 30.3 44 24c0-1.2-.1-2.4-.4-3.5z"/>
              </svg>
              Google
            </button>
            <button type="button" className="social-btn facebook-btn" onClick={login_facebook}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill="#1877F2"/>
                <path d="M15.893 14.89 16.336 12h-2.773V10.124c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.195-2.238-.195c-2.285 0-3.777 1.384-3.777 3.89V12h-2.54v2.89h2.54v6.988a10.06 10.06 0 0 0 3.12 0V14.89h2.335z" fill="#fff"/>
              </svg>
              Facebook
            </button>
          </div>

          <p className="signup-text">
            Don't have an account? <a href="#!">Sign up</a>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Login;