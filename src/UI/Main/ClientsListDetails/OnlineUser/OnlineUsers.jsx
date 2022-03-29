import * as axios from "axios";
import React from "react";
import s from './OnlineUser.module.css'

class OnlineUsers extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get('https://...').then(response => alert(response))
        .catch(error => {
            alert(error)
            this.props.setOnlineUsers([
                { id: 1, name: "Yaroslav", surname: "Labetsky" },
                { id: 2, name: "David", surname: "Italy" },
                { id: 3, name: "Ivan", surname: "Ivanov" },
                { id: 4, name: "David", surname: "Italy" },
                { id: 5, name: "David", surname: "Italy" },
                { id: 6, name: "Yaroslav", surname: "Labetsky" },
                { id: 7, name: "David", surname: "Italy" },
                { id: 8, name: "David", surname: "Italy" },
                { id: 9, name: "David", surname: "Italy" },
                { id: 10, name: "David", surname: "Italy" },
                { id: 11, name: "David", surname: "Italy" },
              ])
        })

    }

    render() {
    return (
        this.props.onlineUsers.map(item =>
            <tr key={item.id}>
                <td style={{width: 60 + 'px'}}><div className={s.imgBx}><img src="https://sun9-45.userapi.com/impg/pdhdc93j8Ib2TqV8rjKE644cHAzrpbN6BprpSg/lLtLcMfaXN8.jpg?size=1280x960&quality=95&sign=1c61305bbc5cd4a882295f78385a37af&type=album"/></div></td>
                <td><h4>{item.name}<br></br><span>{item.surname}</span></h4></td>
            </tr>
            )
        
    )
    }
}

export default OnlineUsers