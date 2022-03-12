import React, { useState } from "react";
import CardList from "./CardList/CardList";
import Charts from "./Charts/Charts";
import ClientsListDetails from "./ClientsListDetails/ClientsListDetails";
import BriefcaseSVG from "./svg/BriefcaseSVG";
import ChatBubblesSVG from "./svg/ChatBubblesSVG";
import EyeSVG from "./svg/EyeSVG";
import MagnifierSVG from "./svg/MagnifierSVG";

const Main = (props) => {
    

    return (
        <div>
        <CardList cards={props.state.cards}/>
        <Charts/>
        <ClientsListDetails clients={props.state.clients} onlineUsers={props.state.onlineUsers}/>
        </div>
    )
}

export default Main