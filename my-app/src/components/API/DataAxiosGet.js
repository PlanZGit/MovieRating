import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataAxiosGet.css";
export const MovieContext = React.createContext();

function DataAxiosGet(props) {
  const { children } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [payload, setPayload] = useState([]);

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
      "X-RapidAPI-Key": "bbd82843bemshb2f78863fb137aep1bacf2jsn1f81c97442e0",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  useEffect(() => {
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
      {loading ? (
        <div className="flex-center">
          <h1>Loading...</h1>
          <div className="circle-animation22">
            <div className="circle-animation22"></div>
          </div>
        </div>
      ) : error ? (
        <h1>ERROR</h1>
      ) : (
        children
      )}
    </MovieContext.Provider>
  );
}

export default DataAxiosGet;
