import React, { useContext } from "react";
import "./DarkMode.css";
import { AiFillSetting } from "react-icons/ai";
import { SettingContext } from "../../App.js";

function DarkMode() {
  const setting = useContext(SettingContext);

  const handleBackGroundColor = (e) => {
    document.body.classList.toggle("dark-mode");

    if (!e.target.checked) {
      setting.color = false;
    } else {
      setting.color = true;
    }
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

export default DarkMode;
