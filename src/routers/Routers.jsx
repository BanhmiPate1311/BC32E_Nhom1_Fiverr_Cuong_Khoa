import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import Admin from "../pages/admin/Admin";
import Comments from "../pages/admin/services/comments/Comments";
import HireWork from "../pages/admin/services/hireWork/HireWork";
import User from "../pages/admin/user/User";
import Work from "../pages/admin/work/Work";
import WorkType from "../pages/admin/worktype/WorkType";
import Home from "../pages/main/Home";

import WorkCategory from "../pages/main/WorkCategory";
import WorkDetail from "../pages/main/WorkDetail";
import WorkList from "../pages/main/WorkList";
import NotFound from "../pages/notFound/NotFound";
import Profile from "../pages/profile/Profile";
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
        {
          path: "/profile/:id",
          element: <Profile />,
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
    {
      path: "/admin",
      element: <Admin />,
      children: [
        {
          path: "/admin",
          element: <User />,
        },
        {
          path: "/admin/user",
          element: <User />,
        },
        {
          path: "/admin/work",
          element: <Work />,
        },
        {
          path: "/admin/worktype",
          element: <WorkType />,
        },
        {
          path: "/admin/services",
          element: <HireWork />,
        },
        {
          path: "/admin/services/hirework",
          element: <HireWork />,
        },
        {
          path: "/admin/services/comments",
          element: <Comments />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routing;
};

export default Routers;
