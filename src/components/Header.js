import { logDOM } from "@testing-library/react";
import React from "react";
import "./css/header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Fitha</h1>
      <nav className="header__navbar">
        <ul className="header__navlinks">
          <li>
            <a href="#">navlink 1</a>
            <a href="#">navlink 2</a>
            <a href="#">navlink 3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// header
// log
// navbar
