import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsAuth, login, toggleIsFetchingAuth } from "../../redux/auth-reducer";
import { LoginForm } from "../components/common/LoginForm/LoginForm";
import Preloader from "../components/common/Preloader/Preloader";
import s from "./Login.module.css"

const Login = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const isFetching = useSelector(state => state.auth.isFetchingAuth)
    const dispatch = useDispatch()
    
    if(isAuth) return <Navigate to='/' replace/>

    const onSubmit = (data) => {
        // e.preventDefault()
        console.log(data)
        dispatch(toggleIsFetchingAuth(true))
        dispatch(login(data))
        setTimeout(() => {  
            dispatch(toggleIsFetchingAuth(false))}, 1000)
    } 

    return isFetching ? <Preloader s={s}/> : (
        <LoginForm s={s} submitHandler={onSubmit}/>

    )
} 

export default Login