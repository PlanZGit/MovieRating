import React, { useContext, useState } from "react";
import "./Search.css";
import { GoSearch } from "react-icons/go";
import { MovieContext } from "../API/DataAxiosGet";

function Search() {
  const movies = useContext(MovieContext);
  const [filterMovies, setFilterMovies] = useState([]);

  const handleChange = (e) => {
    //diplay block if input length > 0, else call handleBlur
    if (e.target.value.length > 0) {
      let dropDown = document.getElementById("search-dropdown-movie");
      dropDown.style.display = "block";
    } else {
      handleBlur(e);
    }

    //filter search , grab only top 5
    let filterArray = movies.filter((obj) =>
      obj.titleText["text"].toLowerCase().includes(e.target.value.toLowerCase())
    );
    filterArray.length = 5;

    //set results
    setFilterMovies(filterArray);
  };

  const handleBlur = (e) => {
    //clear input value, clear filterMovies, display none
    e.target.value = "";
    let dropDown = document.getElementById("search-dropdown-movie");
    dropDown.style.display = "none";
    setFilterMovies([]);
  };

  //TODO
  // Need to add a page filter
  // MovieReview/search/filter="sup"
  return (
    <div>
      <div className="search-container">
        <input
          placeholder="Search"
          onChange={(e) => handleChange(e)}
          onBlur={(e) => {
            handleBlur(e);
          }}
        />

        {/* icon */}
        <GoSearch />

        <div className="search-dropdown-movie" id="search-dropdown-movie">
          <div className="search-parent-container">
            {filterMovies.map((obj) => {
              return (
                <div className="child-container" key={obj.id}>
                  <img
                    src={obj.primaryImage["url"]}
                    alt="img"
                    className="search-dropdown-movie-img"
                  ></img>

                  <div className="search-dropdown-movie-details">Details</div>
                </div>
              );
            })}

            {/* 
            <div className="child-container">
              <div className="search-dropdown-movie-img">IMG</div>
              <div className="search-dropdown-movie-details">
                <p>
                  Test as asd asd asd asd asd <br /> asd a sd as d asd a sd
                  asdal
                </p>
              </div>
            </div> */}

            {/* if more then 5 */}
            {/* <a href="#" className="view-all">
              View all Results
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
