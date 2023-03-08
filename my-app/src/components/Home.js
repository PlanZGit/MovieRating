import React from "react";
import Grid from "./grid/Grid";
import "./Home.css";

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
          Duis adipisicing elit minim et quis adipisicing cupidatat mollit in
          nostrud laborum. Esse eu sit pariatur exercitation laborum nulla
          eiusmod anim sunt. Cillum velit anim nostrud excepteur ea. Qui do
          veniam eiusmod nulla commodo nisi incididunt reprehenderit culpa quis
          commodo culpa do. Minim excepteur aliquip Lorem duis pariatur laboris
          nulla ad ad minim. Incididunt incididunt eu do laborum et veniam
          laboris est ea aute dolore.
        </div>
      </div>

      <Grid />
    </div>
  );
}

export default Home;
