import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getIsAuth} from "../../redux/auth-reducer"


export const Initialization = ({children}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getIsAuth())
    })

    return children
}