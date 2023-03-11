import React from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  let { id } = useParams();

  return <div>MovieDetail {id}</div>;
}

export default MovieDetail;
