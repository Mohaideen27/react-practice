import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentTable from "./StudentTable";
import AddStudent from "./AddStudent";

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Student Table</Link>
            <Link to="/addStudent">Add Student</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<StudentTable />}></Route>
          <Route path="/addStudent" element={<AddStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Header;
