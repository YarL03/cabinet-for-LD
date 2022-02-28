import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="firstColumn">
          <div className="userAva">
            <img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album" />
          </div>
        </div>

        <div className="secondColumn">
          <div>desription</div>
          <MyPosts />
        </div>

        
      </div>
    </div>
  );
};

export default Profile;
