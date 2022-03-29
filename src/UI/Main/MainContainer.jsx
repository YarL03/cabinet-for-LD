import { connect } from "react-redux";
import { setCardsAC, setClientsAC, setOnlineUsersAC } from "../../redux/main-reducer";
import Main from "./Main";

const mapStateToProps = (state) => ({
    cards: state.mainPage.cards,
    clients: state.mainPage.clients,
    onlineUsers: state.mainPage.onlineUsers
})

const mapDispatchToProps = (dispatch) => ({
    setCards: (cards) => {
        dispatch(setCardsAC(cards))
    },

    setClients: (clients) => {
        dispatch(setClientsAC(clients))
    },

    setOnlineUsers: (onlineUsers) => {
        dispatch(setOnlineUsersAC(onlineUsers))
    }
})

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default MainContainer