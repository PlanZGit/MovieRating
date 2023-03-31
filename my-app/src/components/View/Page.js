import React, { useContext } from "react";
import { Loading } from "../API/Loading";
import Grid from "./grid/Grid";
import { MovieContext } from "../API/CustomAPI";

const Page = ({ pageType }) => {
  const { state } = useContext(MovieContext);

  return (
    <div>
      {state[pageType + "List"].length > 0 ? (
        <Grid movies={state[pageType + "List"]}></Grid>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Page;
