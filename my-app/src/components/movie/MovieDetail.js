import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../API/DataAxiosGet";
import "./MovieDetail.css";

function MovieDetail() {
  //currently only searching through limit 50 movies
  const movies = useContext(MovieContext);
  let { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let filter = movies.filter((obj) => obj.id === id);
    setMovie(filter);
  }, [id]);

  console.log(movie);

  return (
    <section className="movie-page">
      {movie.length > 0 ? (
        <>
          <div className="wrapper">
            <img
              src={movie[0].primaryImage.url}
              alt={movie[0].titleText.text}
              className="image"
            ></img>

            <div className="info-container">
              <div>
                <h1>{movie[0].titleText.text}</h1>
              </div>
              <div className="info">
                <div>
                  <div>Type: {movie[0].titleType.text}</div>

                  <div>
                    Released: {movie[0].releaseDate.year}-
                    {movie[0].releaseDate.day}-{movie[0].releaseDate.month}
                  </div>
                  <div>Votes: {movie[0].ratingsSummary.voteCount}</div>
                  <div>Duration: {movie[0].runtime.seconds / 60} mins</div>
                  <div>Rate: {movie[0].ratingsSummary.aggregateRating}</div>
                  <div>
                    Genre:
                    {movie[0].genres.genres.map((ele) => {
                      return (
                        <React.Fragment key={ele.id}>
                          {" "}
                          {ele.text}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3> Description </h3>
            <br />
            {movie[0].plot.plotText["plainText"]}
          </div>
        </>
      ) : null}
    </section>
  );
}

export default MovieDetail;
