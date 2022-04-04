import { connect } from "react-redux";
import { setCardsAC, setAllClientsAC, setOnlineUsersAC, setCurrentClientsAC, setTotalClientsAmountAC, setViewAllClientsAC, setCurrentPageAC, toggleIsFetchingAC } from "../../redux/main-reducer";
import Main from "./Main";

const mapStateToProps = (state) => ({
    cards: state.mainPage.cards,
    currentClients: state.mainPage.currentClients,
    onlineUsers: state.mainPage.onlineUsers,
    currentPage: state.mainPage.currentPage,
    allClients: state.mainPage.allClients,
    totalClientsAmount: state.mainPage.totalClientsAmount,
    pageSize: state.mainPage.pageSize,
    viewAllPressed: state.mainPage.viewAllPressed,
    isFetching: state.mainPage.isFetching
})

const mapDispatchToProps = (dispatch) => ({
    setCards: (cards) => {
        dispatch(setCardsAC(cards))
    },

    setAllClients: (allClients) => {
        dispatch(setAllClientsAC(allClients))
    },

    setTotalClientsAmount: (amount) => {
        dispatch(setTotalClientsAmountAC(amount))
    },

    setCurrentClients: (currentClients) => {
        dispatch(setCurrentClientsAC(currentClients))
    },

    setCurrentPage: (currentPage) => {
        dispatch(setCurrentPageAC(currentPage))
    },

    setViewAllClients: ({currentClients, viewAllPressed}) => {
      dispatch(setViewAllClientsAC({currentClients, viewAllPressed}))
    },

    setOnlineUsers: (onlineUsers) => {
        dispatch(setOnlineUsersAC(onlineUsers))
    },

    toggleIsFetching: (isFetching) => {
        dispatch(toggleIsFetchingAC(isFetching))
    }
})

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer