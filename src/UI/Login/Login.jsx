import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login, toggleIsFetchingAuth } from "../../redux/auth-reducer";
import { LoginForm } from "./LoginForm/LoginForm";

import s from "./Login.module.css"

const Login = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const errorMessage = useSelector(state => state.auth.errorMessage)
    const dispatch = useDispatch()
    
    if(isAuth) return <Navigate to='/' replace/>

    const onSubmit = (data) => {
        console.log(data)
        dispatch(toggleIsFetchingAuth(true))
        dispatch(login(data))
    } 

    return  (
        <div className={s.login}>
            <LoginForm s={s} errorMessage={errorMessage} submitHandler={onSubmit}/>
        </div>
    )
} 

export default Login