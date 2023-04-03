import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Navbar";
import NoMatch from "./components/NoMatch";
import Page from "./components/movie/Page";
import About from "./components/About/About";
import BackToTop from "./components/Controls/BackToTop/BackToTop";
import MovieInfo from "./components/movie/MovieInfo";
import Option from "./components/movie/Option";
import CustomAPI from "./components/API/CustomAPI";
import SearchAPI from "./components/API/SearchAPI";
import { PageType } from "./components/movie/PageType";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <CustomAPI>
        <SearchAPI>
          <Navbar />
          <BackToTop />

          {/* Using 1 api to get search, movies/series latest/upcoming */}
          <Routes>
            <Route path="/MovieRating" element={<Home />}>
              <Route path=":pageType" element={<PageType />}>
                <Route path=":option" element={<Option />}>
                  <Route path=":page" element={<Page />}></Route>
                </Route>
              </Route>
            </Route>

            <Route path="/MovieRating/about" element={<About />}></Route>
            <Route
              path="MovieRating/MovieTemplate/:id"
              element={<MovieInfo />}
            />

            <Route path="*" element={<NoMatch />}></Route>
          </Routes>

          <Footer />
        </SearchAPI>
      </CustomAPI>
    </div>
  );
}

export default App;
