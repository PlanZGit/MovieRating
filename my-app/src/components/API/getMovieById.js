import axios from "axios";

export const getMovieById = (id) => {
  console.log(id);
  let data;
  const options = {
    method: "GET",
    url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
    params: { info: "base_info" },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_KEY,
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.results);
      // return response.data;
      data = response.data.results;
    })
    .catch(function (error) {
      // console.error(error);
      // return false;
    });

  return data;
};
