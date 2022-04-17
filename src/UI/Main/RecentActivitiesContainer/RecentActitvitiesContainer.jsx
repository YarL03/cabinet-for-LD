import React from "react";
import s from './RecentActitvitiesContainer.module.css'
import RecentActivities from "./RecentActitvities/RecentActivities";
import OnlineUsersComponent from "./OnlineUsersComponent/OnlineUsersComponent";

class RecentActitvitiesContainer extends React.Component {
    

    componentDidMount() {
      this.props.getClients(this.props.other.currentPage, this.props.other.pageSize)
      this.props.getOnlineUsers()
    }

    pagination = (pages) => {
        const onPageChanged = (p) => {
          this.props.getClients(p, this.props.other.pageSize)
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