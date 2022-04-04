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
        setCurrentClients={props.setCurrentClients} setTotalClientsAmount={props.setTotalClientsAmount}
        setViewAllClients={props.setViewAllClients} setCurrentPage={props.setCurrentPage}
        toggleIsFetching={props.toggleIsFetching}

        other={props}/>
        </div>
    )
}

export default Main