import React from "react";
import PreloaderWrapper from "../../components/common/Preloader/PreloaderWrapper";
import UserImg from "../../СrosspageComponents/UserImg";
import s from "./Dialog.module.css";
import { Message } from "./Message/Message";
import { MessageForm } from "./MessageForm";
import style from '../../components/common/Preloader/PreloaderBig.module.css'
import Preloader from "../../components/common/Preloader/Preloader";
import { useRef } from "react";
import { useEffect } from "react";
import { setMessages } from "../../../redux/messsages-reducer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

//переписать на хуки
export const Dialog = ({user, messages, submitMessage}) => {
  const messageArea = useRef(null)
  const dispatch = useDispatch()

  
  useEffect(() => {
    if (messageArea.current && messages) {
      messageArea.current.scrollTo(0, messageArea.current.scrollHeight)
     }
     
  })
  

  return (
    <div className={s.dialog}>
      <div className={s.firstColumn}>
        <div className={s.topbar}>
          {user ? <><div className={s.back}>Back</div>
          <div className={s.nameStatus}>
            <div className={s.name}>{user.name + ' ' + user.lastname}</div>
            <div className={s.status}>{user.online ? 'online' : 'Не в сети'}</div>
          </div>
          <div className={s.actions}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="more_horizontal_24__Page-2"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="more_horizontal_24__more_horizontal_24">
                  <path
                    id="more_horizontal_24__Bounds"
                    d="M24 0H0v24h24z"
                  ></path>
                  <path
                    d="M18 10a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2c0-1.1.9-2 2-2zm-6 4a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2zm-6 0a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2z"
                    id="more_horizontal_24__Mask"
                    fill="currentColor"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div className={s.userImg}>
            <UserImg />
          </div></>
          : <div className={s.nameStatus}></div>}
        </div>
        <div className={s.messagesArea}>
         <div ref={messageArea} className={s.area}>{ messageArea.current && messages ?
            messages.map( (item, index) => 
            <Message key={index} date={'data.date'} message={item}/>
            )
          
          : <Preloader s={{height: '75px', position: 'relative',
          top: 'calc(50% - 37.5px)'}}/>}
          </div>
        </div>
        <MessageForm s={s} submitHandler={submitMessage}/>
      </div>
    </div>
  );
};
