import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getIsAuth } from "../../redux/auth-reducer"
import { getUserData } from "../../redux/profile-reducer"


export const Initialization = ({children}) => {
    const myId = useSelector(state => state.auth.authMeData.id)
    const dispatch = useDispatch()

    useEffect(() => {
        myId ? dispatch(getUserData(myId, true)) : // доделать
        dispatch(getIsAuth())

    }, [myId])

    return children
}