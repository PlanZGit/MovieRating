import React, { useContext, useRef } from "react";
import "./Search.css";
import { GoSearch } from "react-icons/go";
import { MovieContext } from "../API/DataAxiosGet";

function Search() {
  const inputRef = useRef(null);
  const movies = useContext(MovieContext);
  // console.log(movies);

  let filterMovie = [];
  const handleSerach = (e) => {
    filterMovie = movies.filter((obj) =>
      obj.titleText["text"].toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(filterMovie);
  };

  const handleFocus = () => {
    console.log("focus");
    let dropDown = document.getElementById("search-dropdown-movie");
    dropDown.style.display = "block";
  };

  const handleBlur = () => {
    console.log("blur");
    let dropDown = document.getElementById("search-dropdown-movie");
    dropDown.style.display = "none";
  };

  // Need to add a page filter
  // MovieReview/search/filter="sup"
  return (
    <div>
      <div className="search-container">
        <input
          placeholder="Search"
          ref={inputRef}
          onChange={(e) => handleSerach(e)}
          onFocus={() => {
            handleFocus();
          }}
          onBlur={() => {
            handleBlur();
          }}
        />
        <GoSearch />

        <div className="search-dropdown-movie" id="search-dropdown-movie">
          {/* {filterMovie.map{}} */}
          <div className="search-parent-container">
            <div className="child-container">
              <div className="search-dropdown-movie-img"></div>
              <div className="search-dropdown-movie-details"></div>
            </div>
            <div className="child-container">
              <div className="search-dropdown-movie-img"></div>
              <div className="search-dropdown-movie-details"></div>
            </div>
            <div className="child-container">
              <div className="search-dropdown-movie-img"></div>
              <div className="search-dropdown-movie-details"></div>
            </div>
            <div className="child-container">
              <div className="search-dropdown-movie-img"></div>
              <div className="search-dropdown-movie-details"></div>
            </div>
            <div className="child-container">
              <div className="search-dropdown-movie-img"></div>
              <div className="search-dropdown-movie-details"></div>
            </div>

            <a className="view-all">View all Results</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
