import React from "react";
import { Link } from "react-router-dom";
import { DialogItem } from "./DialogItem/DialogItem";

export const Dialogs = (props) => {
    debugger
    return (
        <>
            {props.chats.map(chat => {
                
                return <Link key={chat.with} to={`${chat.with}`}>
                    <DialogItem unread={props.unreadMsg.filter(item => item.from === chat.with).length > 0} with={chat.with} date={chat.createdAt} lastMessage={chat.lastMessage} name={chat.name + ' ' + chat.lastname}/>
                </Link>
            })}
        </>
    )
}