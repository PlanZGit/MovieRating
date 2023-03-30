import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Nav/Navbar";
import NoMatch from "./components/NoMatch";
// eslint-disable-next-line
import Page from "./components/View/Page";
import UpcomingGet from "./components/API/UpcomingGet";
import About from "./components/About/About";
import BackToTop from "./components/Controls/BackToTop/BackToTop";
import MovieTemplate from "./components/movie/MovieTemplate";
import SearchResults from "./components/Search/SearchResults";
import Upcoming from "./components/movie/Upcoming";
import Latest from "./components/movie/Latest";
import LatestGet from "./components/API/LatestGet";

export const SettingContext = React.createContext();

function App() {
  const setting = {
    color: false,
  };

  return (
    <div>
      <LatestGet>
        <UpcomingGet>
          <SettingContext.Provider value={setting}>
            <Navbar />
            <BackToTop />

            <Routes>
              <Route path="/MovieRating" element={<Home />}>
                <Route path="latest" element={<Latest />}>
                  <Route path=":id"></Route>
                </Route>
                <Route path="upcoming" element={<Upcoming />}>
                  <Route path=":id"></Route>
                </Route>
              </Route>

              <Route path="/MovieRating/about" element={<About />}></Route>
              <Route
                path="/MovieRating/search/:string"
                element={<SearchResults />}></Route>
              <Route
                path="MovieRating/MovieTemplate/:id"
                element={<MovieTemplate />}
              />

              <Route path="*" element={<NoMatch />}></Route>
            </Routes>
          </SettingContext.Provider>
        </UpcomingGet>
      </LatestGet>
    </div>
  );
}

export default App;
