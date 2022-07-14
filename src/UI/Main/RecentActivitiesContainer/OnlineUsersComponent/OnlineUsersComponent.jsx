import React from "react";
import OnlineUsers from "./OnlineUsers/OnlineUsers";
import s from './OnlineUsersComponent.module.css'
import style from '../../../components/common/Preloader/PreloaderSmall.module.css'
import Preloader from "../../../components/common/Preloader/Preloader";

const OnlineUsersComponent = (props) => {
    

    return (
        <div className={s.onlineUsers}>
                    <div className={s.cardHeader}>
                        <h2>Online Users</h2>
                    </div>
                    <div className={s.tableWrapper}>
                    {props.onlineUsers ? <table>
                        <tbody>
                         <OnlineUsers onlineUsers={props.onlineUsers}/>
                        </tbody>
                    </table>
                    : <Preloader s={style}/>}
                    </div>
                </div>

        
    )

}

export default OnlineUsersComponent