import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

export const useAuthorizedUserData = (id) => {
    const [data, setData] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        //доделать
    },[])
}