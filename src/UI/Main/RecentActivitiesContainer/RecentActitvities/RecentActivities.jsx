import React from "react";
import ClientDetails from "./ClientDetails/ClientDetails";
import s from './RecentActivities.module.css'
import Preloader from "../../../components/common/Preloader/Preloader";
import { Pagination } from "../../../components/common/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { getClients } from "../../../../redux/main-reducer";

const RecentActivities = (props) => {
    const dispatch = useDispatch()
   
    const onPageChanged = (currentPage, pageSize) => {
        dispatch(getClients(currentPage, pageSize))
    }
    // const onViewAllClick = () => {
    // }

    return (
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
                            
                        {props.other.isFetching ? <Preloader s={s}/> : <ClientDetails currentClients={props.currentClients}/>}
    
                    </tbody>
                </table>
                <Pagination totalAmount={props.totalClientsAmount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={onPageChanged}/> 
            </div>
    )
}

export default RecentActivities