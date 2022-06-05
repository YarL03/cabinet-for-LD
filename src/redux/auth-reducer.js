import { AuthAPI, firestoreAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA' 
const TOGGLE_IS_FETCHING_AUTH = 'auth/TOGGLE_IS_FETCHING_AUTH'
const SET_IS_AUTH = 'auth/SET_IS_AUTH'
const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE'  

let initialState = {
    authUserData: null,
    isAuth: false,
    isFetchingAuth: false,
    errorMessage: null,
    errorCode: null
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: 
      return {...state, authUserData: {...action.authUserData}}
      
    case TOGGLE_IS_FETCHING_AUTH:
      return {...state, isFetchingAuth: action.isFetching} 

    case SET_IS_AUTH:
      return {...state, isAuth: action.isAuth} 

    case SET_ERROR_MESSAGE: 
      return {...state, errorMessage: action.errorMessage}

    default: return state
  }
}

export const setAuthUserData = (authUserData) => ({ 
  type: SET_USER_DATA,
  authUserData
})

export const setErrorMessage = (errorMessage, errorCode) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage,
  errorCode
})

export const toggleIsFetchingAuth = (isFetching) => ({
  type: TOGGLE_IS_FETCHING_AUTH,
  isFetching
})

export const setIsAuth = (isAuth) => ({
  type: SET_IS_AUTH,
  isAuth
})

export const getIsAuth = () => async (dispatch) => {
  debugger
  const {auth, onAuthStateChanged} = await AuthAPI.getIsAuth()
   debugger
   onAuthStateChanged(auth, async (user) => {
     if (user) {
      const data = (await firestoreAPI.get(['users', user.uid])).data()
      console.log(data)
      dispatch(setAuthUserData({...data, uid: user.uid}))
      dispatch(setIsAuth(true))
     }
   })
    
      debugger
      
}

export const login = (formState) => async (dispatch) => {
  
    try {
      const userCredentials = await AuthAPI.login(formState)
      const uid = userCredentials.user.uid
      await firestoreAPI.update(['users', uid], {online: true})
      const data = (await firestoreAPI.get(['users', uid])).data()
      console.log(data)
      dispatch(setAuthUserData({...data, uid}))
      console.log(userCredentials)
      dispatch(setErrorMessage(null))
      dispatch(setIsAuth(true))
    }
    catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      dispatch(setErrorMessage(errorMessage, errorCode))
      dispatch(toggleIsFetchingAuth(false))}
}

export const logout = (uid) => async (dispatch) => {
  try {
    console.log(uid)
    
    await AuthAPI.logout()
    dispatch(setIsAuth(false))
    dispatch(setAuthUserData(null))
    await firestoreAPI.update(['users', uid], {online: false})
    
  }

  catch (error) {
    console.log(error.message)
  }
}

export const register = (data) => async (dispatch) => {
 try {
  const {userCredentials, docRef} = await AuthAPI.register(data)
  const uid = userCredentials.user.uid
  console.log(userCredentials, docRef)
  dispatch(setAuthUserData({
    email: data.email,
    lastname: data.lastname,
    name: data.name,
    online: true,
    phoneNumber: data.phoneNumber,
    uid}))
 }

 catch (error) {
  console.log(error.message)
 }
 
}

export default authReducer