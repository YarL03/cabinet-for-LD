import React from "react";
import { useSelector } from "react-redux";
import Circle from "../../../components/common/Circle/Circle";
import UserImg from "../../../СrosspageComponents/UserImg";
import s from "./DialogItem.module.css"

export const DialogItem = (props) => {
    

    console.log(props)
    
    return (
        <div className={s.dialogItem}>
            <div className={s.userImg}>
                <UserImg/>
            </div>
            <div className={s.messageContent}>
                <div className={s.nameDialog}>{props.name}</div>
                <div className={s.content}>
                    <div className={s.innerImg}><UserImg/></div>
                    <div className={s.message}><span style={props.unread ? {background: 'rgb(237 241 228)'} : {}}>{props.lastMessage}</span></div>
                    {props.unread ? <Circle s={s}/> : <></>}
                </div>
            </div>
            <div className={s.time}>{`${new Date(props.date).getHours()}:${(new Date(props.date).getMinutes() < 10) 
                || (new Date(props.date).getMinutes() === 0) ? '0' + new Date(props.date).getMinutes() 
                : new Date(props.date).getMinutes()}`}</div>
        </div>
    )
}