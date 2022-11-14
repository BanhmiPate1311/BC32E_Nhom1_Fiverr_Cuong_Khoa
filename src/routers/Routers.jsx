import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "../layout/Header";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <Header />,
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
