import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";

import "./Search.css";
//Fix dark-mode
// import { SettingContext } from "../../App";

function Search() {
  // const setting = useContext(SettingContext);

  const inputRef = useRef(null);
  const [filterMovies, setFilterMovies] = useState([]);

  const handleChange = (e) => {
    //diplay block if input length > 0, else call handleBlur
    // if (e.target.value.length > 0) {
    //   let dropDown = document.getElementById("search-dropdown-movie");
    //   dropDown.style.display = "block";
    // } else {
    //   reset();
    // }
    // //filter search , grab only top 5
    // let filterArray = movies.filter((obj) =>
    //   obj.titleText["text"].toLowerCase().includes(e.target.value.toLowerCase())
    // );
    // if (filterArray.length > 5) {
    //   filterArray.length = 5;
    // }
    // //set results
    // setFilterMovies(filterArray);
  };

  // const reset = () => {
  //   //clear input value, clear filterMovies, display none
  //   if (
  //     document.getElementById("search-dropdown-movie").style.display === "block"
  //   ) {
  //     inputRef.current.value = "";
  //     setFilterMovies([]);
  //     let dropDown = document.getElementById("search-dropdown-movie");
  //     dropDown.style.display = "none";
  //   }
  // };

  useEffect(() => {
    // document.addEventListener("click", reset);
    // return () => {
    //   document.removeEventListener("click", reset);
    // };
  }, []);

  return (
    <div>
      <form className="search-container">
        <input
          placeholder="Search movie title"
          onChange={(e) => handleChange(e)}
          ref={inputRef}
        />

        <button>
          <GoSearch />
        </button>

        {/* <div
          className="search-dropdown-movie"
          id="search-dropdown-movie"
          // style={{
          //   backgroundColor: setting.color ? "rgb(37, 37, 37)" : "white",
          // }}
        >
          <div className="search-parent-container">
            {filterMovies.map((obj) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/MovieReview/MovieDetail/${obj.id}`}
                  className="child-container"
                  key={obj.id}
                  onClick={() => reset()}>
                  <img
                    src={obj.primaryImage["url"]}
                    alt="img"
                    className="search-dropdown-movie-img"></img>

                  <div
                    className="search-dropdown-movie-details"
                    // style={{
                    //   color: setting.color ? "white" : "",
                    // }}
                  >
                    <p style={{ fontWeight: "bold" }}>
                      {obj.titleText["text"]}
                    </p>
                    <p style={{ fontSize: "12px" }}>
                      {obj.releaseDate["year"]} &#x2022;
                      {obj.runtime["seconds"] / 60}
                      mins
                    </p>
                  </div>
                </Link>
              );
            })}

            {filterMovies.length > 4 ? (
              <Link
                to={`/MovieReview/search/${inputRef.current.value}`}
                className="view-all">
                View all Results
              </Link>
            ) : null}
          </div>
        </div> */}
      </form>
    </div>
  );
}

export default Search;
