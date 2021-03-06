import React from "react";
import s from "./Profile.module.css";
import { NavLink } from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";
import { StatusForm } from "./StatusForm";

const Profile = (props) => { 
  

  console.log('render')
  debugger
  
  return (
    <div className={s.profile}>
      <div className="firstColumn">
        <div className={s.userAva}>
          <img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album" />
          <NavLink to="/">
            <span>Редактировать</span>
          </NavLink>
        </div>
        <div className={s.servicesBtns}>
          <button>Services</button>
          <button>Appeals</button>
          <button>Notifications</button>
        </div>
      </div>

      <div className="secondColumn">
        <div className="pageBlock">
          <div className={s.pageInfo}>
            <div className={s.pageTop}>
              <div className={s.pageStatus}>
                <div className={s.online}>{props.authUserData.online ? 'online' : 'offline'}</div>
              </div>
              <h1 className={s.pageName}>{`${props.authUserData.name} ${props.authUserData.lastname}`}</h1>
              <StatusForm s={s} submitHandler={props.submitHandler} status={props.authUserData.status}/>
            </div>
            <div className={s.pageInfoShort}>
              <div className={s.profileInfo}>
                <div className={s.infoRow}>
                  <h3 className={s.label}>Current city:</h3>
                  <div className={s.labeled}>///</div>
                </div>
                <div className={s.showMore}>
                  <a>
                    <span>Show full information</span>
                    <span>Hide full information</span>
                  </a>
                </div>
              </div>
              <div className="profileMoreInfo"></div>  {/* Доделать позже*/}
            </div>
            <div className="pageInfoFull"></div>
          </div>
          <div className="counts"></div>
        </div>
        <MyPosts name={props.name} lastname={props.lastname} posts={props.posts}/>
      </div>
      <div className={s.thirdColumn}>asdas</div>
    </div>
  );
};

export default Profile;
