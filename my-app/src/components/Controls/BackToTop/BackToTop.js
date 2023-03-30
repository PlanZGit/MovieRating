import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import "./BackToTop.css";
function BackToTop() {
  // console.log("render BackToTop");

  const BackTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    let x = document.getElementById("BackTop");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div className="container">
      <BsArrowUpCircleFill
        id="BackTop"
        className="BackTop"
        onClick={() => BackTop()}
      />
    </div>
  );
}

export default BackToTop;
