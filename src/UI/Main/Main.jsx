import React, { useState } from "react";
import CardList from "./CardList/CardList";
import BriefcaseSVG from "./svg/BriefcaseSVG";
import ChatBubblesSVG from "./svg/ChatBubblesSVG";
import EyeSVG from "./svg/EyeSVG";
import MagnifierSVG from "./svg/MagnifierSVG";

const Main = (props) => {
    const [cards, setCard] = useState([
        {numbers: '123', name: 'viewers', svg: <EyeSVG/>,  id : 3},
        {numbers: '124', name: 'comments', svg: <ChatBubblesSVG/>,  id : 4},
        {numbers: '125', name: 'resolved cases', svg: <BriefcaseSVG/>,  id: 5},
        {numbers: '126', name: `admin's answers`, svg: <MagnifierSVG/>,  id: 6}
      ])

    return (
        <div>
        <CardList cards={cards}/>
        
        </div>
    )
}

export default Main