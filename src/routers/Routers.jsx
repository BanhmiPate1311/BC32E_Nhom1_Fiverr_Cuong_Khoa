import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import Profile from "../pages/profile/Profile";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
    },
    {
      path: "/dangnhap",
      element: <SignIn />,
    },
    {
      path: "/dangky",
      element: <SignUp />,
    },
    {
      path: "/profile/:id",
      element: <Profile />,
    },
  ]);
  return routing;
};

export default Routers;
