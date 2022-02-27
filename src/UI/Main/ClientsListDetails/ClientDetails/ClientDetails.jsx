import React from "react";
import s from "./ClientDetails.module.css";

const ClientDetails = ({ client }) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.kindOfLaw}</td>
      <td>{client.date}</td>
      <td>
        <span style={{background: client.style}} className={`${s.status}`}>{client.status}</span>
      </td>
    </tr>
  );
};

export default ClientDetails;
