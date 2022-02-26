import React from "react";
import s from "./Card.module.css";

const Card = ({cardData}) => {
  return (
    <div className={s.cardBox}>
      <div className={s.card}>
        <div>
          <div className={s.numbers}>123{cardData.numbers}</div>
          <div className={s.cardName}>viewers{cardData.name}</div>
        </div>
        <div className={s.iconBox}>
            svg
        </div>
      </div>
      <div className={s.card}>
        <div>
          <div className={s.numbers}>{cardData.numbers}</div>
          <div className={s.cardName}>{cardData.name}</div>
        </div>
        <div className={s.iconBox}>
            svg
        </div>
      </div>
      <div className={s.card}>
        <div>
          <div className={s.numbers}>{cardData.numbers}</div>
          <div className={s.cardName}>{cardData.name}</div>
        </div>
        <div className={s.iconBox}>
            svg
        </div>
      </div>
    </div>
  );
};

export default Card