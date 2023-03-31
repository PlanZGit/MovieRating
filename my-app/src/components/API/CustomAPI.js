import axios from "axios";

import React, { useState, useReducer, useCallback, useMemo } from "react";
import { getOption } from "./Options";

export const MovieContext = React.createContext();

//Splite into two state if render issue
const initialState = {
  loading: false,
  latestList: {},
  latestPage: 0,
  latestNext: null,
  upcomingList: {},
  upcomingPage: 0,
  upcomingNext: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LATEST_LIST":
      return {
        ...state,
        loading: false,
        latestList: action.payload.results,
        latestPage: action.payload.page,
        latestNext: action.payload.next,
      };
    case "UPDATE_UPCOMING_LIST":
      return {
        ...state,
        loading: false,
        upcomingList: action.payload.results,
        upcomingPage: action.payload.page,
        upcomingNext: action.payload.next,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

const CustomAPI = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState([]);

  //Get new Page Method , Cancel if loading or same page
  const getData = (newPage, caseOption) => {
    if (state.loading) {
      console.log("DEBUG: still loading");
      return;
    }
    if (newPage == state[caseOption + "Page"]) {
      console.log("DEBUG: same page");
      return;
    }

    //Set Loading
    dispatch({
      type: "SET_LOADING",
      loading: true,
    });
    //Get Data Request Option
    const options = getOption(newPage, caseOption);

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        switch (caseOption) {
          case "latest":
            // setPage(newPage);
            dispatch({
              type: "UPDATE_LATEST_LIST",
              payload: response.data,
            });
            break;
          case "upcoming":
            // setPage(newPage);
            dispatch({
              type: "UPDATE_UPCOMING_LIST",
              payload: response.data,
            });
            break;
        }
      })
      .catch(function (err) {
        setError([...error, err]);
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
      });
  };

  return (
    <MovieContext.Provider value={{ state, getData }}>
      {children}
    </MovieContext.Provider>
  );
};

export default CustomAPI;
