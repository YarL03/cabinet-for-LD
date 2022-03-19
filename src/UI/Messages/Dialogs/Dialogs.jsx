import React from "react";
import { Link } from "react-router-dom";
import { DialogItem } from "./DialogItem/DialogItem";

export const Dialogs = (props) => {
    return (
        <>
            {props.dialogs.map(dialog => (
                <Link to={`${dialog.id}`}>
                    <DialogItem message={dialog.message} name={dialog.name} date={dialog.date}/>
                </Link>
            )) }
        </>
    )
}