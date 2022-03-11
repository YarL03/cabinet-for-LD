import React from "react";
import UserImg from "../../../СrosspageComponents/UserImg";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.postTop}>
        <div className={s.userImg}>
          <UserImg />
        </div>
        <div className={s.postHeader}>
          <h5 className={s.postAuthor}>Ivan Ivanov</h5>
          <div className={s.postDate}>
            <span className={s.date}>22 Nov 2021</span>
          </div>
        </div>
        <div className={s.postActions}>
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
      <div className={s.message}>{props.message}</div>

      <div className={s.likeWrap}>
        <div className={s.likeCount}>
          <span className={s.likeIcon}>
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h24v24H0z"></path>
                <path
                  d="M16 4a5.95 5.95 0 00-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 007.73 4 5.73 5.73 0 002 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0016.27 4zm.27 1.8a3.93 3.93 0 013.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 01-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 017.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 001.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z"
                  fill="currentColor"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
          </span>
          <span className={s.likeAmount}>{props.likeAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
