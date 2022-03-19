import React from "react";
import s from "./Chats.module.css";

export const Chats = (props) => {
  return (
    <div className={s.chats}>
      <div className={s.wrapper}>
        <div className={s.allChats}>All chats</div>
        <div className={s.unread}>Unread</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.recentChats}>Recent chats</div>
        
      </div>
    </div>
  );
};
