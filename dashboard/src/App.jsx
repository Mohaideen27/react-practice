import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import StudentLogin from "./components/StudentLogin";
import StudentSignup from "./components/StudentSignup";
import Nav from "./components/Nav";
const App = () => {
  let myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        {
          index: true,
          element: <StudentLogin />,
        },
        {
          path: "studentSignup",
          element: <StudentSignup />,
        },
        {
          path: "adminLogin",
          element: <AdminLogin />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={myRouter}></RouterProvider>
    </div>
  );
};

export default App;
