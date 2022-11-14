import React from "react";
import CarouselHeader from "../../pages/main/CarouselHeader";

import Header from "../../pages/main/Header";
import SubCategory from "../../pages/main/SubCategory";
import Trusted from "../../pages/main/Trusted";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <CarouselHeader />
      <Trusted />
      <SubCategory />
    </div>
  );
};

export default MainLayout;
