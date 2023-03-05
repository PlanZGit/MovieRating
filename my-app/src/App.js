import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
export const SettingContext = React.createContext();

function App() {
  return (
    <div className="App">
      <SettingContext.Provider value={"black"}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<NoMatch />}></Route>

          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="feature" element={<FeaturedProducts />}></Route>
            <Route path="new" element={<NewProducts />}></Route>
          </Route>
        </Routes>
      </SettingContext.Provider>
    </div>
  );
}

export default App;
