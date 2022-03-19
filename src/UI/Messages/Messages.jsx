import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { Chats } from "./Chats/Chats";
import { Dialogs } from "./Dialogs/Dialogs";
import s from './Messages.module.css'

export const Messages = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.firstColumn}>
            <Dialogs dialogs={props.messagesPage.dialogs}/>
                
            
            </div>
            <div className={s.secondColumn}>
                <Chats/>
            </div>
        </div>
    )
}