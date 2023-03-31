import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-webpage">
        <h1>About</h1>

        <div className="tool">
          <p>
            Check out all the information about your favorite movies including
            ratings, genra, director, actors, votes and more. This webpage was
            made using Rapid API which host MoviesDatabase API. The frontend was
            made by Vang Xiong, using the tools below like React, React Router,
            CSS, react-icons library and https request axios.
          </p>
        </div>
      </div>

      <h2>Tools</h2>
      <div className="tools">
        <div className="tool">
          <h3>Rapid API</h3>
          <p>
            RapidAPI is the world's largest API tool suite that includes a
            public marketplace, enterprise services, API studio, and more.
            RapidAPI allows you to use 3rd party API’s as well as test, design,
            build, monitor and share your API’s in a safe, secure and monitored
            way.
          </p>
        </div>
        <div className="tool">
          <h3>MoviesDatabase</h3>
          <p>
            MoviesDatabase provides complete and updated data for over 9 million
            titles ( movies, series and episodes) and 11 million actors / crew
            and cast members. Movies raiting, image, title, genre etc.
          </p>
        </div>
        <div className="tool">
          <h3>Dependencies</h3>
          <p>
            "axios": "^1.3.4" <br />
            "react": "^18.2.0"
            <br />
            "react-dom": "^18.2.0"
            <br />
            "react-icons": "^4.8.0"
            <br />
            "react-router-dom": "^6.8.1"
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
