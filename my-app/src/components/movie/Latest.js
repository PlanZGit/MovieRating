import React, { useContext, useEffect } from "react";
import { LatestContext } from "../API/LatestGet";
import { useParams, Outlet } from "react-router-dom";
import { ChangePage } from "../Controls/ChangePage";
import Page from "../View/Page";

export const Upcoming = () => {
  const { state, getData, page } = useContext(LatestContext);
  const { id } = useParams();

  //use the Params for user url page num search
  useEffect(() => {
    getData(id ? id * 1 : 1);
    // eslint-disable-next-line
  }, []);

  //Create navigation, using NavLink for relative link, Outlet the data to page
  return (
    <div className="Upcoming">
      <ChangePage getData={getData} state={state} page={page} />
      {/* <Outlet /> */}
      <Page state={state} />
    </div>
  );
};

export default Upcoming;
