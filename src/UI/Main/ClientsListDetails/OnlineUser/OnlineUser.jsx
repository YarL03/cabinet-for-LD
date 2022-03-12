import React from "react";
import s from './OnlineUser.module.css'

const OnlineUser = (props) => {
    return (
        <tr>
            <td style={{width: 60 + 'px'}}><div className={s.imgBx}><img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album"/></div></td>
            <td><h4>{props.name}<br></br><span>{props.surname}</span></h4></td>
        </tr>
    )
}

export default OnlineUser