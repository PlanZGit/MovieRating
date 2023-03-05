import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const menuRef = useRef(null);
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleDisplayToggle = () => {
    setDisplayMenu(!displayMenu);
  };

  const showStyle = {
    animation: "growDown 400ms ease-out 0s 1 normal forwards",
    display: "flex",
  };
  const hideStyle = {
    // animation: "shrinkDown 400ms ease-out 0s 1 normal forwards",
  };
  console.log(displayMenu);

  //Create timer for animation then display to none
  useEffect(() => {
    if (!displayMenu) {
      // menuRef.current.style = { display: "none" };
      // console.log((menuRef.current.style = { display: "none" }));
    }
  }, [displayMenu]);

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
