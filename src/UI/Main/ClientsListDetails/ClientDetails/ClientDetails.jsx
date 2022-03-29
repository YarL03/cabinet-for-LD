import * as axios from "axios";
import React from "react";
import s from "./ClientDetails.module.css";

class ClientDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    axios.get('https://...').then(response => response)
    .catch(error => {
      console.log(error)
      this.props.setClients([
      {
        name: "Ivan Ivanov",
        kindOfLaw: "Civil Law",
        date: "27.02.2022",
        status: "Resolved",
        style: "#8de02c",
        id: 21,
      },
      {
        name: "Ivan Ivanov",
        kindOfLaw: "Civil Law",
        date: "20.02.2022",
        status: "Waiting",
        style: "#f9ca3f",
        id: 20,
      },
      {
        name: "Ivan Ivanov",
        kindOfLaw: "Land Law",
        date: "15.02.2022",
        status: "Resolved",
        style: "#8de02c",
        id: 12,
      },
      {
        name: "Ivan Ivanov",
        kindOfLaw: "Civil Law",
        date: "27.02.2022",
        status: "In progress",
        style: "#1795c1",
        id: 13,
      },
      {
        name: "Ivan Ivanov",
        kindOfLaw: "Civil Law",
        date: "09.02.2022",
        status: "Rejected",
        style: "#f00",
        id: 14,
      },
      {
        name: "Ivan Ivanov",
        kindOfLaw: "Land Law",
        date: "12.02.2022",
        status: "Resolved",
        style: "#8de02c",
        id: 15,
      },
      {
        name: "Ivan Ivanov",
        kindOfLaw: "Civil Law",
        date: "27.02.2022",
        status: "Resolved",
        style: "#8de02c",
        id: 16,
      },
    ])
  })}

  render() {
    
    return (
      this.props.clients.map(item => 
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.kindOfLaw}</td>
        <td>{item.date}</td>
        <td>
          <span style={{background: item.style}} className={`${s.status}`}>{item.status}</span>
        </td>
      </tr>
      )
      
    );
  }
  
};

export default ClientDetails;
