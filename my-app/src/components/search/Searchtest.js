import React, { useContext } from "react";
import { SearchContext } from "../API/MovieById";

const Searchtest = () => {
  const { getMovieById, data } = useContext(SearchContext);
  //   console.log(data);
  return (
    <div>
      <button
        onClick={() => {
          getMovieById("tt1464335");
        }}>
        searchtest
      </button>
    </div>
  );
};

export default Searchtest;
