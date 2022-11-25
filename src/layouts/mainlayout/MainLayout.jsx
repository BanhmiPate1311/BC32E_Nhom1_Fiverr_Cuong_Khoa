import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/main/Footer";
import Header from "../../components/main/Header";

const MainLayout = () => {
  return (
    <div className="box-border">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
