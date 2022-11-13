import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";

const Routers = () => {
  const routing = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [],
    },
  ]);
  return routing;
};

export default Routers;
