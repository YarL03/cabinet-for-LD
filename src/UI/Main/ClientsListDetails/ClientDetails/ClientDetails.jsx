import * as axios from "axios";
import React from "react";
import s from "./ClientDetails.module.css";

class ClientDetails extends React.Component {

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => { //https://jsonplaceholder.typicode.com/users
      let statuses = [{status: 'Resolved', style: "#8de02c"}, {status: 'Waiting', style: "#f9ca3f"}, {status: 'In progress', style: "#1795c1"}, {status: 'Rejected', style: "#f00"}]
      let kindsOfLaw = ["Civil Law", "Land Law"]
      let allClients = response.data.map(item => {
        return {...item, ...statuses[Math.floor(Math.random()*statuses.length)],
           kindOfLaw: kindsOfLaw[Math.floor(Math.random()*kindsOfLaw.length)],
          date: new Date().toLocaleDateString()}
      })
      this.props.setAllClients(allClients)
      this.props.setTotalClientsAmount(allClients.length)
      if(this.props.currentClients.length === 0) this.props.setCurrentClients(allClients.slice(allClients.length-8).reverse())

    console.log(response)})
    .catch(error => {
      console.log(error)
      this.props.setAllClients([
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
      {
        name: "Ivan Ivanov",
        kindOfLaw: "Civil Law",
        date: "27.02.2022",
        status: "Resolved",
        style: "#8de02c",
        id: 17,
      },
    ])
  })}

  render() {
    return (
      this.props.currentClients.map(item => 
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
