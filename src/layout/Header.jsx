import React from "react";
import { Link } from "react-router-dom";
import SignUp from "../pages/signup/SignUp";

const Header = () => {
  return (
    <div className="container h-[500px]">
      <div>Header</div>
      <Link to={"/dangnhap"}>
        <button className="bg-blue-200">Đăng Nhập</button>
      </Link>
    </div>
  );
};

export default Header;
