import React from "react";
import "./Home.css";
import { Outlet } from "react-router-dom";

function Home() {
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
            titles (movies, series and episodes) and 11 million actors / crew
            and cast members. Movies raiting, image, title, genre etc.
          </p>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Home;
