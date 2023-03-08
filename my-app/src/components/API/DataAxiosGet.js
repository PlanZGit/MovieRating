import axios from "axios";
import React, { useEffect, useState } from "react";
export const MovieContext = React.createContext();
let movieData = [];

function DataAxiosGet(props) {
  const { children } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //HTTP GET
    axios
      .get("https://mockend.com/PlanZGit/mockend/movies")
      .then((response) => {
        // console.log(response.data);
        movieData = response.data;

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <MovieContext.Provider value={movieData}>
      {loading ? "Loading..." : children}
    </MovieContext.Provider>
  );
}

export default DataAxiosGet;

// //HTTP GET
// const getAllData = () => {
//   axios
//     .get("https://mockend.com/PlanZGit/TodoList/movie")
//     .then((response) => {
//       console.log(response);
//       setLoading(false);
//       setError("OK!");
//     })
//     .catch((error) => {
//       console.log(error);
//       setLoading(false);
//       setError("ERROR");
//     });
// };

// //HTTP GET (get one data by id)
// const getData = () => {
//   axios
//     .get(`https://mockend.com/PlanZGit/TodoList/posts/${1}`)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// //HTTP POST (create a new data)
// const postData = () => {
//   axios
//     .post(`https://jsonplaceholder.typicode.com/posts`, todos)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// //HTTP PUT (update one data by id)
// const updateData = () => {
//   axios
//     .put(`https://mockend.com/PlanZGit/TodoList/posts/${1}`, todos[0])
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// //HTTP DELETE (delete one data by id)
// const deleteData = () => {
//   axios
//     .delete(`https://mockend.com/PlanZGit/TodoList/posts/${1}`)
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
