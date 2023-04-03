import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="MovieRating/about">About</Link>

      <div>
        <h3>Movies</h3>
        <Link to="MovieRating/movie/latest/1">lastest</Link>
        <Link to="MovieRating/movie/upcoming/1">upcoming</Link>
      </div>
      <div>
        <h3>TV Series</h3>
        <Link to="MovieRating/tvSeries/latest/1">Latest</Link>
        <Link to="MovieRating/tvSeries/upcoming/1">upcoming</Link>
      </div>
    </div>
  );
};
