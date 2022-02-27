import React from "react";
import ClientDetails from "./ClientDetails/ClientDetails";
import s from './ClientsListDetails.module.css'
import OnlineUser from "./OnlineUser/OnlineUser";

const ClientsListDetails = ({clients}) => {
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
                        {clients.map(client => 
                            <ClientDetails client={client} key={client.id}/>    
                        )}
                    </tbody>
                </table>
            </div>
            
            <div className={s.onlineUsers}>
                <div className={s.cardHeader}>
                    <h2>Online Users</h2>
                </div>
                <table>
                    <OnlineUser/>
                    <OnlineUser/>
                    <OnlineUser/>
                    <OnlineUser/>
                    <OnlineUser/>
                    <OnlineUser/>
                    <OnlineUser/>
                    <OnlineUser/>
                    <OnlineUser/>
                    <OnlineUser/>
                    <OnlineUser/>
                    
                    
                </table>
            </div>
        </div>
    )
}

export default ClientsListDetails