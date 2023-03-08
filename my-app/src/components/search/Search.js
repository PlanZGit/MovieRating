import React from "react";
import "./Search.css";
import { GoSearch } from "react-icons/go";

function Search() {
  return (
    <div>
      <div className="search-container">
        <input placeholder="Search" />
        <GoSearch />
      </div>
    </div>
  );
}

export default Search;
