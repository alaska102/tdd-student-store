import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Logo />
        <p className="nav-link"><Link to="/" style={{ textDecoration: 'none' , color: 'white'}}>Home</Link></p>
        <p className="nav-link">About Us</p>
        <p className="nav-link">Contact Us</p>
        <p className="nav-link">Buy Now</p>

      </div>
    </nav>
  );
}