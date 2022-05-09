import React from "react";
import { useSelector } from "react-redux";
import { Dialog } from "./Dialog";

export const DialogContainer = (props) => {
  const dialogs = useSelector(state => state.messagesPage.dialogs)

  return <Dialog dialogs={dialogs}/>
}
