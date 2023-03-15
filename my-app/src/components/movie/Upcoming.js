import React, { useContext, useEffect, useState } from "react";
import { UpcomingContext } from "../API/UpcomingGet";
import { useParams,  NavLink} from "react-router-dom";
import Grid from "../grid/Grid";

export const Upcoming = () => {
  const {state, getData, page} = useContext(UpcomingContext);

  useEffect(() => {
    getData(1)
  }, []);

  return <div>{state.payload.length > 0 ? <Grid movies={state.payload}></Grid> : null} </div>


};

export default Upcoming;
