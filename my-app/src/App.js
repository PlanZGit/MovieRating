import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import DataAxiosGet from "./components/API/DataAxiosGet";
import About from "./about/About";

export const SettingContext = React.createContext();

const setting = {
  color: false,
};

function App() {
  return (
    <div>
      <DataAxiosGet>
        <SettingContext.Provider value={setting}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
            <Route path="/about" element={<About />}></Route>

            <Route path="/products" element={<Products />}>
              <Route index element={<FeaturedProducts />} />
              <Route path="feature" element={<FeaturedProducts />}></Route>
              <Route path="new" element={<NewProducts />}></Route>
            </Route>
          </Routes>
        </SettingContext.Provider>
      </DataAxiosGet>
    </div>
  );
}

export default App;
