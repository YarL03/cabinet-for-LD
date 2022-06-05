import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register, setErrorMessage, toggleIsFetchingAuth } from "../../redux/auth-reducer";
import { RegisterForm } from './RegisterForm/RegisterForm'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import s from "./Register.module.css"
import RegisterDescription from "./RegisterDescription";
import { Navigate } from "react-router-dom";


const Register = (props) => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()
    const errorMessage = useSelector(state => state.auth.errorMessage)

    if (isAuth) return <Navigate to='/'/>
    

    const onSubmit = (data) => {
        console.log(data)
        dispatch(register(data))
        
        // }
        // catch (err) {
        //     debugger
        //     console.log(err)
        //     switch (err.message) {
        //         case 'Firebase: Error (auth/email-already-in-use).':
        //             dispatch(setErrorMessage('Email already in use'))
        //     }  
        // }
    } 



    return  ( 
    <div className={s.register}>
        <RegisterDescription s={s}/>
        <RegisterForm s={s} submitHandler={onSubmit} errorMessage={errorMessage}/>
    </div>
    )
} 

export default Register