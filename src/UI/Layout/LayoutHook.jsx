// import React, { useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Layout } from "./Layout";
// import { setAuthUserData, setIsAuth} from "../../redux/auth-reducer";
// import { getIsAuth } from "../../api/api";

// import s from './LayoutHook.module.css'
// import { Navigate } from "react-router-dom";

// export const LayoutHook = (props) => {
//   const dispatch = useDispatch()
//   const isAuth = useSelector(state => state.auth.isAuth)
  

//   useEffect(() => {
    
//     getIsAuth().then(data => {
//       console.log(data.resultCode)
//       if (!data.resultCode) {
//         dispatch(setIsAuth(!data.resultCode))
//         dispatch(setAuthUserData(data.data))
//       }
//     })
//   }, [])

//   // if(!isAuth) return <Navigate to='/login'/>

//   return <Layout/> 

// };

