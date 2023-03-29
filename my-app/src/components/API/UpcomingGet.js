import axios from "axios";

import React, { useState, useReducer } from "react";
export const UpcomingContext = React.createContext();

const initialState = {
  loading: false,
  error: "",
  payload: {},
  maxPage: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        payload: action.payload,
        error: "",
        maxPage: 5,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        payload: {},
        error: "Something went wrong!",
        maxPage: 5,
      };
    case "LOADING":
      return { ...state, loading: true };
    default:
      return state;
  }
};

//By creating the useState or useReducer , we re-render whenever we change router.
// change route back to here cause a rerender by reseting the numbers

const UpcomingGet = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(0);

  const getData = (newPage) => {
    // console.log(page, newPage)
    // console.log(!state.loading);

    if (state.loading) {
      return;
    }

    if (page !== newPage) {
      dispatch({ type: "LOADING" });
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
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          // console.log(response.data);
          setPage(newPage);
          dispatch({ type: "FETCH_SUCCESS", payload: response.data.results });
        })
        .catch(function (error) {
          // console.error(error);
          dispatch({ type: "FETCH_ERROR" });
        });
    }
  };

  return (
    <UpcomingContext.Provider value={{ state, getData, page }}>
      {children}
    </UpcomingContext.Provider>
  );
};

export default UpcomingGet;
