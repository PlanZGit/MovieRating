export const getOption = (caseOption, newPage, titleType, mostPop) => {
  const date = new Date();
  const list = mostPop ? "most_pop_series" : "";

  switch (caseOption) {
    case "upcoming":
      return {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles/x/upcoming",
        params: {
          titleType: titleType,
          sort: "year.incr",
          limit: "24",
          page: `${newPage}`,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
    case "latest":
      return {
        method: "GET",
        url: "https://moviesdatabase.p.rapidapi.com/titles",
        params: {
          titleType: titleType,
          sort: "year.decr",
          list: list,
          limit: "24",
          endYear: date.getUTCFullYear(),
          info: "base_info",
          page: `${newPage}`,
          startYear: "2000",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
    case "searchMovieById":
      return {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/${titleType}`,
        params: { info: "base_info" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
    case "searchResults":
      return {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${titleType}`,
        params: {
          exact: "false",
          startYear: "2000",
          // titleType: "movie",
          info: "base_info",
          page: `${newPage}`,
          limit: "50",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
    default:
      return;
  }
};
