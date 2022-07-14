import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMessages, readMessages, sendMessage, setMessages } from "../../../redux/messsages-reducer";
import { getAnotherUserData } from "../../../redux/profile-reducer";
import { Dialog } from "./Dialog";


export const DialogContainer = (props) => {
  const dispatch = useDispatch()
  const authUserData = useSelector(state => state.auth.authUserData)
  const anotherUserData = useSelector(state => state.profilePage.anotherUserData)
  const messages = useSelector(state => state.messagesPage.messages)
  const {id} = useParams()

  const submitMessage = (message) => {
    dispatch(sendMessage(authUserData, anotherUserData, message))
  }

debugger
  useEffect(() => {
    !messages ? dispatch(getMessages(authUserData.uid, id)) 
    : dispatch(readMessages(messages, id)) // чаты тоже надо апдейтить
    
    dispatch(getAnotherUserData(id))

  }, [messages])

  return <Dialog user={anotherUserData} messages={messages} submitMessage={submitMessage}/>
}
