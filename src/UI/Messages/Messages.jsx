import React from "react";
import { Outlet } from "react-router-dom";
import { Chats } from "./Chats/Chats";
import s from './Messages.module.css'

export const Messages = (props) => {
    return (
        <div className={s.messages}>
            <div className={s.firstColumn}>
            <Outlet/>  
            </div>
            <div className={s.secondColumn}>
                <Chats/>
            </div>
        </div>
    )
}