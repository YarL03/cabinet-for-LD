import { useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { getIsAuth, toggleIsFetchingAuth } from "../../redux/auth-reducer"
import Preloader from "../components/common/Preloader/Preloader";
import s from '../components/common/Preloader/PreloaderBig.module.css'


export const Initialization = ({children}) => {
    const location = useLocation()
    const auth = useSelector(state => state.auth.isAuth)
    const isFetching = useSelector(state => state.auth.isFetching)
    
    const dispatch = useDispatch()

    
    
    useEffect(() => {
        dispatch(getIsAuth())
         // потом сделать здесь
            //полную инициализацию
            //с Preloader до тех пор,
            //пока ВСЕ нужные данные не загрузятся
        console.log(auth)
        debugger
    }, [auth])


    return auth === null ? <Preloader s={s}/> : children
}