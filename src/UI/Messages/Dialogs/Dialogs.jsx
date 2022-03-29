import React from "react";
import { Link } from "react-router-dom";
import { DialogItem } from "./DialogItem/DialogItem";

export const Dialogs = ({store}) => {
    return (
        <>
            {store.getState().messagesPage.dialogs.map(dialog => (
                <Link to={`${dialog.id}`}>
                    <DialogItem key={dialog.id} messages={dialog.messages} name={dialog.name} date={dialog.date}/>
                </Link>
            ))}
        </>
    )
}