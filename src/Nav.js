import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/reserve">RESERVATIONS</Link></li>
        <li><Link to="/menu">MENU</Link></li>
        <li><Link to="/order">ORDER ONLINE</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
