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
        totalClientsAmount={props.totalClientsAmount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        other={props}/>
        </div>
    )
}

export default Main