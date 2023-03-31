import axios from "axios";
import React, { useState } from "react";
import { getOption } from "./Options";

export const SearchContext = React.createContext();

export const MovieByIdAPI = ({ children }) => {
  const [data, setData] = useState({});

  // console.log("render movieById");

  const getMovieById = (id) => {
    const options = getOption("movieById", null, id);

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.results);
        // return response.data;
        setData(response.data.results);
      })
      .catch(function (error) {
        // console.error(error);
        // return false;
      });
  };

  return (
    <SearchContext.Provider value={{ getMovieById, data }}>
      {children}
    </SearchContext.Provider>
  );
};
