import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiFillSetting } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import "./Navbar.css";

function Navbar() {
  const menuRef = useRef(null);
  const [displayMenu, setDisplayMenu] = useState(false);

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
            <p>LOGO</p>
            <MdLocalMovies />
          </div>

          <div id="menu-icon" style={{ right: "32px" }}>
            <AiFillSetting />
          </div>
        </div>

        <div
          id="menu-list"
          ref={menuRef}
          style={displayMenu ? showStyle : hideStyle}
        >
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/products">Products</Link>
        </div>

        <input></input>
      </div>
    </nav>
  );
}

export default Navbar;
