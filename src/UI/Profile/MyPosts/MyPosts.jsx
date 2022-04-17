import React from "react";
import UserImg from "../../СrosspageComponents/UserImg";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
 
  function resizePostArea(e) {
    document.querySelector("#postArea").style.height = `63px`;
    let scHeight = e.target.scrollHeight;
    document.querySelector("#postArea").style.height = `${scHeight}px`
  }

  function onAddPost() {
    if (!props.newPostText) return;
    props.setAddPost()
  }

  const onPostChange = (e) => {
    let text = e.target.value;
    console.log(text);
    props.setUpdatePostState(text)
  };
  
  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.userImg}>
          <UserImg/>
        </div>
        <div className={s.wrapperPost}>
          <textarea
            id="postArea"
            onKeyDown={resizePostArea}
            onChange={onPostChange}
            placeholder="What's new?"
            value={props.newPostText}
          />
        </div>
        <div id="postButtons" className={s.postButtons}>
          <button onClick={onAddPost} className={s.postSubmit}>
            Post
          </button>
        </div>
      </div>
      {props.posts.map((post, index) => (
        <Post key={index} setLike={props.setLike} post={post} />
      ))}
    </div>
  );
};

export default MyPosts;