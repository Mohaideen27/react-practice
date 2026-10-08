import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";

const App = () => {
  return (
    <div>
      <nav>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">home</Link>
              <Link to="/Product">product</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Product" element={<Product />}></Route>
          </Routes>
        </BrowserRouter>
      </nav>
    </div>
  );
};

export default App;
