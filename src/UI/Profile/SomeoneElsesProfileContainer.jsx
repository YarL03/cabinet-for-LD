import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getAnotherUserData, setAnotherUserData } from "../../redux/profile-reducer";
import SomeoneElsesProfile from "./SomeoneElsesProfile";
import s from '../components/common/Preloader/PreloaderBig.module.css'
import PreloaderWrapper from "../components/common/Preloader/PreloaderWrapper";

const SomeoneElsesProfileContainer = (props) => {
    const {id} = useParams()
    const uidAuth = useSelector(state => state.auth.authUserData.uid)
    const dispatch = useDispatch()
    const userData = useSelector(state => state.profilePage.anotherUserData)
    console.log(userData)

    useEffect(() => {
        if (id !== uidAuth) dispatch(getAnotherUserData(id))
        return () => {
            dispatch(setAnotherUserData(null))
        }
    }, [])

    if (id === uidAuth) return <Navigate to='/profile'/>
   
    
    debugger

    return userData ? <SomeoneElsesProfile user={userData}/> : <PreloaderWrapper s={s}/>
}

export default SomeoneElsesProfileContainer