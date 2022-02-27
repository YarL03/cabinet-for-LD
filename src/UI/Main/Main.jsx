import React, { useState } from "react";
import CardList from "./CardList/CardList";
import ClientsListDetails from "./ClientsListDetails/ClientsListDetails";
import BriefcaseSVG from "./svg/BriefcaseSVG";
import ChatBubblesSVG from "./svg/ChatBubblesSVG";
import EyeSVG from "./svg/EyeSVG";
import MagnifierSVG from "./svg/MagnifierSVG";

const Main = (props) => {
    const [cards, setCards] = useState([
        {numbers: '123', name: 'Daily viewers', svg: <EyeSVG/>,  id : 3},
        {numbers: '124', name: 'Comments', svg: <ChatBubblesSVG/>,  id : 4},
        {numbers: '125', name: 'Resolved cases', svg: <BriefcaseSVG/>,  id: 5},
        {numbers: '126', name: `Admin's answers`, svg: <MagnifierSVG/>,  id: 6}
      ])

    const [clients, setClients] = useState([
        {name: 'Ivan Ivanov', kindOfLaw: 'Civil Law', date: '27.02.2022', status: 'Resolved', style: '#8de02c' , id: 10},
        {name: 'Ivan Ivanov', kindOfLaw: 'Civil Law', date: '20.02.2022', status: 'Waiting', style: '#f9ca3f' ,id: 11},
        {name: 'Ivan Ivanov', kindOfLaw: 'Land Law', date: '15.02.2022', status: 'Resolved', style: '#8de02c' ,id: 12},
        {name: 'Ivan Ivanov', kindOfLaw: 'Civil Law', date: '27.02.2022', status: 'In progress', style: '#1795c1' ,id: 13},
        {name: 'Ivan Ivanov', kindOfLaw: 'Civil Law', date: '09.02.2022', status: 'Rejected',style: '#f00' , id: 14},
        {name: 'Ivan Ivanov', kindOfLaw: 'Land Law', date: '12.02.2022', status: 'Resolved', style: '#8de02c' ,id: 15},
        {name: 'Ivan Ivanov', kindOfLaw: 'Civil Law', date: '27.02.2022', status: 'Resolved', style: '#8de02c' ,id: 16},
    ])

    return (
        <div>
        <CardList cards={cards}/>
        <ClientsListDetails clients={clients}/>
        </div>
    )
}

export default Main