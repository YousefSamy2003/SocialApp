import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Notfound/NotFound";
import Profile from "../Pages/Profile/Profile";
import Authlayout from "../Layouts/Authlayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Authlayout />,
    children: [
      { path: "signin", element: <Login /> },
      { path: "signup", element: <Register /> },
    ],
  },
]);
