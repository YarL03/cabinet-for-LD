import React from "react";
import s from './UserImg.module.css'

const UserImg = (props) => {
    return (
        <div className={s.user}>
            <img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album"/>
        </div>
    )
}

export default UserImg