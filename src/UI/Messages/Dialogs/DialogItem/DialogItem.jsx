import React from "react";
import UserImg from "../../../СrosspageComponents/UserImg";
import s from "./DialogItem.module.css"

export const DialogItem = (props) => {
    return (
        <div className={s.dialogItem}>
            <div className={s.userImg}>
                <UserImg/>
            </div>
            <div className={s.messageContent}>
                <div className={s.nameDialog}>{props.name}</div>
                <div className={s.content}>
                    <div className={s.innerImg}><UserImg/></div>
                    <div className={s.message}><span>{props.messages}</span></div>
                </div>
            </div>
            <div className={s.time}>{props.date}</div>
        </div>
    )
}