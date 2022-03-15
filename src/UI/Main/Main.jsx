import React, { useState } from "react";
import CardList from "./CardList/CardList";
import Charts from "./Charts/Charts";
import ClientsListDetails from "./ClientsListDetails/ClientsListDetails";


const Main = (props) => {
    

    return (
        <div>
        <CardList cards={props.mainPage.cards}/>
        <Charts/>
        <ClientsListDetails clients={props.mainPage.clients} onlineUsers={props.mainPage.onlineUsers}/>
        </div>
    )
}

export default Main