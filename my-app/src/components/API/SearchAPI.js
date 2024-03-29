import axios from "axios";
import React, { useState } from "react";
import { getOption } from "./Options";

export const SearchContext = React.createContext();

export const SearchAPI = ({ children }) => {
  const [data, setData] = useState({});

  // console.log("render movieById");

  const searchMovie = (type, value) => {
    const options = getOption(type, null, value);

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
    <SearchContext.Provider value={{ searchMovie, data }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchAPI;
