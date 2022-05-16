import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { login, toggleIsFetchingAuth } from "../../redux/auth-reducer";
import { RegisterForm } from './RegisterForm/RegisterForm'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import s from "./Register.module.css"
import { async } from "@firebase/util";


const Register = (props) => {
    const dispatch = useDispatch()
    

    const onSubmit = async ({email, password}) => {
        console.log(email, password)
        const auth = getAuth()
        console.log(auth)
        try {
            let response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
        }

        catch (err) {
            console.log(err)
        }
       
       
        
    } 

    return  (
        <RegisterForm s={s} submitHandler={onSubmit}/>
    )
} 

export default Register