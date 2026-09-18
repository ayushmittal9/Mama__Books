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

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/");
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
              <li className="dropdown dropdown-end profile-dropdown-container">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar cursor-pointer">
                  <div className="w-10 rounded-full border-2 border-white shadow-sm">
                    <img
                      alt="User avatar"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content profile-dropdown-menu rounded-box mt-3 w-52 p-2 shadow-lg"
                >
                  <li className="user-info-header px-3 py-2 text-sm border-b mb-1">
                    <span className="font-semibold block truncate text-slate-800">
                      {user?.username || user?.email || "User Profile"}
                    </span>
                  </li>
                  <li>
                    <a className="justify-between" onClick={() => user && viewProfile(user)}>
                      Profile
                      <span className="badge badge-primary badge-sm">New</span>
                    </a>
                  </li>
                  <li>
                    <a onClick={() => navigate(`/yourbeg`)}>Your Beg</a>
                  </li>
                  <li>
                    <a onClick={() => user?.id && navigate(`/profile/${user.id}`, { state: user })}>Settings</a>
                  </li>
                  <li className="border-t mt-1 pt-1">
                    <a className="text-red-600 hover:text-red-700 font-medium" onClick={handleLogout}>
                      Logout
                    </a>
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
