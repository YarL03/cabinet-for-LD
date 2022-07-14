import React from "react";
import UserImg from "../../../СrosspageComponents/UserImg";
import s from './Message.module.css'

export const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.userImg}>
                <UserImg/>
            </div>
            <div className={s.content}>
                <div className={s.nameAndDate}>
                    <div className={s.name}>{props.message.name + ' ' + props.message.lastname}</div>
                    <div className={s.date}>10:05</div>
                </div>
                <div className={s.innerContent}>{props.message.content}</div>
            </div>
        </div>
    )
}