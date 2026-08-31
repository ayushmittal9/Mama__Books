import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function viewProfile(userId) {
    navigate(`/profile/${userId.id}`, { state: userId });
  }

  return (
    <div className="navbar1-wrapper">
      <nav className="navbar1">
        <div className="logo1">
          Mama<span>Books</span>
        </div>
        <div className="search-bar">
          <input
            type="text"
            className="input"
            placeholder="Search for books..."
          />
          <button type="submit">Search</button>
        </div>
        <ul className="nav-links">
          {user === null ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </>
          ) : (
            <>
              <li style={{ marginTop: "8px" }}>
                <Link to="/contact">Contact</Link>
              </li>
              <li className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar cursor-pointer">
                  <div className="w-10 rounded-full">
                    <img
                      alt="User avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between" onClick={() => viewProfile(user)}>
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigate(`/yourbeg`)}>Your Beg</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                </ul>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
