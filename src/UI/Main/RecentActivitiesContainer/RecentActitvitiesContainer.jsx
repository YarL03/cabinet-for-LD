import React, { useEffect } from "react";
import s from './RecentActitvitiesContainer.module.css'
import RecentActivities from "./RecentActitvities/RecentActivities";
import OnlineUsersComponent from "./OnlineUsersComponent/OnlineUsersComponent";
import { useDispatch } from "react-redux";
import { getClients, getOnlineUsers } from "../../../redux/main-reducer";

const RecentActitvitiesContainer =  React.memo(props => {
    const dispatch = useDispatch()
   
    useEffect(() => {
        // dispatch(getClients(props.currentPage, props.pageSize))
        dispatch(getOnlineUsers())
    },[])
  
    return (
            <div className={s.details}>
  
               <RecentActivities
                currentClients={props.currentClients}
                totalClientsAmount={props.totalClientsAmount}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                other={props.other}/>
              
                <OnlineUsersComponent onlineUsers={props.onlineUsers} setOnlineUsers={props.setOnlineUsers}/>
                          
            </div>
          )

}) 
    

    
    


export default RecentActitvitiesContainer