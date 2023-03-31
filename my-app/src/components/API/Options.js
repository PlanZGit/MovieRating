export const getOption = (caseOption, newPage, TitleOrIdValue) => {
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
    case "searchMovieById":
      return {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/${TitleOrIdValue}`,
        params: { info: "base_info" },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
    case "searchResults":
      return {
        method: "GET",
        url: `https://moviesdatabase.p.rapidapi.com/titles/search/title/${TitleOrIdValue}`,
        params: {
          exact: "false",
          startYear: "2000",
          titleType: "movie",
          info: "base_info",
          page: `${newPage}`,
          limit: "50",
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_KEY,
          "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
        },
      };
  }
};
