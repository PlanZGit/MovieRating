import axios from "axios";

import React, { useState, useEffect, useReducer } from "react";
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

const UpcomingGet = ({ page, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [pageNum, setPageNum] = useState(0);
  if (pageNum != page) {
    setPageNum(page);
  }
  useEffect(() => {
    console.log("re---");

    const options = {
      method: "GET",
      url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
      params: {
        titleType: "movie",
        sort: "year.incr",
        limit: "25",
        page: `${page}`,
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
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch(function (error) {
        // console.error(error);
        dispatch({ type: "FETCH_ERROR" });
      });
  }, [page]);

  // console.log(state);
  //Pass in Flex Grid
  return (
    <UpcomingContext.Provider value={state.payload.results}>
      {children}
    </UpcomingContext.Provider>
  );
};

export default UpcomingGet;
