import axios from "axios";

import React, { useState, useReducer } from "react";
export const UpcomingContext = React.createContext();

const initialState = {
  loading: true,
  error: "",
  payload: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        payload: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        payload: {},
        error: "Something went wrong!",
      };

    default:
      return state;
  }
};

//By creating the useState or useReducer , we re-render whenever we change router.
// change route back to here cause a rerender by reseting the numbers

const UpcomingGet = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(0)

  const getData = (newPage) => {
    // console.log(page, newPage)
    if (page !== newPage){
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
        params: {
          titleType: "movie",
          sort: "year.incr",
          limit: "25",
          page: `${newPage}`,
        },
        headers: {
          "X-RapidAPI-Key": "bbd82843bemshb2f78863fb137aep1bacf2jsn1f81c97442e0",
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
  
      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setPage(newPage)
          dispatch({ type: "FETCH_SUCCESS", payload: response.data.results });
        })
        .catch(function (error) {
          // console.error(error);
          dispatch({ type: "FETCH_ERROR" });
        });  
      }
  }

  return (
    <UpcomingContext.Provider value={{state, getData, page}}>
      {children}
    </UpcomingContext.Provider>
  );
};

export default UpcomingGet;
