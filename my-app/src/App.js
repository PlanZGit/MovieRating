import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="/products" element={<Products />}>
          <Route path="feature" element={<FeaturedProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
