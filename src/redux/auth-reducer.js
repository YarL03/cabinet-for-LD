import { AuthAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA' 
const TOGGLE_IS_FETCHING_AUTH = 'TOGGLE_IS_FETCHING_AUTH'
const SET_IS_AUTH = 'SET_IS_AUTH'  

let initialState = {
      id: null,
      login: null,
      email: null,
      isAuth: false,
      isFetchingAuth: true,
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_DATA: 
    debugger
      return {...state, ...action.userData}
      
    case TOGGLE_IS_FETCHING_AUTH:
      return {...state, isFetchingAuth: action.isFetching} 

    case SET_IS_AUTH:
      
      return {...state, isAuth: action.isAuth} 

    default: return state
  }
}

export const setAuthUserData = (userData) => ({
  type: SET_USER_DATA,
  userData
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
  debugger
  AuthAPI.getIsAuth().then(data => {
    if (!data.resultCode) {
      dispatch(setIsAuth(!data.resultCode))
      dispatch(setAuthUserData(data.data))
    }
  })
}

export default authReducer