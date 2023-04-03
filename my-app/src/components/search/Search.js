import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";

import "./Search.css";
// import SearchModal from "./SearchModal";

function Search() {
  const navigate = useNavigate();
  const inputRef = useRef(null);

  // const handleChange = (e) => {
  //   // //diplay block if input length > 0, else call handleBlur

  //   if (e.target.value.length === 0) {
  //     closeModal();
  //     clearInput();
  //   }
  //   if (e.target.value.length > 1) {
  //     let dropDown = document.getElementById("search-dropdown-movie");
  //     dropDown.style.display = "block";
  //   }

  //   // //filter search , grab only top 5
  //   // let filterArray = movies.filter((obj) =>
  //   //   obj.titleText["text"].toLowerCase().includes(e.target.value.toLowerCase())
  //   // );
  //   // if (filterArray.length > 5) {
  //   //   filterArray.length = 5;
  //   // }
  //   // //set results
  //   // setFilterMovies(filterArray);
  // };

  // const closeModal = () => {
  //   let dropDown = document.getElementById("search-dropdown-movie");
  //   //clear input value, clear filterMovies, display none
  //   if (dropDown.style.display === "block") {
  //     // setFilterMovies([]);
  //     dropDown.style.display = "none";
  //   }
  // };

  const clearInput = () => {
    inputRef.current.value = "";
    inputRef.current.blur();
  };

  const handleSubmit = (event) => {
    // searchMovie("movieByTitle", inputRef.current.value);
    event.preventDefault();
    // console.log("Submiting.....");
    if (inputRef.current.value) {
      navigate("/MovieRating/" + inputRef.current.value + "/searchResults/1");
    }
    // closeModal();
    clearInput();
  };

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
          placeholder="Search movie"
          // onChange={(e) => handleChange(e)}
          ref={inputRef}
        />

        <button onClick={(event) => handleSubmit(event)}>
          <GoSearch />
        </button>

        {/* <SearchModal /> */}
      </form>
    </div>
  );
}

export default Search;
