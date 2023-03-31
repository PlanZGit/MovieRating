import React, { useContext, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { ChangePage } from "../Controls/ChangePage";
import { MovieContext } from "../API/CustomAPI";

export const SearchResults = () => {
  const { state, getData } = useContext(MovieContext);
  const { title, id } = useParams();
  // console.log(title, id);

  //use the Params for user url page num search
  useEffect(() => {
    getData("searchResults", id, title);
    // eslint-disable-next-line
  }, [title, id]);

  //Create navigation, using NavLink for relative link, Outlet the data to page
  return (
    <div>
      <h1>{title}</h1>
      <h2 style={{ marginTop: "32px" }}>
        {state.searchResultsList.length} Search Results
      </h2>

      {state.searchResultsList.length > 0 ? (
        <>
          <ChangePage
            getData={getData}
            currentPage={state.searchResultsPage}
            next={state.searchResultsNext}
            pageType="searchResults"
            title={title}
          />

          <Outlet />

          <ChangePage
            getData={getData}
            currentPage={state.searchResultsPage}
            next={state.searchResultsNext}
            pageType="searchResults"
            title={title}
          />
        </>
      ) : null}
    </div>
  );
};

export default SearchResults;
