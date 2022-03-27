import { connect } from "react-redux";
import { addPostActionCreator, updatePostStateActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
})

let mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => {
    dispatch(updatePostStateActionCreator(text))},

  addPost: () => dispatch(addPostActionCreator()),
})

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;