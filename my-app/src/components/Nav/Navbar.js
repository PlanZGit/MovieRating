import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";

import Search from "../Search/Search";
import DarkMode from "../Controls/dark-mode/DarkMode.js";
import "./Navbar.css";

function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  //Close and Open Modal
  const handleDisplayToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  //Close Modal if click outside, use closest to check
  const handleMenuClose = (e) => {
    if (displayMenu) {
      if (e.target.closest("#menu") === null) {
        setDisplayMenu(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleMenuClose);
    return () => {
      window.removeEventListener("click", handleMenuClose);
    };

    // eslint-disable-next-line
  }, [displayMenu]);

  return (
    <nav className="primary-nav">
      <div id="wrapper">
        <div id="header">
          <div id="menu">
            <div
              id="menu-list"
              className={displayMenu ? "menu-list-active" : "menu-list"}>
              <Link id="home" to={`/MovieRating/latest/1`}>
                Home
              </Link>

              <Link to={`/MovieRating/upcoming/1`}>Upcoming</Link>

              <Link to="/MovieRating/about">About</Link>
            </div>

            <div
              id="menu-icon"
              onClick={() => {
                handleDisplayToggle();
              }}>
              <AiOutlineMenu></AiOutlineMenu>
            </div>
          </div>

          <div id="logo">
            <h1 className="logo-name">Movie Reviews</h1>
            <MdLocalMovies />
          </div>

          <DarkMode />
        </div>
        <Search />
      </div>
    </nav>
  );
}

export default React.memo(Navbar);
