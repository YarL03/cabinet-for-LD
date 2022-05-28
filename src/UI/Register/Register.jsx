import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage, toggleIsFetchingAuth } from "../../redux/auth-reducer";
import { RegisterForm } from './RegisterForm/RegisterForm'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import s from "./Register.module.css"
import RegisterDescription from "./RegisterDescription";


const Register = (props) => {
    const dispatch = useDispatch()
    const errorMessage = useSelector(state => state.auth.errorMessage)
    

    const onSubmit = async (data) => {
        console.log(data)
        const db = getFirestore()
        const auth = getAuth()

        try {
            const response = await createUserWithEmailAndPassword(auth, data.email, data.password)
            const docRef = await addDoc(collection(db, 'users'), {
                ...data
            })
            debugger
            console.log(docRef)
            console.log(response)
            dispatch(setErrorMessage(null))
        }
        catch (err) {
            debugger
            console.log(err)
            switch (err.message) {
                case 'Firebase: Error (auth/email-already-in-use).':
                    dispatch(setErrorMessage('Email already in use'))
            }
            
        }
    } 



    return  ( 
    <div className={s.register}>
        <RegisterDescription s={s}/>
        <RegisterForm s={s} submitHandler={onSubmit} errorMessage={errorMessage}/>
    </div>
    )
} 

export default Register