import React, { useContext } from "react";
import { SearchContext } from "../API/MovieById";

//Test Search list of movies by input title name
const Searchtest = () => {
  // const { getMovieById, data } = useContext(SearchContext);
  // console.log(data);
  // console.log("render Search");
  return (
    <div>
      <button
        onClick={() => {
          // getMovieById("tt1464335");
        }}>
        searchtest
      </button>
    </div>
  );
};

export default React.memo(Searchtest);
