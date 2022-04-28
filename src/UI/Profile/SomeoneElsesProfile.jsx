import React, { useEffect, useState } from "react";
import s from "./Profile.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/profile-reducer";

const SomeoneElsesProfile = (props) => {
  const {id} = useParams()
  const userData = useSelector(state => state.profilePage.anotherUserData)
  const [isFetching, setIsFetching] = useState(false)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getUserData(+id, false)) // тут надо через suspense
  }, [userData])
  console.log(typeof id)
  return (
    <div className={s.profile}>
      <div className="firstColumn">
        <div className={s.userAva}>
          <img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album" />
        </div>
        <div className={s.servicesBtns}>
          <button>Здесь что-то будет</button>
          <button>Здесь что-то будет</button>
          <button>Здесь что-то будет</button>
        </div>
      </div>

      <div className="secondColumn">
        <div className="pageBlock">
          <div className={s.pageInfo}>
            <div className={s.pageTop}>
              <div className={s.pageStatus}>
                <div className={s.online}>{userData.online}</div>
              </div>
              <h1 className={s.pageName}>{userData.fullName}</h1>
              <div className={s.status}>
                <div className={s.defaultStatus}>{userData.status || ""}</div>
              </div>
            </div>
            <div className={s.pageInfoShort}>
              <div className={s.profileInfo}>
                <div className={s.infoRow}>
                  <h3 className={s.label}>Current city:</h3>
                  <div className={s.labeled}>{userData.currentCity}</div>
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
      </div>
      <div className={s.thirdColumn}>asdas</div>
    </div>
  );
};

export default SomeoneElsesProfile;