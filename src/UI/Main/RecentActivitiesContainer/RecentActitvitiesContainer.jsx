import * as axios from "axios";
import React from "react";
import s from './RecentActitvitiesContainer.module.css'
import RecentActivities from "./RecentActitvities/RecentActivities";
import OnlineUsersComponent from "./OnlineUsersComponent/OnlineUsersComponent";

class RecentActitvitiesContainer extends React.Component {
    

    componentDidMount() {
      this.props.toggleIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.other.currentPage}&count=${this.props.other.pageSize}`).then(response => {
        this.props.toggleIsFetching(false)
        let statuses = [{status: 'Resolved', style: "#8de02c"}, {status: 'Waiting', style: "#f9ca3f"}, 
        {status: 'In progress', style: "#1795c1"}, {status: 'Rejected', style: "#f00"}]
        let kindsOfLaw = ["Civil Law", "Land Law"]
        let currentClients = response.data.items.map(item => {
        return {...item, ...statuses[Math.floor(Math.random()*statuses.length)],
           kindOfLaw: kindsOfLaw[Math.floor(Math.random()*kindsOfLaw.length)],
          date: new Date().toLocaleDateString()}
      }).reverse()
      // this.props.setAllClients(allClients)
      this.props.setTotalClientsAmount(50)
      this.props.setCurrentClients(currentClients)
    
    console.log(response)})
    .catch(error => {
      console.log('error')
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
  })


  axios.get('https://...').then(response => alert(response))
  .catch(error => {
      console.log(error)
      this.props.setOnlineUsers([
          { id: 1, name: "Yaroslav", surname: "Labetsky" },
          { id: 2, name: "David", surname: "Italy" },
          { id: 3, name: "Ivan", surname: "Ivanov" },
          { id: 4, name: "David", surname: "Italy" },
          { id: 5, name: "David", surname: "Italy" },
          { id: 6, name: "Yaroslav", surname: "Labetsky" },
          { id: 7, name: "David", surname: "Italy" },
          { id: 8, name: "David", surname: "Italy" },
          { id: 9, name: "David", surname: "Italy" },
          { id: 10, name: "David", surname: "Italy" },
          { id: 11, name: "David", surname: "Italy" },
        ])
  })

    }

    pagination = (pages) => {
        const onPageChanged = (p) => {
            this.props.setCurrentPage(p)
            this.props.toggleIsFetching(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.other.pageSize}`).then(response => {
              this.props.toggleIsFetching(false)
        let statuses = [{status: 'Resolved', style: "#8de02c"}, {status: 'Waiting', style: "#f9ca3f"}, 
        {status: 'In progress', style: "#1795c1"}, {status: 'Rejected', style: "#f00"}]
        let kindsOfLaw = ["Civil Law", "Land Law"]
        let currentClients = response.data.items.map(item => {
        return {...item, ...statuses[Math.floor(Math.random()*statuses.length)],
           kindOfLaw: kindsOfLaw[Math.floor(Math.random()*kindsOfLaw.length)],
          date: new Date().toLocaleDateString()}
      }).reverse()
      this.props.setCurrentClients(currentClients)
    })
        }
        return (
            <div className={s.pagination}>{
                pages.map(p => 
                    <span key={p} className={this.props.other.currentPage === p ? s.selectedPage : undefined}
                    onClick={() =>{onPageChanged(p)}}>{p}</span>
                )
            }
            </div>
        )
    }

    render() {
        return (
            <div className={s.details}>

                <RecentActivities pagination={this.pagination}
                currentClients={this.props.currentClients} setAllClients={this.props.setAllClients}
                setCurrentClients={this.props.setCurrentClients} setTotalClientsAmount={this.props.setTotalClientsAmount} 
                setViewAllClients={this.props.setViewAllClients} setCurrentPage={this.props.setCurrentPage} other={this.props.other}/>
            
                <OnlineUsersComponent onlineUsers={this.props.onlineUsers} setOnlineUsers={this.props.setOnlineUsers}/>
                        
            </div>
        )
    }
}

export default RecentActitvitiesContainer