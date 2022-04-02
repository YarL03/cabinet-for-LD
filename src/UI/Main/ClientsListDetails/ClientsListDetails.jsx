import React from "react";
import ClientDetails from "./ClientDetails/ClientDetails";
import s from './ClientsListDetails.module.css'
import OnlineUsers from "./OnlineUser/OnlineUsers";

const ClientsListDetails = (props) => {
    let pagesCount = Math.ceil(props.other.totalClientsAmount / props.other.pageSize)

    let pages = []
    for(let i = 1; i<=pagesCount; i++) {
        pages.push(i)
    }

    const pagination = (pages) => {
        if (!props.other.viewAllPressed) return
        return (
            <div>{
                pages.map(p => 
                    <span key={p} className={props.other.currentPage === p  && s.selectedPage}
                    onClick={() =>{props.setCurrentPage(p)}}>{p}</span>
                )
            }
            </div>
        )
    }

    const onViewAllClick = () => {
        let currentClients = props.other.viewAllPressed ? props.other.allClients.slice(props.other.allClients.length-8).reverse():
        props.other.allClients.slice(props.other.allClients.length - props.other.pageSize).reverse()
        props.setViewAllClients({currentClients, viewAllPressed: !props.other.viewAllPressed})
    }

    return (
        <div className={s.details}>
            <div className={s.recentActivities}>
                <div className={s.cardHeader}>
                    <h2>Recent Activities</h2>
                    <button onClick={onViewAllClick}  className={s.btn} type="button">View All</button>
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
                            <ClientDetails currentClients={props.currentClients} setAllClients={props.setAllClients}
                            setCurrentClients={props.setCurrentClients} setTotalClientsAmount={props.setTotalClientsAmount} 
                            other={props.other}/>  
                            
                    </tbody>
                </table>
                {pagination(pages)} 
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