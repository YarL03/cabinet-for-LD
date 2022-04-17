import React from "react";
import CardList from "./CardList/CardList";
import Charts from "./Charts/Charts";
import RecentActitvitiesContainer from "./RecentActivitiesContainer/RecentActitvitiesContainer";




const Main = (props) => {  

    return (
        <div>
        <CardList cards={props.cards}/>
        <Charts/>
        <RecentActitvitiesContainer currentClients={props.currentClients} onlineUsers={props.onlineUsers} 
        setOnlineUsers={props.setOnlineUsers} setAllClients={props.setAllClients}
        setTotalClientsAmount={props.setTotalClientsAmount}
        setViewAllClients={props.setViewAllClients} getClients={props.getClients}
        getOnlineUsers={props.getOnlineUsers}
        other={props}/>
        </div>
    )
}

export default Main