import { useSelector } from "react-redux";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  const authUserData = useSelector(state => state.auth.authUserData)
  const posts = useSelector(state => state.profilePage.posts)
  const statusRedux = useSelector(state => state.profilePage.status)

  return <Profile authUserData={authUserData} posts={posts} statusRedux={statusRedux}/>
}

 

export default ProfileContainer;