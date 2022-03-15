import React from "react";
import Card from "./Card/Card";
import s from './CardList.module.css'

const CardList = ({cards}) => {
    return (
        <div className={s.cardBox}>
            {cards.map(card =>
                <Card card={card} key={card.id}/>
                )}
        </div>
    )
}

export default CardList