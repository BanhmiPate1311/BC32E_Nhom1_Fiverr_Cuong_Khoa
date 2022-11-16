import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import CarouselHeader from "../../pages/main/CarouselHeader";
import Footer from "../../pages/main/Footer";

import Header from "../../pages/main/Header";
import MainCategories from "../../pages/main/MainCategories";
import SellingProposition from "../../pages/main/SellingProposition";
import SubCategory from "../../pages/main/SubCategory";
import Testtimonials from "../../pages/main/Testtimonials";
import Trusted from "../../pages/main/Trusted";

const MainLayout = () => {
  const [isScroll, setIsScroll] = useState({
    scrollNav: false,
    scrollMenu: false,
  });

  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY >= 170) {
        setIsScroll({
          ...isScroll,
          scrollNav: true,
          scrollMenu: true,
        });
      } else if (window.scrollY >= 70) {
        setIsScroll({
          ...isScroll,
          scrollNav: true,
          scrollMenu: false,
        });
      } else {
        setIsScroll({
          ...isScroll,
          scrollNav: false,
          scrollMenu: false,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="box-border">
      <Header isScroll={isScroll} />
      <CarouselHeader />
      <Trusted />
      <SubCategory />
      <SellingProposition />
      <Testtimonials />
      <MainCategories />
      <Footer />
    </div>
  );
};

export default MainLayout;
