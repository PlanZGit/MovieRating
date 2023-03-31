import React, { useContext } from "react";
import "./DarkMode.css";
import { AiFillSetting } from "react-icons/ai";

function DarkMode() {
  // console.log("render DarkMode");

  const handleBackGroundColor = (e) => {
    document.body.classList.toggle("dark-mode");
    // console.log(setting.color);
  };

  return (
    <label className="switch">
      <input type="checkbox" onChange={(e) => handleBackGroundColor(e)} />
      <AiFillSetting className="inside" />
      <span className="slider"></span>
    </label>
  );
}

export default React.memo(DarkMode);
