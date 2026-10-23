import React from "react";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={""}>Student Login</Link>
        </li>
        <li>
          <Link to={"adminLogin"}>Admin Login</Link>
        </li>
        <li>
          <Link to={"studentSignup"}>Student Signup</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
