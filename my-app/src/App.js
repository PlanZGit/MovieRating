import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Page from "./components/movie/Page";
import UpcomingGet from "./components/API/UpcomingGet";
import DataAxiosGet from "./components/API/DataAxiosGet";
import About from "./components/about/About";
import BackToTop from "./components/BackToTop/BackToTop";
import MovieTemplate from "./components/movie/MovieTemplate";
import SearchResults from "./components/search/SearchResults";
import Upcoming from "./components/movie/Upcoming";

export const SettingContext = React.createContext();

function App() {
  const setting = {
    color: false,
  };

  return (
    <div>
      <DataAxiosGet>
        <UpcomingGet>
          <SettingContext.Provider value={setting}>
            <Navbar />
            <BackToTop />
            <Routes>
              <Route path="/MovieRating" element={<Home />}></Route>
              <Route path="/MovieRating/about" element={<About />}></Route>
              <Route
                path="/MovieRating/search/:string"
                element={<SearchResults />}></Route>

              <Route path="*" element={<NoMatch />}></Route>

              <Route
                path="/MovieRating/MovieTemplate/:id"
                element={<MovieTemplate />}
              />

              <Route index element={<Upcoming />} />
              <Route path="/MovieRating/upcoming" element={<Upcoming />}>
                <Route path=":id" element={<Page />}></Route>
              </Route>
            </Routes>
          </SettingContext.Provider>
        </UpcomingGet>
      </DataAxiosGet>
    </div>
  );
}

export default App;
