import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../API/DataAxiosGet";
import { UpcomingContext } from "../API/UpcomingGet";
import "./MovieDetail.css";


//Fix URL , instead of loaded context , use API to grab ID of movies
function MovieTemplate() {
  //currently only searching through limit 50 movies
  const latestMovies = useContext(MovieContext);
  const upcomingMovies = useContext(UpcomingContext)

  let { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    let filterL = latestMovies.filter((obj) => obj.id === id);
    let filterU = upcomingMovies.state.payload.filter((obj) => obj.id === id);

    (filterL.length > 0 ? setMovie(filterL) : filterU.length > 0 ? setMovie(filterU): console.log("No Match"))
    // eslint-disable-next-line
  }, [id]);

  return (
    <section className="movie-page">
      {movie.length > 0 ? (
        <>
          <div className="wrapper">
            <img
              src={movie[0].primaryImage ? movie[0].primaryImage.url : ""}
              alt={movie[0].titleText ? movie[0].titleText.text : ""}
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
                  <div>Votes: {movie[0].ratingsSummary  ? movie[0].ratingsSummary.voteCount : "N/A"}</div>
                  <div>Duration: {movie[0].runtime? movie[0].runtime.seconds / 60 : "N/A"} mins</div>
                  <div>Rate: {movie[0].ratingsSummary  ? movie[0].ratingsSummary.aggregateRating : "N/A"}</div>
                  <div>
                    Genre:
                    {movie[0].genres ? movie[0].genres.genres.map((ele) => {
                      return <Fragment key={ele.id}> {ele.text}</Fragment>;
                    }) : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3> Description </h3>
            <br />
            {movie[0].plot  ? movie[0].plot.plotText["plainText"] : "N/A"}
          </div>
        </>
      ) : null}
    </section>
  );
}

export default MovieTemplate;
