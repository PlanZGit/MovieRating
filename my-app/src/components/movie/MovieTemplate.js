import React, { Fragment, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./MovieTemplate.css";
import axios from "axios";
import { SearchContext } from "../API/MovieById";

function MovieTemplate() {
  let { id } = useParams();
  const { getMovieById, data } = useContext(SearchContext);

  useEffect(() => {
    getMovieById(id);
  }, [id]);

  return (
    <section className="movie-page">
      {data.id === id ? (
        <>
          <div className="wrapper">
            <img
              src={data.primaryImage ? data.primaryImage.url : ""}
              alt={data.titleText ? data.titleText.text : ""}
              className="image"></img>

            <div className="info-container">
              <div>
                <h1>{data.titleText.text}</h1>
              </div>
              <div className="info">
                <div>
                  <div>Type: {data.titleType.text}</div>

                  <div>
                    Released: {data.releaseDate.year}-{data.releaseDate.day}-
                    {data.releaseDate.month}
                  </div>
                  <div>
                    Votes:{" "}
                    {data.ratingsSummary
                      ? data.ratingsSummary.voteCount
                      : "N/A"}
                  </div>
                  <div>
                    Duration: {data.runtime ? data.runtime.seconds / 60 : "N/A"}{" "}
                    mins
                  </div>
                  <div>
                    Rate:{" "}
                    {data.ratingsSummary
                      ? data.ratingsSummary.aggregateRating
                      : "N/A"}
                  </div>
                  <div>
                    Genre:
                    {data.genres
                      ? data.genres.genres.map((ele) => {
                          return <Fragment key={ele.id}> {ele.text}</Fragment>;
                        })
                      : "N/A"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <h3> Description </h3>
            <br />
            {data.plot ? data.plot.plotText["plainText"] : "N/A"}
          </div>
        </>
      ) : null}
    </section>
  );
}

export default MovieTemplate;
