import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import DisplayStudent from "./components/DisplayStudent";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <h1>SMS</h1>
          <ul>
            <Link to="/">Display Student</Link>
            <Link to="/add">Add Student</Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<DisplayStudent />}></Route>
          <Route path="/add" element={<AddStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
