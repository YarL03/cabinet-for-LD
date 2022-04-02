import React from "react";
import UserImg from "../../../СrosspageComponents/UserImg";
import Like from "./Like";
import s from "./Post.module.css";

const Post = (props) => {

  const setLike = () => {
    props.setLike({
      isLiked: props.post.myLike,
      id: props.post.id
    })
  }

  return (
    <div className={s.item}>
      <div className={s.postTop}>
        <div className={s.userImg}>
          <UserImg />
        </div>
        <div className={s.postHeader}>
          <h5 className={s.postAuthor}>{`${props.post.name} ${props.post.surname}`}</h5>
          <div className={s.postDate}>
            <span className={s.date}>{props.post.date}</span>
          </div>
        </div>
        <div className={s.postActions}>
             <svg 
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <g
              id="more_horizontal_24__Page-2"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="more_horizontal_24__more_horizontal_24">
                <path id="more_horizontal_24__Bounds" d="M24 0H0v24h24z"></path>
                <path
                  d="M18 10a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2c0-1.1.9-2 2-2zm-6 4a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2zm-6 0a2 2 0 01-2-2c0-1.1.9-2 2-2a2 2 0 012 2 2 2 0 01-2 2z"
                  id="more_horizontal_24__Mask"
                  fill="currentColor"
                ></path>
              </g>
            </g>
          </svg>     
        </div>
      </div>
      <div className={s.message}>{props.post.message}</div>

      <div className={s.likeWrap}>
        <div className={s.likeCount}>
          <span className={s.likeIcon}>
            {<Like setLike={setLike} isLiked={props.post.myLike} color={props.post.color}/>}
          </span>
          <span className={s.likeAmount}>{props.post.likeAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
