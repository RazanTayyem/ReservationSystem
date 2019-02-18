import React from "react";
import "./NavBar.css";
import logo from "./logo.png";
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div className="nav-outer">
    <div className="nav-bar1">
      <Link to="/events"><img className="logo" src={logo} alt="logo" /></Link>
      <button className="logout-btn">log out</button>
    </div>
  </div>
);
export default NavBar;
