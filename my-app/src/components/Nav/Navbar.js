import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import "./Navbar.css";
import DarkMode from "../Controls/dark-mode/DarkMode.js";
import Search from "../Search/Search";

import { UpcomingContext } from "../API/UpcomingGet";
import { LatestContext } from "../API/LatestGet";

function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();

  const UpcomingText = useContext(UpcomingContext);
  const LatestText = useContext(LatestContext);

  const handleDisplayToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  useEffect(() => {
    navigate("MovieRating/latest");
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="primary-nav">
      <div id="wrapper">
        <div id="header">
          <div
            id="menu-icon"
            onClick={() => {
              handleDisplayToggle();
            }}>
            <AiOutlineMenu></AiOutlineMenu>
          </div>

          <div id="logo">
            <h1 className="logo-name">Movie Reviews</h1>
            <MdLocalMovies />
          </div>

          <DarkMode />
        </div>

        <div
          id="menu-list"
          className={displayMenu ? "menu-list-active" : "menu-list"}>
          <Link id="home" to={`/MovieRating/latest/${LatestText.page}`}>
            Home
          </Link>

          <Link
            to={
              UpcomingText.page === 0
                ? `/MovieRating/upcoming/1`
                : `/MovieRating/upcoming/${UpcomingText.page}`
            }>
            Upcoming
          </Link>
          <Link to="/MovieRating/about">About</Link>
        </div>

        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
