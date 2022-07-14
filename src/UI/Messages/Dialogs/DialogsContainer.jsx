import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getChats } from "../../../redux/messsages-reducer";
import PreloaderWrapper from "../../components/common/Preloader/PreloaderWrapper";
import { Dialogs } from "./Dialogs";
import s from '../../components/common/Preloader/PreloaderSmall.module.css'
import Preloader from "../../components/common/Preloader/Preloader";


export const DialogsContainer = () => {
    const chats = useSelector(state => state.messagesPage.chats)
    const dispatch = useDispatch()
    const authUserData = useSelector(state => state.auth.authUserData)
    const unreadMsg = useSelector(state => state.messagesPage.unreadCount)
    
    useEffect(() => {
        if (!chats) dispatch(getChats(authUserData.uid))
    }, [chats])


    return chats ? <Dialogs unreadMsg={unreadMsg} chats={chats}/> : <Preloader s={{height: '50px', position: 'relative',
top: 'calc(50% - 25px)', left: 'calc(50% - 25px)'}}/>
}