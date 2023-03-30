import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Loading } from "./Loading";
export const MovieContext = createContext(null);

function DataAxiosGet(props) {
  const { children } = props;
  const [loading, setLoading] = useState(true);
  // const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [payload, setPayload] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles",
      params: {
        list: "most_pop_movies",
        sort: "year.decr",
        limit: "25",
        info: "base_info",
        page: "1",
        startYear: "2000",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_KEY,
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.results);
        setPayload(response.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      });
    // eslint-disable-next-line
  }, []);

  // console.log(CacheStorage);
  return (
    //Pass movieData as useContext, if fetch data fail, return error, else load page
    <MovieContext.Provider value={payload}>
      {loading ? <Loading /> : error ? <h1>ERROR</h1> : children}
    </MovieContext.Provider>
  );
}

export default DataAxiosGet;
