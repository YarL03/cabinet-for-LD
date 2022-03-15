import React, { useRef } from "react";
import { addPostActionCreator, updatePostStateActionCreator } from "../../../redux/state";
import UserImg from "../../СrosspageComponents/UserImg";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let textPost = useRef();

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
    if (!props.newPostText) return;
    let action = addPostActionCreator()
    
    props.dispatch(action)
  }

  const onPostChange = () => {
    let text = textPost.current.value;
    console.log(text);
    let action = updatePostStateActionCreator(text)
    
    props.dispatch(action);
  };

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
            onChange={onPostChange}
            placeholder="What's new?"
            value={props.newPostText}
          />
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
