import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import SingleProduct from "./Pages/SingleProduct";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">home</Link>
          <Link to="/Product">product</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Product/:id" element={<SingleProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
