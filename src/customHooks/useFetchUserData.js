import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { ProfileAPI } from "../api/api"
import { getStatus, getUserData } from "../redux/profile-reducer"

export const useFetchUserData = (id, isMe) => {
    const [userData, setUserData] = useState(null)
    const dispatch = useDispatch()
    
    
        let response = ProfileAPI.getUserData(id)
        let status =  ProfileAPI.getStatus(id)
        debugger
        
        setUserData({...response, status, online: 'online', currentCity: 'Minsk'})

        dispatch(getUserData(id, isMe))
        dispatch(getStatus(id, isMe)) 
    

    return userData

}   