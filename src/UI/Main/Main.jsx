import React from "react";
import CardList from "./CardList/CardList";
import Charts from "./Charts/Charts";
import ClientsListDetails from "./ClientsListDetails/ClientsListDetails";


const Main = (props) => {
    

    return (
        <div>
        <CardList cards={props.cards}/>
        <Charts/>
        <ClientsListDetails clients={props.clients} onlineUsers={props.onlineUsers} setOnlineUsers={props.setOnlineUsers} setClients={props.setClients}/>
        </div>
    )
}

export default Main