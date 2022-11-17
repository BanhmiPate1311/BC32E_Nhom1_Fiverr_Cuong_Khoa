import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/main/Footer";
import Header from "../../components/main/Header";

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
      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
