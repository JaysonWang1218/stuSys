import React from "react";
import { useRoutes } from "react-router-dom";
import AddOrEdit from "../components/AddOrEdit";
import Home from "../components/Home";
import About from "../components/About.tsx";
import Detail from "../components/Detail";
import Tel from "../components/Tel";
import Email from "../components/Email";
import { Navigate } from "react-router-dom";

const routes = [
  { path: "/home", element: <Home /> },
  { path: "/add", element: <AddOrEdit /> },
  {
    path: "/about",
    element: <About />,
    children: [
      { path: "tel", element: <Tel /> },
      { path: "email", element: <Email /> },
      { path: "", element: <Navigate replace to="tel" /> },
    ],
  },
  { path: "/detail/:id", element: <Detail /> },
  { path: "/edit/:id", element: <AddOrEdit /> },
  { path: "/", element: <Navigate replace to="/home" /> },
];

function Routes() {
  return useRoutes(routes);
}

export default Routes;
