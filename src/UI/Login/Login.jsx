import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login, setErrorMessage, toggleIsFetchingAuth } from "../../redux/auth-reducer";
import { LoginForm } from "./LoginForm/LoginForm";

import s from "./Login.module.css"

const Login = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const errorMessage = useSelector(state => state.auth.errorMessage)
    const dispatch = useDispatch()
    
    if(isAuth) return <Navigate to='/' replace/>

    const onSubmit = (data) => {
        debugger
        console.log(data)
        dispatch(login(data))  
    } 

    const cF = () => {
        dispatch(setErrorMessage(null, null))
    }

    return  (
        <div className={s.login}>
            <LoginForm s={s} errorMessage={errorMessage} submitHandler={onSubmit} cF={cF}/>
        </div>
    )
} 

export default Login