import React, { useContext } from "react";
import Grid from "../View/grid/Grid";
import "./Home.css";
import { MovieContext } from "../API/DataAxiosGet";

function Home() {
  const movieList = useContext(MovieContext);

  return (
    <div>
      <div className="parent-container">
        <div className="child-container1">
          <div>
            <div className="circle-animation">
              <h3>Movie</h3>
              <div className="circle-animation">
                <h3>Reviews</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="child-container2">
          <h3>MoviesDatabase</h3>
          <p>
            MoviesDatabase provides complete and updated data for over 9 million
            titles ( movies, series and episodes) and 11 million actors / crew
            and cast members. Movies raiting, image, title, genre etc.
          </p>
        </div>
      </div>

      <Grid movies={movieList} />
    </div>
  );
}

export default Home;
