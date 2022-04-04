import React from "react";
import OnlineUsers from "./OnlineUsers/OnlineUsers";
import s from './OnlineUsersComponent.module.css'

const OnlineUsersComponent = (props) => {
    

    return (
        <div className={s.onlineUsers}>
                    <div className={s.cardHeader}>
                        <h2>Online Users</h2>
                    </div>
                    <div className={s.tableWrapper}>
                    <table>
                        <tbody>
                            <OnlineUsers onlineUsers={props.onlineUsers}/>
                        </tbody>
                    </table>
                    </div>
                </div>

        
    )

}

export default OnlineUsersComponent