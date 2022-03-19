import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import "./Layout.css"

export const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="content-wrapper">
      <Outlet />
      </div>
    </>
  );
};
