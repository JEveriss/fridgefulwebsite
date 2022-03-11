import React from "react";
import "./header.scss";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <nav className="header">
      <Link activeClass="active" to="home" spy={true} smooth={true}>
        <h3>Home</h3>
      </Link>

      <Link to="about" spy={true} smooth={true}>
        <h3> About </h3>
      </Link>

      <Link to="contact" spy={true} smooth={true}>
        <h3>Contact </h3>
      </Link>
    </nav>
  );
}
