import { connect } from "react-redux";
import { setAddPost, setLike, setUpdatePostState } from "../../redux/profile-reducer";
import Profile from "./Profile";

const mapStateToProps = (state) => ({
  authorizedUserData: state.profilePage.authorizedUserData,
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText
})

const ProfileContainer = connect(mapStateToProps, {
  setUpdatePostState,
  setAddPost,
  setLike,
})(Profile)
 

export default ProfileContainer;