import React, { useRef } from "react";
import { rerenderApp } from "../../../render";
import UserImg from "../../СrosspageComponents/UserImg";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let textPost = useRef()

  function addButton() {
    document.querySelector(`#postButtons`).style.display = "block";
  }

  function hideButton(e) {
    document.querySelector(`#postButtons`).style.display = "none";
  }

  function resizePostArea(e) {
    document.querySelector("#postArea").style.height = `63px`;
    let scHeight = e.target.scrollHeight;
    document.querySelector("#postArea").style.height = `${scHeight}px`;
  }

  function submitPost(e) {
    let text = textPost.current.value
    props.addPost(text)
    rerenderApp()
  }

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.userImg}>
          <UserImg />
        </div>
        <div className={s.wrapperPost}>
          <textarea
            ref={textPost}
            id="postArea"
            onKeyDown={resizePostArea}
            onFocus={addButton}
            // onBlur={hideButton}
            placeholder="What's new?"
          ></textarea>
        </div>
        <div id="postButtons" className={s.postButtons}>
          <button onClick={submitPost} className={s.postSubmit}>
            Post
          </button>
        </div>
      </div>
      {props.posts.map((post) => (
        <Post message={post.message} likeAmount={post.likeAmount} />
      ))}
    </div>
  );
};

export default MyPosts;
