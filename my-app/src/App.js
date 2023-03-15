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
import MovieDetail from "./components/movie/MovieTemplate";
import SearchResults from "./components/search/SearchResults";
import Upcoming from "./components/movie/Upcoming";

export const SettingContext = React.createContext();

function App() {
  const setting = {
    color: false,
    upcomingPage: 1,
  };

  return (
    <div>
      <DataAxiosGet>
        <UpcomingGet page={setting.upcomingPage}>
          <SettingContext.Provider value={setting}>
            <Navbar />
            <BackToTop />
            <Routes>
              <Route path="/MovieReview" element={<Home />}></Route>
              <Route path="/MovieReview/about" element={<About />}></Route>
              <Route
                path="/MovieReview/search/:string"
                element={<SearchResults />}
              ></Route>

              <Route path="*" element={<NoMatch />}></Route>

              <Route
                path="/MovieReview/MovieDetail/:id"
                element={<MovieDetail />}
              />

              <Route index element={<Upcoming />} />
              <Route path="/MovieReview/upcoming" element={<Upcoming />}>
                <Route path=":id" element={<Page />}> </Route>
              </Route>

            </Routes>
          </SettingContext.Provider>
        </UpcomingGet>
      </DataAxiosGet>
    </div>
  );
}

export default App;
