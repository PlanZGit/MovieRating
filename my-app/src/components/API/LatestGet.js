import axios from "axios";

import React, { useState, useReducer } from "react";
export const LatestContext = React.createContext();

const initialState = {
  loading: false,
  error: "",
  payload: {},
  next: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: action.loading,
        payload: action.payload.results,
        error: "",
        next: action.payload.next,
      };
    case "FETCH_ERROR":
      return {
        loading: action.loading,
        payload: {},
        error: "Something went wrong!",
        next: null,
      };
    case "LOADING":
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

//By creating the useState or useReducer , we re-render whenever we change router.
// change route back to here cause a rerender by reseting the numbers

const LatestGet = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(0);

  //Get new Page Method , Cancel if loading or same page
  const getData = (newPage) => {
    if (state.loading) {
      return;
    }
    if (page !== newPage) {
      dispatch({ type: "LOADING", loading: true });
      const options = {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles",
        params: {
          list: "most_pop_movies",
          sort: "year.decr",
          limit: "25",
          info: "base_info",
          page: `${newPage}`,
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
          //Check if page exist or is there any data in page

          if (response.data.entries > 0) {
            setPage(newPage);
            dispatch({
              type: "FETCH_SUCCESS",
              payload: response.data,
              loading: false,
            });
          } else {
            dispatch({ type: "LOADING", loading: false });
          }
        })
        .catch(function (error) {
          dispatch({ type: "LOADING", loading: false });
        });
    }
  };

  return (
    <LatestContext.Provider value={{ state, getData, page }}>
      {children}
    </LatestContext.Provider>
  );
};

export default LatestGet;
