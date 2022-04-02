import { connect } from "react-redux";
import { addPostActionCreator, setLikeAC, updatePostStateActionCreator } from "../../redux/profile-reducer";
import Profile from "./Profile";

const mapStateToProps = (state) => ({
  authorizedUser: state.profilePage.authorizedUser,
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
})

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => {
    dispatch(updatePostStateActionCreator(text))},

  addPost: () => dispatch(addPostActionCreator()),

  setLike: (isLiked) => dispatch(setLikeAC(isLiked)),
})

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
 

export default ProfileContainer;