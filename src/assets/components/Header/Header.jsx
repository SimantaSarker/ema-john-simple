import React from "react";
import "./Header.css";
import logo from "../../../images/Logo.svg";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <h1>Simanta</h1>
        <a href="">Order</a>
        <a href="">Order Review</a>
        <a href="">Manage Inventory</a>
        <a href="">Login</a>
      </div>
    </nav>
  );
};

export default Header;
