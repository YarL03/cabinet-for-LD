import { useDispatch, useSelector } from "react-redux";
import { setStatus, updateStatus } from "../../redux/auth-reducer";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  const authUserData = useSelector(state => state.auth.authUserData)
  
  const posts = useSelector(state => state.profilePage.posts)
  const dispatch = useDispatch()

  const submitStatus = (status) => {
    dispatch(setStatus(status))
    dispatch(updateStatus(authUserData.uid, status))
  }

  return <Profile authUserData={authUserData} posts={posts} submitHandler={submitStatus}/>
}

 

export default ProfileContainer;