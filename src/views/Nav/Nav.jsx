import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Weather App</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a onClick={() => navigate("/")}>Main</a>
        <a onClick={() => navigate("/favorites")}>Favorites</a>
      </div>
    </nav>
  );
};

export default Nav;
