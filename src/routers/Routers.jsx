import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import Home from "../pages/main/Home";
import WorkList from "../pages/main/WorkList";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "worklist",
          element: <WorkList />,
        },
      ],
    },
    {
      path: "/dangnhap",
      element: <SignIn />,
    },
    {
      path: "/dangky",
      element: <SignUp />,
    },
  ]);
  return routing;
};

export default Routers;
