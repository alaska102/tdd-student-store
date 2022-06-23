import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Logo />

        <p className="nav-link">Home</p>
        <p className="nav-link">About Us</p>
        <p className="nav-link">Contact Us</p>
        <p className="nav-link">Buy Now</p>

      </div>
    </nav>
  );
}