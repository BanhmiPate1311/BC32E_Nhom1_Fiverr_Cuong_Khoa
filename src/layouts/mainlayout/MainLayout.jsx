import React from "react";
import { Outlet } from "react-router-dom";
import CarouselHeader from "../../pages/main/CarouselHeader";

import Header from "../../pages/main/Header";
import Trusted from "../../pages/main/Trusted";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <CarouselHeader />
      <Trusted />
    </div>
  );
};

export default MainLayout;
