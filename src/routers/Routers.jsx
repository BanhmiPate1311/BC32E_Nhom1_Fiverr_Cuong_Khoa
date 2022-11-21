import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import Home from "../pages/main/Home";

import WorkCategory from "../pages/main/WorkCategory";
import WorkDetail from "../pages/main/WorkDetail";
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
        {
          path: "worklist/:idcv",
          element: <WorkList />,
        },
        {
          path: "workcategory/:id",
          element: <WorkCategory />,
        },
        {
          path: "workcategory",
          element: <WorkList />,
        },
        {
          path: "workdetail/:idloaiCV/:idwork",
          element: <WorkDetail />,
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
