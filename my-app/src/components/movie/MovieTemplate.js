import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getMovieById } from "../API/getMovieById";
import "./MovieTemplate.css";
import axios from "axios";

function MovieTemplate() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    //API call id search, set obj to movie
    // setMovie(getMovieById(id));
    // console.log(id);
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
        setMovie(response.data.results);
        // return response.data;
      })
      .catch(function (error) {
        // console.error(error);
        // return false;
      });
    // eslint-disable-next-line
  }, [id]);

  console.log(movie, id);
  return (
    <section className="movie-page">
      {Object.keys(movie)?.length > 0 ? (
        <>
          <div className="wrapper">
            <img
              src={movie.primaryImage ? movie.primaryImage.url : ""}
              alt={movie.titleText ? movie.titleText.text : ""}
              className="image"></img>

            <div className="info-container">
              <div>
                <h1>{movie.titleText.text}</h1>
              </div>
              <div className="info">
                <div>
                  <div>Type: {movie.titleType.text}</div>

                  <div>
                    Released: {movie.releaseDate.year}-{movie.releaseDate.day}-
                    {movie.releaseDate.month}
                  </div>
                  <div>
                    Votes:{" "}
                    {movie.ratingsSummary
                      ? movie.ratingsSummary.voteCount
                      : "N/A"}
                  </div>
                  <div>
                    Duration:{" "}
                    {movie.runtime ? movie.runtime.seconds / 60 : "N/A"} mins
                  </div>
                  <div>
                    Rate:{" "}
                    {movie.ratingsSummary
                      ? movie.ratingsSummary.aggregateRating
                      : "N/A"}
                  </div>
                  <div>
                    Genre:
                    {movie.genres
                      ? movie.genres.genres.map((ele) => {
                          return <Fragment key={ele.id}> {ele.text}</Fragment>;
                        })
                      : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3> Description </h3>
            <br />
            {movie.plot ? movie.plot.plotText["plainText"] : "N/A"}
          </div>
        </>
      ) : null}
    </section>
  );
}

export default MovieTemplate;

const getMovieById = (id) => {};
