import { useSelector } from "react-redux";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  const authorizedUserData = useSelector(state => state.profilePage.authorizedUserData)
  const posts = useSelector(state => state.profilePage.posts)
  const statusRedux = useSelector(state => state.profilePage.authorizedUserData.status)

  return <Profile authorizedUserData={authorizedUserData} posts={posts} statusRedux={statusRedux}/>
}

 

export default ProfileContainer;