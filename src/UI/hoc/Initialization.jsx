import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getIsAuth, toggleIsFetchingAuth } from "../../redux/auth-reducer"
import Preloader from "../components/common/Preloader/Preloader"
import s from "../Login/Login.module.css"

export const Initialization = ({children}) => {
    const auth = useSelector(state => state.auth.isAuth)
    const isFetching = useSelector(state => state.auth.isFetchingAuth)
    const dispatch = useDispatch()

    
    
    useEffect(() => {
        dispatch(toggleIsFetchingAuth(true))
        dispatch(getIsAuth())
        .then(() => {
            dispatch(toggleIsFetchingAuth(false)) // потом сделать здесь
            //полную инициализацию
            //с Preloader до тех пор,
            //пока ВСЕ нужные данные не загрузятся
        })
        debugger
    }, [auth])

    return isFetching ? <Preloader s={s}/> : children
}