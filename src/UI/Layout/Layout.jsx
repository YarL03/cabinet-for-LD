import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import s from "./Layout.module.css"


export const Layout = () => {
  
  return   (
    <>
      <Header />
      <Navbar />
      <div className={s.contentWrapper}>
      <Outlet />
      </div>
    </>
  );
};
