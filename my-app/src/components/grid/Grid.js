import React, { useContext } from "react";
import { MovieContext } from "../API/DataAxiosGet";
import "./Grid.css";

function Grid() {
  const movies = useContext(MovieContext);
  // console.log(movies);

  return (
    <div className="grid">
      {movies.map((obj) => {
        return (
          <div className="grid-container" key={obj.id}>
            <img className="image" alt={obj.title} src={obj.cover}></img>
            <div className="title">{obj.title.toUpperCase()}</div>
            <div className="rate">{obj.rate}/10</div>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
