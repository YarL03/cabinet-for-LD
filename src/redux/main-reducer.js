import { ClientsAPI} from "../api/api"
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
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'  

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
      pageSize: 8,
      viewAllPressed: false,
      isFetching: null,
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
      return {...state, currentClients: action.currentClients}

    case SET_CURRENT_PAGE: 
      return {...state, currentPage: action.currentPage}

    case SET_VIEW_ALL_CLIENTS: 
      return {...state, viewAllPressed: action.viewAllPressed}
      
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching} 

    default: return state
  }
}

export const setCards = (cards) => ({
  type: SET_CARDS,
  cards
})

export const setOnlineUsers = (onlineUsers) => ({
  type: SET_USERS, 
  onlineUsers,
})

export const setAllClients = (allClients) => ({
  type: SET_ALL_CLIENTS,
  allClients
})

export const setCurrentClients = (currentClients) => ({
  type: SET_CURRENT_CLIENTS,
  currentClients
})

export const setTotalClientsAmount = (amount) => ({
  type: SET_TOTAL_CLIENTS_AMOUNT,
  amount
})

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})

export const setViewAllClients = (viewAllPressed) => ({
  type: SET_VIEW_ALL_CLIENTS, 
  viewAllPressed
})

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})

export const getClients = (currentPage, pageSize) => (dispatch) => {
  dispatch(setCurrentPage(currentPage))
  dispatch(toggleIsFetching(true))
      ClientsAPI.getClients(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        let statuses = [{status: 'Resolved', style: "#8de02c"}, {status: 'Waiting', style: "#f9ca3f"}, 
        {status: 'In progress', style: "#1795c1"}, {status: 'Rejected', style: "#f00"}]
        let kindsOfLaw = ["Civil Law", "Land Law"]
        let currentClients = data.items.map(item => {
        return {...item, ...statuses[Math.floor(Math.random()*statuses.length)],
           kindOfLaw: kindsOfLaw[Math.floor(Math.random()*kindsOfLaw.length)],
          date: new Date().toLocaleDateString()}
      }).reverse()
      dispatch(setTotalClientsAmount(50))
      dispatch(setCurrentClients(currentClients))
})
}

export const getOnlineUsers = () => (dispatch) => {
  ClientsAPI.getOnlineUsers().then(items => dispatch(setOnlineUsers(items)))
}


export default mainReducer