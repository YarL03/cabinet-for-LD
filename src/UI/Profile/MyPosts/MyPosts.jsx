import React from "react";
import UserImg from "../../СrosspageComponents/UserImg";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

  function addButton() {
    document.querySelector(`#postButtons`).style.display = 'block'
  }

  function hideButton() {
    document.querySelector(`#postButtons`).style.display = 'none'
  } 

  function resizePostArea(e) {
    document.querySelector('#postArea').style.height = `63px`
    let scHeight = e.target.scrollHeight
    document.querySelector('#postArea').style.height = `${scHeight}px`
  }

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.userImg}>
          <UserImg />
        </div>
        <div className={s.wrapperPost}>
          <textarea id="postArea" onKeyDown={resizePostArea} onFocus={addButton} onBlur={hideButton} placeholder="What's new?"></textarea>
        </div>
        <div id="postButtons" className={s.postButtons}>
        <button  className={s.postSubmit}>Add post</button>
        </div>
      </div>
      <Post message="Hey, how are you?" likeAmount="5" />
      <Post message="It's my first post" likeAmount="15" />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
