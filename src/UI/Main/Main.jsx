import React from "react";
import CardList from "./CardList/CardList";
import Charts from "./Charts/Charts";
import ClientsListDetails from "./ClientsListDetails/ClientsListDetails";


const Main = (props) => {
    

    return (
        <div>
        <CardList cards={props.cards}/>
        <Charts/>
        <ClientsListDetails currentClients={props.currentClients} onlineUsers={props.onlineUsers} 
        setOnlineUsers={props.setOnlineUsers} setAllClients={props.setAllClients}
        setCurrentClients={props.setCurrentClients} setTotalClientsAmount={props.setTotalClientsAmount}
        setViewAllClients={props.setViewAllClients} setCurrentPage={props.setCurrentPage}

        other={props}/>
        </div>
    )
}

export default Main