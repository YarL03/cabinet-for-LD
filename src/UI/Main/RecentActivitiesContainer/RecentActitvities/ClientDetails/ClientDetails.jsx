import React from "react";
import s from "./ClientDetails.module.css";

const ClientDetails = (props) => {
    return (
      props.currentClients.map(item => 
      <tr className={s.clients} key={item.id}>
        <td>{item.name}</td>
        <td>{item.kindOfLaw}</td>
        <td>{item.date}</td>
        <td>
          <span style={{background: item.style}} className={`${s.status}`}>{item.status}</span>
        </td>
      </tr>
      )
      
    )
  }
  


export default ClientDetails;
