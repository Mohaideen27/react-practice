import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Users from "./components/Users";
import Products from "./components/Products";

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <nav>
          <h2>useEffect Task</h2>
          <ul>
            <Link to="/">products</Link>
            <Link to="/users">users</Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
