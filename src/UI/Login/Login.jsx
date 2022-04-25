import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth, toggleIsFetchingAuth } from "../../redux/auth-reducer";
import Preloader from "../components/common/Preloader/Preloader";
import s from "./Login.module.css"

const Login = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const isFetching = useSelector(state => state.auth.isFetchingAuth)
    const dispatch = useDispatch()
    
    if(isAuth) return <Navigate to='/' replace/>

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(toggleIsFetchingAuth(true))
        setTimeout(() => {
            dispatch(getIsAuth())
            dispatch(toggleIsFetchingAuth(false))}, 1000)
    } 

    return isFetching ? <Preloader s={s}/> : (
        <form className={s.authorization}>
            <input className={s.text} type="text" name="userLogin" placeholder="Введите логин"/>
            <input className={s.text} type="text" name="userPass" placeholder="Введите пароль"/>
            <button onClick={onSubmit}>Войти</button>
        </form>
    )
} 

export default Login