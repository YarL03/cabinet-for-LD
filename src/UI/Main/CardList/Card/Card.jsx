import React from "react";
import s from "./Card.module.css";


const Card = ({card}) => {
  
  return (
  
      <div className={s.card}>
        <div>
          <div className={s.numbers}>{card.numbers}</div>
          <div className={s.cardName}>{card.name}</div>
        </div>
        <div className={s.iconBox}>
            {card.svg}
        </div>
      </div>
      
    
  );
};

export default Card