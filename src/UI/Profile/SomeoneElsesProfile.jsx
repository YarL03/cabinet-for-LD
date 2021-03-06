import React from "react";
import s from "./Profile.module.css";
import { NavLink } from "react-router-dom";



const SomeoneElsesProfile = (props) => {
  console.log(props.user.name)
  debugger
  return (
    <div className={s.profile}>
      <div className="firstColumn">
        <div className={s.userAva}>
          <img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album" />
          <NavLink to={`/messages/${props.user.uid}`}>
            <span>Написать сообщение</span>
          </NavLink>
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
                <div className={s.online}>{props.user.online ? 'online' : 'offline'}</div>
              </div>
              <h1 className={s.pageName}>{`${props.user.name} ${props.user.lastname}`}</h1>
              <div className={s.statusStranger}>
                <div className={s.defaultStatus}>{props.user.status || ""}</div>
              </div>
            </div>
            <div className={s.pageInfoShort}>
              <div className={s.profileInfo}>
                <div className={s.infoRow}>
                  <h3 className={s.label}>Current city:</h3>
                  <div className={s.labeled}>{'/\./'}</div>
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
