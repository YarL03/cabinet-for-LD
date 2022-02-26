import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <Post message='Hey, how are you?' likeAmount="5" />
      <Post message="It's my first post" likeAmount="15" />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
