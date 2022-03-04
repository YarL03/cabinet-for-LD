import React from "react";
import UserImg from "../../../СrosspageComponents/UserImg";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <UserImg/>
      <div>
      {props.message}
      </div>
      
      <div>
        <span>{props.likeAmount} like</span>
      </div>
    </div>
  );
};

export default Post;
