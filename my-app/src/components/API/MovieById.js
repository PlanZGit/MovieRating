import axios from "axios";
import React, { useState } from "react";

export const SearchContext = React.createContext();

export const MovieByIdAPI = ({ children }) => {
  const [data, setData] = useState({});

  // console.log("render movieById");

  const getMovieById = (id) => {
    const options = {
      method: "GET",
      url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
      params: { info: "base_info" },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_KEY,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

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
