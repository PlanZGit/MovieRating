import React, { useContext, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import { ChangePage } from "../Controls/ChangePage";
import { MovieContext } from "../API/CustomAPI";

export const Latest = () => {
  const { state, getData } = useContext(MovieContext);
  const { id } = useParams();

  // console.log(latestNext);

  //use the Params for user url page num search
  useEffect(() => {
    getData("latest", id ? id * 1 : 1);
    // eslint-disable-next-line
  }, []);

  //Create navigation, using NavLink for relative link, Outlet the data to page
  return (
    <div>
      <h2>Latest Movie Rating</h2>
      <ChangePage
        getData={getData}
        currentPage={state.latestPage}
        next={state.latestNext}
        pageType="latest"
      />

      {/* <Page state={movieContext.state} /> */}
      <Outlet />

      <ChangePage
        getData={getData}
        currentPage={state.latestPage}
        next={state.latestNext}
        pageType="latest"
      />
    </div>
  );
};

export default Latest;
