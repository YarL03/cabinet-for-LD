import { AuthAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA' 
const TOGGLE_IS_FETCHING_AUTH = 'TOGGLE_IS_FETCHING_AUTH'
const SET_IS_AUTH = 'SET_IS_AUTH'
const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'  

let initialState = {
    authMeData: {
      id: null,
      login: null,
      email: null},
    isAuth: false,
    isFetchingAuth: false,
    errorMessage: null
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: 
    debugger
      return {...state, authMeData: {...action.authMeData}}
      
    case TOGGLE_IS_FETCHING_AUTH:
      return {...state, isFetchingAuth: action.isFetching} 

    case SET_IS_AUTH:
      return {...state, isAuth: action.isAuth} 

    case SET_ERROR_MESSAGE: 
      return {...state, errorMessage: action.errorMessage}

    default: return state
  }
}

export const setAuthMeData = (authMeData) => ({ 
  type: SET_USER_DATA,
  authMeData
})

export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage
})

export const toggleIsFetchingAuth = (isFetching) => ({
  type: TOGGLE_IS_FETCHING_AUTH,
  isFetching
})

export const setIsAuth = (isAuth) => ({
  type: SET_IS_AUTH,
  isAuth
})

export const getIsAuth = () => (dispatch) => {
  AuthAPI.getIsAuth().then(data => {
    if (!data.resultCode) {

      dispatch(setIsAuth(!data.resultCode))
      dispatch(setAuthMeData(data.data))
    }
  })
}

export const login = (formState) => (dispatch) => {
  AuthAPI.login(formState).then(response => {
    debugger
    if (!response.data.resultCode) {
      dispatch(setErrorMessage(null))
      dispatch(getIsAuth())
      return
    }
    dispatch(setErrorMessage(response.data.messages))
  })
}

export const logout = () => (dispatch) => {
  AuthAPI.logout().then(data => {
    if (!data.resultCode) {
      dispatch(setIsAuth(false))
    }
  })
}

export default authReducer