import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import s from "./Layout.module.css"
import Preloader from "../components/common/Preloader/Preloader";
import { useSelector } from "react-redux";

export const Layout = () => {
  const isFetching = useSelector(state => state.auth.isFetching)

  return isFetching ? <Preloader s={s}/> :  (
    <>
      <Header />
      <Navbar />
      <div className={s.contentWrapper}>
      <Outlet />
      </div>
    </>
  );
};
