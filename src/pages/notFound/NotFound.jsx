import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found container w-full h-[610px]">
      <div className="flex flex-wrap justify-center">
        <div className="w-full text-center mb-3">
          <span className="text-3xl text-green-700 font-bold text-center">
            Well, this isn't what you were looking for
          </span>
        </div>
        <div className="text-center">
          <NavLink
            to="/"
            className="p-3 border rounded-md bg-white text-lg font-bold"
          >
            Back to Home Page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
