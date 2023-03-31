export const getOption = (caseOption, newPage, id) => {
  switch (caseOption) {
    case "upcoming":
      return {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
        params: {
          titleType: "movie",
          sort: "year.incr",
          limit: "24",
          page: `${newPage}`,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
      break;
    case "latest":
      return {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles",
        params: {
          list: "most_pop_movies",
          sort: "year.decr",
          limit: "24",
          info: "base_info",
          page: `${newPage}`,
          startYear: "2000",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
      break;
    case "movieById":
      return {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/${id}`,
        params: { info: "base_info" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
      break;
  }
};
