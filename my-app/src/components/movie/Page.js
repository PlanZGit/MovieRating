import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../API/Loading";
import Grid from "../View/grid/Grid";
import { MovieContext } from "../API/CustomAPI";

const Page = () => {
  const params = useParams();
  const { state } = useContext(MovieContext);

  // console.log(params);

  return (
    <div>
      {state[params.option + "List"].length > 0 ? (
        <Grid movies={state[params.option + "List"]}></Grid>
      ) : (
        <h1>No Results</h1>
      )}
    </div>
  );
};

export default Page;
