import React, { useContext, useEffect } from "react";
import { UpcomingContext } from "../API/UpcomingGet";
import { useParams, Outlet } from "react-router-dom";
import "./Upcoming.css";
import { ChangePage } from "../Controls/ChangePage";

export const Upcoming = () => {
  const { state, getData, page } = useContext(UpcomingContext);
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
      <Outlet />
    </div>
  );
};

export default Upcoming;
