import React, { useEffect } from "react";
import s from './RecentActitvitiesContainer.module.css'
import RecentActivities from "./RecentActitvities/RecentActivities";
import OnlineUsersComponent from "./OnlineUsersComponent/OnlineUsersComponent";
import { useDispatch } from "react-redux";
import { getOnlineUsers } from "../../../redux/main-reducer";
import { useState } from "react";

const RecentActitvitiesContainer =  React.memo(props => {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log('онлайн юзеры')
        debugger
        if (!props.onlineUsers)
        dispatch(getOnlineUsers())
          
    }, [])
  
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