import React from 'react';
import './header.css';
import logo from './logo.png';


const Header = () => (
  <div className="header">
    <div className="nav-bar">
    <img src={logo} alt="logo" width="6%" height="40px"/>
<a href="url"className="link">logout</a>
    </div>
  </div>
);
export default Header;
