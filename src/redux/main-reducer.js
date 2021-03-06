import { ClientsAPI, firestoreAPI} from "../api/api"
import BriefcaseSVG from "../UI/Main/svg/BriefcaseSVG"
import ChatBubblesSVG from "../UI/Main/svg/ChatBubblesSVG"
import EyeSVG from "../UI/Main/svg/EyeSVG"
import MagnifierSVG from "../UI/Main/svg/MagnifierSVG"

const SET_CARDS = 'main/SET_CARDS'
const SET_USERS = 'main/SET_USERS'
const SET_CURRENT_CLIENTS = 'main/SET_CURRENT_CLIENTS'
const SET_TOTAL_CLIENTS_AMOUNT = 'main/SET_TOTAL_CLIENTS_AMOUNT'
const SET_CURRENT_PAGE = 'main/SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'main/TOGGLE_IS_FETCHING'
const SET_LISTENER = 'main/SET_LISTENER' 
const CALL_UNSUB = 'main/CALL_UNSUB'

const statuses = [{status: 'Resolved', style: "#8de02c"}, {status: 'Waiting', style: "#f9ca3f"}, 
{status: 'In progress', style: "#1795c1"}, {status: 'Rejected', style: "#f00"}]
const kindsOfLaw = ["Civil Law", "Land Law"]

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
      currentClients: [],
      totalClientsAmount: 0,
      currentPage: 1,
      onlineUsers: null,
      pageSize: 8,
      isFetching: false,
      listeners: []
}

const mainReducer = (state = initialState, action) => {

  switch(action.type) {
    case SET_CARDS: 
      return {...state, cards: [...state.cards, ...action.cards]}

    case SET_USERS: 
      return {...state, onlineUsers: [...action.onlineUsers]}

    case SET_TOTAL_CLIENTS_AMOUNT: 
      return {...state, totalClientsAmount: action.amount}

    case SET_CURRENT_CLIENTS:
      return {...state, currentClients: action.currentClients}

    case SET_CURRENT_PAGE: 
      return {...state, currentPage: action.currentPage}
      
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
      
    case SET_LISTENER: 
      return {...state, listeners: [...state.listeners, action.listener]}

    case CALL_UNSUB: {
      state.listeners.forEach(unsub => unsub())
      return {...state, listeners: []}
    }

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

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})

export const getClients = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(currentPage))
  dispatch(toggleIsFetching(true))
  let response = await ClientsAPI.getClients(currentPage, pageSize)

  dispatch(toggleIsFetching(false))
  let currentClients = response.items.map(item => {
      return {...item, ...statuses[Math.floor(Math.random()*statuses.length)],
          kindOfLaw: kindsOfLaw[Math.floor(Math.random()*kindsOfLaw.length)],
          date: new Date().toLocaleDateString()}
      })
      dispatch(setTotalClientsAmount(50))
      dispatch(setCurrentClients(currentClients))

}

export const getOnlineUsers = () => async (dispatch) => {
  try {
    const online = await firestoreAPI.getCondition(['users'], ['online', '==', true])
    const arr = []

    const setNewOnline = (arrUsers) => {
      const newOnline = arrUsers.filter((item) => item.online)
      dispatch(setOnlineUsers(newOnline))
    }

    online.forEach((doc) => arr.push(doc.data())) 
    console.log(arr)
    const unsubscribe = firestoreAPI.listenGroup(['users'], ['online', 'in', [false, true]], setNewOnline)
    dispatch(setOnlineUsers(arr))
    dispatch(setListener(unsubscribe))
  }
  catch (err) {
    console.log(err)
  }
}

export const setListener = (listener) => ({
  type: SET_LISTENER,
  listener
})

export const callUnsub = () => ({
  type: CALL_UNSUB
})


export default mainReducer