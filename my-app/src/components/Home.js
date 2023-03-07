import React from "react";
import Grid from "./grid/Grid";

function Home() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: "32px",
        }}
      >
        <div
          style={{
            flex: "1",
          }}
        >
          <div>
            <h3>HomePage</h3>
            <div className="innerCircle">
              <h3>Movie</h3>
              <div
                className="innerCircle"
                style={{
                  position: "absolute",
                  bottom: "3px",
                  left: "25px",
                  width: "30px",
                  height: " 30px",
                }}
              >
                <h3>Reviews</h3>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: "2" }}>
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
