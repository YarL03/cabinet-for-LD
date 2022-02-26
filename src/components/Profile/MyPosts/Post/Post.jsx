import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album" />
      post1
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
