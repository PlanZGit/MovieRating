import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import "./Navbar.css";
import Slider from "./slider/Slider.js";

let renderMENU = false;

function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    console.log("running");
    renderMENU = true;
  }, []);

  const handleDisplayToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  const showStyle = {
    animation: "growDown .15s ease-out 0s 1 normal forwards",
  };

  const hideStyle = {
    animation: "shrinkDown .4s ease-out 0s 1 normal forwards",
  };

  return (
    <nav className="primary-nav">
      <div id="wrapper">
        <div id="header">
          <div id="menu-icon">
            <AiOutlineMenu
              onClick={() => {
                handleDisplayToggle();
              }}
            ></AiOutlineMenu>
          </div>

          <div id="logo">
            <strong>LOGO</strong>
            <MdLocalMovies />
          </div>

          <Slider />
        </div>
        {renderMENU ? (
          <div
            className="menu-list"
            style={displayMenu ? showStyle : hideStyle}
          >
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/products">Products</Link>
          </div>
        ) : null}

        <input></input>
      </div>
    </nav>
  );
}

export default Navbar;
