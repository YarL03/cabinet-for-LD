import { AuthAPI, firestoreAPI, ProfileAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA' 
const TOGGLE_IS_FETCHING_AUTH = 'auth/TOGGLE_IS_FETCHING_AUTH'
const SET_IS_AUTH = 'auth/SET_IS_AUTH'
const SET_ERROR_MESSAGE = 'auth/SET_ERROR_MESSAGE'
const SET_STATUS = 'profile/SET_STATUS'  

let initialState = {
    authUserData: null,
    isAuth: null,
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

    case SET_STATUS: {
      return {...state, authUserData: {...state.authUserData, status: action.status}} 
        }

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
  try {
  const {auth, onAuthStateChanged} = await AuthAPI.getIsAuth()
   debugger
   onAuthStateChanged(auth, async (user) => {
     if (user) {
      const data = (await firestoreAPI.get(['users', user.uid])).data()
      console.log(data)
      dispatch(setAuthUserData({...data, uid: user.uid}))
      dispatch(setIsAuth(true))
     } else dispatch(setIsAuth(false))
   })
   debugger
  }
 catch (err) {
  console.log(err)
 }     
      
}

export const login = (formState) => async (dispatch) => {
  debugger
    try {
      debugger
      const userCredentials = await AuthAPI.login(formState)
      const uid = userCredentials.user.uid
      await firestoreAPI.update(['users', uid], {online: true})
      const data = (await ProfileAPI.getUserData(['users', uid])).data()
      console.log(data)
      debugger
      dispatch(setAuthUserData({...data, uid}))
      console.log(userCredentials)
      // dispatch(setErrorMessage(null, null))
      dispatch(setIsAuth(true))
    }
    catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(error)
      dispatch(setErrorMessage(errorMessage, errorCode))
      dispatch(toggleIsFetchingAuth(false))}
}

export const logout = (uid) => async (dispatch) => {
  try {
    console.log(uid)
    await AuthAPI.logout(uid)
    dispatch(setIsAuth(false))
    dispatch(setAuthUserData(null))
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
    status: '',
    uid}))
 }

 catch (error) {
  console.log(error.message)
 }
 
}

export const setStatus = (status) => ({
  type: SET_STATUS,
  status
})

export const updateStatus = (uid, status) => async (dispatch) => {
  let response = await ProfileAPI.updateStatus(uid, status)
  dispatch(setStatus(status))
}

export default authReducer