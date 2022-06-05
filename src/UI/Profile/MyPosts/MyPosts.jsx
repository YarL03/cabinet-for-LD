import React from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";
import UserImg from "../../СrosspageComponents/UserImg";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { PostForm } from "./PostForm";

//переписать на хуки
const MyPosts = React.memo(props => {
  const dispatch = useDispatch()

  const submitHandler = (data) => {
    debugger
    dispatch(addPost(data.postInput, props.name, props.lastname))
  }

console.log(`render MyPosts`)

  return (
    <div>
      <div className={s.wrapper}>
        <div className={s.userImg}>
          <UserImg/>
        </div>
        <PostForm s={s} submitHandler={submitHandler}/>
      </div>
      {props.posts.map((post, index) => (
        <Post key={index} setLike={props.setLike} post={post} />
      ))}
    </div>
  );
});

export default MyPosts;