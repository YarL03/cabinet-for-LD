import { useSelector } from "react-redux";
import Main from "./Main";

const MainContainer = (props) => {
    const cards = useSelector(state => state.mainPage.cards)
    const currentClients = useSelector(state => state.mainPage.currentClients)
    const onlineUsers = useSelector(state => state.mainPage.onlineUsers)
    const currentPage = useSelector(state => state.mainPage.currentPage)
    const totalClientsAmount = useSelector(state => state.mainPage.totalClientsAmount)
    const pageSize = useSelector(state => state.mainPage.pageSize)
    const isFetching = useSelector(state => state.mainPage.isFetching)

    

    return <Main cards={cards} currentClients={currentClients} onlineUsers={onlineUsers}
    currentPage={currentPage} totalClientsAmount={totalClientsAmount} pageSize={pageSize}
    isFetching={isFetching}/>
}


export default MainContainer