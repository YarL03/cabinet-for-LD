import BriefcaseSVG from "../UI/Main/svg/BriefcaseSVG"
import ChatBubblesSVG from "../UI/Main/svg/ChatBubblesSVG"
import EyeSVG from "../UI/Main/svg/EyeSVG"
import MagnifierSVG from "../UI/Main/svg/MagnifierSVG"

const SET_CARDS = 'SET_CARDS'
const SET_USERS = 'SET_USERS'
const SET_CLIENTS = 'SET_CLIENTS'

let initialState = {
    cards: [
        { numbers: "123", name: "Daily viewers", svg: <EyeSVG />, id: 3 },
        { numbers: "124", name: "Comments", svg: <ChatBubblesSVG />, id: 4 },
        {
          numbers: "125",
          name: "Resolved cases",
          svg: <BriefcaseSVG />,
          id: 5,
        },
        {
          numbers: "126",
          name: `Admin's answers`,
          svg: <MagnifierSVG />,
          id: 6,
        },
      ],
      clients: [],
      onlineUsers: [],
}

const mainReducer = (state = initialState, action) => {

  switch(action.type) {
    case SET_CARDS: 
      return {...state, cards: [...state.cards, ...action.cards]}

    case SET_USERS: 
      return {...state, onlineUsers: [...state.onlineUsers, ...action.onlineUsers]}
  
    case SET_CLIENTS: 
      return {...state, clients: [...state.clients, ...action.clients]}

    default: return state
  }
}

export const setCardsAC = (cards) => ({
  type: SET_CARDS,
  cards
})

export const setOnlineUsersAC = (onlineUsers) => ({
  type: SET_USERS, 
  onlineUsers,
})

export const setClientsAC = (clients) => ({
  type: SET_CLIENTS,
  clients
})

export default mainReducer