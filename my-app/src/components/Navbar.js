import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import "./Navbar.css";
import Slider from "./slider/Slider.js";
import Search from "./search/Search";

function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleDisplayToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <nav className="primary-nav">
      <div id="wrapper">
        <div id="header">
          <div
            id="menu-icon"
            onClick={() => {
              handleDisplayToggle();
            }}
          >
            <AiOutlineMenu></AiOutlineMenu>
          </div>

          <div id="logo">
            <h1 className="logo-name">Movie Reviews</h1>
            <MdLocalMovies />
          </div>

          <Slider />
        </div>

        <div
          id="menu-list"
          className={displayMenu ? "menu-list-active" : "menu-list"}
        >
          <Link id="home" to="/MovieReview">
            Home
          </Link>
          <Link to="/MovieReview/products">Products</Link>
          <Link to="/MovieReview/about">About</Link>
        </div>

        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
