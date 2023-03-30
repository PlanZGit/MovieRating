import React, { useContext } from "react";
import { Loading } from "../API/Loading";
import { UpcomingContext } from "../API/UpcomingGet";

import Grid from "./grid/Grid";

const Page = ({ state }) => {
  // const { state } = useContext(UpcomingContext);
  return (
    <div>
      {state.payload.length > 0 ? (
        <Grid movies={state.payload}></Grid>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Page;
