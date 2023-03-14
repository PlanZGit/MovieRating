import React, { useContext } from "react";
import { UpcomingContext } from "../API/UpcomingGet";
import Grid from "../grid/Grid";

export const Upcoming = () => {
  const movies = useContext(UpcomingContext);

  return <div>{movies ? <Grid movies={movies}></Grid> : null}</div>;
};

export default Upcoming;
