import React from "react";
import { Link } from "react-router-dom";
import s from './OnlineUsers.module.css'

const OnlineUsers = React.memo(props => {
    debugger
    return (
        props.onlineUsers.map(item =>
            
            <tr className={s.onlineUsers} key={item.id}>
                <Link to={`profile/${item.uid}`}>
                <td><div className={s.imgBx}><img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album"/></div></td>
                </Link>
                <td><span>{item.name} </span>
                <span>{item.lastname}</span></td>
            </tr>
            
            )
    )
})

export default OnlineUsers