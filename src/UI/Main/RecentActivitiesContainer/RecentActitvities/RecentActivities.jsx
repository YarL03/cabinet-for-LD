import React from "react";
import ClientDetails from "./ClientDetails/ClientDetails";
import s from './RecentActivities.module.css'
import Preloader from "../../../components/common/Preloader/Preloader";

const RecentActivities = (props) => {
    
    let pagesCount = Math.ceil(props.other.totalClientsAmount / props.other.pageSize)

    let pages = []
    for(let i = 1; i<=pagesCount; i++) {
        pages.push(i)
    }

    // const onViewAllClick = () => {
    //     // let currentClients = props.other.viewAllPressed ? props.other.allClients.slice(props.other.allClients.length-8).reverse():
    //     // props.other.allClients.slice(props.other.allClients.length - props.other.pageSize).reverse()
    //     props.setViewAllClients(!props.other.viewAllPressed)
    //     if(props.other.viewAllPressed) props.setCurrentPage(1)
    // }

    return (
        <div className={s.recentActivities}>
                <div className={s.cardHeader}>
                    <h2>Recent Activities</h2>
                    <button   className={s.btn} type="button">View All</button>
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
                            
                        {props.other.isFetching ? <Preloader s={s}/> : <ClientDetails currentClients={props.currentClients}/>}
    
                    </tbody>
                </table>
                {props.pagination(pages)} 
            </div>
    )
}

export default RecentActivities