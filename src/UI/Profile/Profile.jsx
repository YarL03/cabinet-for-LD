import React, { useEffect, useState } from "react";
import s from "./Profile.module.css";
import { NavLink, useParams } from "react-router-dom";
import MyPosts from "./MyPosts/MyPosts";
import { useDispatch, useSelector } from "react-redux";
import { getStatus, setStatus, updateStatus } from "../../redux/profile-reducer";

const Profile = (props) => {
  const [editMode, setEditMode] = useState(false) 
  const statusRedux = useSelector(state => state.profilePage.authorizedUserData.status)
  const [localStatus, setLocalStatus] = useState(statusRedux)
  
  const dispatch = useDispatch()

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const updateLocalStatus = (e) => {
    let value = e.target.value
    if(value.length >= 140) return
    setLocalStatus(e.target.value)
  }

  const submitLocalStatus = (e) => {
    e.preventDefault()
    setEditMode(!editMode)
    dispatch(setStatus(localStatus, true))
    dispatch(updateStatus(localStatus))
  }

  useEffect(() => {
    // dispatch(getStatus())
  }, [])
  
  return (
    <div className={s.profile}>
      <div className="firstColumn">
        <div className={s.userAva}>
          <img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album" />
          <NavLink to="/">
            <span>Edit</span>
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
                <div className={s.online}>{props.authorizedUserData.online}</div>
              </div>
              <h1 className={s.pageName}>{`${props.authorizedUserData.name} ${props.authorizedUserData.surname}`}</h1>
              <div className={s.status}>
                {!editMode && 
                <div className={s.defaultStatus} onClick={toggleEditMode}>{statusRedux || "установить статус"}</div>
                }
                {editMode &&
                <div className={s.statusModal}>
                  <form onSubmit={submitLocalStatus}>
                  <input autoFocus onChange={updateLocalStatus} value={localStatus}/>
                  <button type="submit">Сохранить</button>
                  </form>
                </div>
                }
              </div>
            </div>
            <div className={s.pageInfoShort}>
              <div className={s.profileInfo}>
                <div className={s.infoRow}>
                  <h3 className={s.label}>Current city:</h3>
                  <div className={s.labeled}>{props.authorizedUserData.currentCity}</div>
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
        <MyPosts posts={props.posts} newPostText={props.newPostText} setLike={props.setLike}
         setAddPost={props.setAddPost} setUpdatePostState={props.setUpdatePostState}/>
      </div>
      <div className={s.thirdColumn}>asdas</div>
    </div>
  );
};

export default Profile;
