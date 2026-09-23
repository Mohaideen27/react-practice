import React from "react";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Contact from "./assets/pages/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./assets/pages/NotFound";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <Link to="/">Home</Link>
            <Link to="/contact"> contact </Link>
            <Link to="/about">about</Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
