import axios from "axios";

import React, { useEffect, useState } from "react";

function SearchGet() {
  const [input, setInput] = useState("");

  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/search/title/" + input,
    params: {
      exact: "true",
      titleType: "movie",
      info: "mini_info",
      limit: "5",
    },
    headers: {
      "X-RapidAPI-Key": "bbd82843bemshb2f78863fb137aep1bacf2jsn1f81c97442e0",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [input]);

  return <div>Search</div>;
}

export default SearchGet;
