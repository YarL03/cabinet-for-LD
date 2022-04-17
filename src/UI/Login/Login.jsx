import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import s from "./Login.module.css"

const Login = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    
    if(isAuth) return <Navigate to='/' replace/>

    return (
        <form className={s.authorization}>
            <input className={s.text} type="text" name="userLogin" placeholder="Введите логин"/>
            <input className={s.text} type="text" name="userPass" placeholder="Введите пароль"/>
            <button>Войти</button>
        </form>
    )
} 

export default Login