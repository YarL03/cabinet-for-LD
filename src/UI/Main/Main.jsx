import React, { useState } from "react";
import CardList from "./CardList/CardList";

const Main = (props) => {
    const [cards, setCard] = useState([
        {numbers: '123', name: 'viewers', id : 3},
        {numbers: '124', name: 'hook', id : 4},
        {numbers: '125', name: 'map', id: 5},
        {numbers: '126', name: 'Ukraine', id: 6}
      ])

    return (
        <CardList cards={cards}/>
    )
}

export default Main