import * as React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import {Link} from 'react-scroll';



export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Logo />
        <Link activeClass="active" to="hero" spy={true} smooth={true} className="nav-link">Home</Link>
        <Link to="about" spy={true} smooth={true} className="nav-link">About Us</Link>
        <Link to="contact" spy={true} smooth={true} className="nav-link">Contact Us</Link>
        <Link to="product-grid" spy={true} smooth={true} className="nav-link">Buy Now</Link>

      </div>
    </nav>
  );
}