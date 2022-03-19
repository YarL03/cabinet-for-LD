import React from "react";
import UserImg from "../../СrosspageComponents/UserImg";
import { Chats } from "../Chats/Chats";
import s from "./Dialog.module.css";

export const Dialog = (props) => {
  return (
    <div className={s.dialog}>
      <div className={s.firstColumn}>
        <div className={s.topbar}>
          <div className={s.back}>Back</div>
          <div className={s.nameStatus}>
            <div className={s.name}>Ivan Ivanov</div>
            <div className={s.status}>online</div>
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
          </div>
        </div>
        <div className={s.messagesArea}></div>
        <div className={s.textArea}></div>
      </div>
      <div className={s.secondColumn}>
        <Chats />
      </div>
    </div>
  );
};
