import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__logo">Fitha</h1>
      <nav className="header__navbar">
        <ul className="header__navlinks">
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/top_rated">Top Rated</Link>
          </li>
          <li>
            <Link to="/upcoming">Upcoming</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
