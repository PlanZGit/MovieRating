import React from "react";
import "./Grid.css";

let movies = [
  {
    src: "//www.html.am/images/html-codes/links/boracay-white-beach-sunset-300x225.jpg",
    title: "movie1",
    time: "120min",
    id: 1,
  },
  {
    image: "url",
    title: "movie2",
    time: "120min",
    id: 2,
  },
  {
    image: "url",
    title: "movie2",
    time: "120min",
    id: 3,
  },
  {
    image: "url",
    title: "movie1",
    time: "120min",
    id: 4,
  },
  {
    image: "url",
    title: "movie2",
    time: "120min",
    id: 5,
  },
  {
    image: "url",
    title: "movie2",
    time: "120min",
    id: 6,
  },
];

function Grid() {
  return (
    <div className="grid">
      {movies.map((obj) => {
        return (
          <div className="grid-container" key={obj.id}>
            <img className="image" alt="IMG" src={obj.src}></img>
            <div className="title">{obj.title} Title xxxxxxx</div>
            <div className="rate">1/10</div>
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
