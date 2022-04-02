import BriefcaseSVG from "../UI/Main/svg/BriefcaseSVG"
import ChatBubblesSVG from "../UI/Main/svg/ChatBubblesSVG"
import EyeSVG from "../UI/Main/svg/EyeSVG"
import MagnifierSVG from "../UI/Main/svg/MagnifierSVG"

const SET_CARDS = 'SET_CARDS'
const SET_USERS = 'SET_USERS'
const SET_ALL_CLIENTS = 'SET_ALL_CLIENTS'
const SET_CURRENT_CLIENTS = 'SET_CURRENT_CLIENTS'
const SET_VIEW_ALL_CLIENTS = 'SET_VIEW_ALL_CLIENTS'
const SET_TOTAL_CLIENTS_AMOUNT = 'SET_TOTAL_CLIENTS_AMOUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

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
      allClients: [],
      currentClients: [],
      totalClientsAmount: 0,
      currentPage: 1,
      onlineUsers: [],
      pageSize: 10,
      viewAllPressed: false,
}

const mainReducer = (state = initialState, action) => {

  switch(action.type) {
    case SET_CARDS: 
      return {...state, cards: [...state.cards, ...action.cards]}

    case SET_USERS: 
      return {...state, onlineUsers: [...state.onlineUsers, ...action.onlineUsers]}
  
    case SET_ALL_CLIENTS: 
      return {...state, allClients: [...state.allClients, ...action.allClients]}

    case SET_TOTAL_CLIENTS_AMOUNT: 
      return {...state, totalClientsAmount: action.amount}

    case SET_CURRENT_CLIENTS:
      return {...state, currentClients: [...action.currentClients]}

    case SET_CURRENT_PAGE: 
      return {...state, currentPage: action.currentPage}

    case SET_VIEW_ALL_CLIENTS: 
      return {...state, currentClients: [...action.currentClients], viewAllPressed: action.viewAllPressed}  

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

export const setAllClientsAC = (allClients) => ({
  type: SET_ALL_CLIENTS,
  allClients
})

export const setCurrentClientsAC = (currentClients) => ({
  type: SET_CURRENT_CLIENTS,
  currentClients
})

export const setTotalClientsAmountAC = (amount) => ({
  type: SET_TOTAL_CLIENTS_AMOUNT,
  amount
})

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})

export const setViewAllClientsAC = ({currentClients, viewAllPressed}) => ({
  type: SET_VIEW_ALL_CLIENTS, //debug
  currentClients,
  viewAllPressed
})

export default mainReducer