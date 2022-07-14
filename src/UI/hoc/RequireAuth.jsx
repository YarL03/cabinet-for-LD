import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
    let location = useLocation()
    console.log(location)
    const isAuth = useSelector(state => state.auth.isAuth)

    return isAuth ? <Outlet/> : <Navigate to='/login' replace/>
}

export default RequireAuth