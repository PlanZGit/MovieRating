import React, { useContext, useEffect, useState } from "react";
import { Loading } from "../API/Loading";
import Grid from "./grid/Grid";
import { MovieContext } from "../API/CustomAPI";

const Page = ({ pageType }) => {
  const { state } = useContext(MovieContext);
  // const [movie, setMovie] = useState({});

  // useEffect(() => {
  //   switch (pageType) {
  //     case "latest":
  //       setMovie(state);
  //       break;
  //     case "upcoming":
  //       setMovie(state);
  //       break;
  //   }
  // }, []);

  // console.log(pageType);
  // console.log(state[pageType + "List"]);

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
