import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="MovieRating/latest/1">Latest</Link>
      <Link to="MovieRating/upcoming/1">Upcoming</Link>
      <Link to="MovieRating/about">About</Link>
    </div>
  );
};
