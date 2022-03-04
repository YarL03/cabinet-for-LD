import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
        <div className={s.profile}>
          <div className="firstColumn">
            <div className={s.userAva}>
              <img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album" />
              <span>Edit</span>
            </div>
            <div className="servicesBtns">
              <button>Services</button>
              <button>Status of appeals</button>
              <button>Notifications</button>
            </div>
          </div>

          <div className="secondColumn">
            <div className="description"></div>
            <div className="postField"></div>
            <MyPosts />
          </div>
        </div>
  );
};

export default Profile;
