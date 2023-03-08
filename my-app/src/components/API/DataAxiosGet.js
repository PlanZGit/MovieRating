import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DataAxiosGet.css";
export const MovieContext = React.createContext();

let movieData = [];

function DataAxiosGet(props) {
  const { children } = props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
        setError(true);
      });
  }, []);

  return (
    //Pass movieData as useContext, if fetch data fail, return error, else load page
    <MovieContext.Provider value={movieData}>
      {loading ? (
        <div className="flex-center">
          <h1>Loading...</h1>
          <div className="circle-animation22">
            <div className="circle-animation22"></div>
          </div>
        </div>
      ) : error ? (
        <h1>ERROR</h1>
      ) : (
        children
      )}
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
