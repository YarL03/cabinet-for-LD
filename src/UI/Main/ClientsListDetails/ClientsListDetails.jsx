import React from "react";
import ClientDetails from "./ClientDetails/ClientDetails";
import s from './ClientsListDetails.module.css'
import OnlineUsers from "./OnlineUser/OnlineUsers";

const ClientsListDetails = (props) => {
    return (
        <div className={s.details}>
            <div className={s.recentActivities}>
                <div className={s.cardHeader}>
                    <h2>Recent Activities</h2>
                    <button className={s.btn} type="button">View All</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Kind of law</td>
                            <td>Date</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                            <ClientDetails clients={props.clients} setClients={props.setClients}/>    
                    </tbody>
                </table>
            </div>
            
            <div className={s.onlineUsers}>
                <div className={s.cardHeader}>
                    <h2>Online Users</h2>
                </div>
                <div className={s.tableWrapper}>
                <table>
                    <tbody>
                        <OnlineUsers onlineUsers={props.onlineUsers} setOnlineUsers={props.setOnlineUsers}/>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default ClientsListDetails