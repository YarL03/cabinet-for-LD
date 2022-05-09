import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getIsAuth, toggleIsFetchingAuth } from "../../redux/auth-reducer"
import { getUserData } from "../../redux/profile-reducer"
import Preloader from "../components/common/Preloader/Preloader"
import s from "../Login/Login.module.css"

export const Initialization = ({children}) => {
    const myId = useSelector(state => state.auth.authMeData.id)
    const isFetching = useSelector(state => state.auth.isFetchingAuth)
    const dispatch = useDispatch()
    
    useEffect(() => {
        
       if(myId) dispatch(getUserData(myId, true)) 
       else {
            dispatch(toggleIsFetchingAuth(true))
            dispatch(getIsAuth()).then(() => dispatch(toggleIsFetchingAuth(false)))
       }
        

    }, [myId])

    return isFetching ? <Preloader s={s}/> : children
}