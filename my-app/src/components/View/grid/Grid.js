import React from "react";
import { Link } from "react-router-dom";

import "./Grid.css";

function Grid(props) {
  const { movies } = props;

  // console.log(movies, " Grid");
  return (
    <div className="flex">
      {movies.map((obj) => {
        let color = "rgb(189, 215, 60)";
        let rate = "N/A";
        let image = "NA";

        //Check if obj value exist
        if (obj.primaryImage != null) {
          image = obj.primaryImage.url;
        }
        if (typeof obj.ratingsSummary !== "undefined") {
          rate = obj.ratingsSummary["aggregateRating"];
        }
        if (typeof rate === "number") {
          color =
            rate > 5
              ? "rgb(189, 215, 60)"
              : rate > 3
              ? "rgb(215, 135, 60)"
              : "rgb(215, 60, 60)";
        }

        return (
          <div className="flex-container" key={obj.id}>
            <Link to={`/MovieRating/MovieTemplate/${obj.id}`}>
              <img className="image" alt={obj.titleText.text} src={image}></img>
            </Link>

            <div className="title">{obj.titleText.text}</div>
            <div
              className="rate"
              style={{
                backgroundColor: color,
              }}>
              {rate}
            </div>
            <div className="released">
              {obj.releaseDate === null ? "N/A" : obj.releaseDate.year}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
