import React from "react";
import { Link } from "react-router-dom";

const SearchModal = () => {
  return (
    <>
      <div
        className="search-dropdown-movie"
        id="search-dropdown-movie"
        // style={{
        //   backgroundColor: setting.color ? "rgb(37, 37, 37)" : "white",
        // }}
      >
        <div className="search-parent-container">
          {/* {filterMovies.map((obj) => {
            return (
              <Link
                style={{ textDecoration: "none" }}
                to={`/MovieReview/MovieDetail/${obj.id}`}
                className="child-container"
                key={obj.id}
                // onClick={() => reset()}
              >
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
                  <p style={{ fontWeight: "bold" }}>{obj.titleText["text"]}</p>
                  <p style={{ fontSize: "12px" }}>
                    {obj.releaseDate["year"]} &#x2022;
                    {obj.runtime["seconds"] / 60}
                    mins
                  </p>
                </div>
              </Link>
            );
          })} */}

          <a className="child-container">
            <img alt="img" className="search-dropdown-movie-img"></img>
            <div className="search-dropdown-movie-details"></div>
          </a>

          {/* {filterMovies.length > 4 ? (
            <Link
              to={`/MovieReview/search/${inputRef.current.value}`}
              className="view-all">
              View all Results
            </Link>
          ) : null} */}
        </div>
      </div>
    </>
  );
};

export default SearchModal;
