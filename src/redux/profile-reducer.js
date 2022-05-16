import { ProfileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_LIKE = 'SET_LIKE'
const SET_STATUS = 'SET_STATUS'
const SET_AUTHORIZED_USER_DATA = 'SET_AUTHORIZED_USER_DATA'
const SET_ANOTHER_USER_DATA = 'SET_ANOTHER_USER_DATA'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let initialState = {
  authorizedUserData: {name:'Yaroslav', surname: 'Labetsky', online: 'online', currentCity: 'Minsk', status: '',},
  anotherUserData: {online: 'online', currentCity: 'Minsk', status: '',},
  posts: [
    { id: 1, name:'Yaroslav', surname: 'Labetsky', message: "Hey, how are you?", likeAmount: 10, myLike: false, color: '#000', date: `22 Nov 2022`},
    { id: 2, name:'Yaroslav', surname: 'Labetsky', message: "Hey, how are you?", likeAmount: 23, myLike: true, color: 'rgb(253, 99, 163)', date: `27 Nov 2022`},
    { id: 3, name:'Yaroslav', surname: 'Labetsky', message: "It's my first post here", likeAmount: 5, myLike: true, color: 'rgb(253, 99, 163)', date: `28 Nov 2022`},
  ],
 
  
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
          
            let newPost = {
                date: `${new Date().getDate()} ${MONTHS[new Date().getMonth()]} ${new Date().getFullYear()}`,
                id: Date.now(),
                message: action.postText,
                likeAmount: "",
                name: state.authorizedUserData.name,
                surname: state.authorizedUserData.surname
              };

          return {...state,
            posts: [...state.posts, newPost],
            newPostText: ''
          }
            }

        case SET_LIKE: {
          return (action.isLiked) ? {...state, posts: state.posts.map(item => {
            if (item.id === action.id) {
              return {...item, myLike: !action.isLiked, color: '#000', likeAmount: (item.likeAmount-1 === 0) ? '' : item.likeAmount-1}
            }
            return {...item}
          })}
          : {...state, posts: state.posts.map(item => {
            if (item.id === action.id) {
              return {...item, myLike: !action.isLiked, color: 'rgb(253, 99, 163)', likeAmount: item.likeAmount+1}
            }
            return {...item}
          })}
        }

        case SET_STATUS: {
          return action.isMe ? {...state, authorizedUserData: {...state.authorizedUserData, status: action.status}} :
            {...state, anotherUserData: {...state.anotherUserData, status: action.status}}
        }

        case SET_AUTHORIZED_USER_DATA: {
          return {...state, authorizedUserData: {...state.authorizedUserData, ...action.authorizedData}}
        }
        
        case SET_ANOTHER_USER_DATA: {
          return {...state, anotherUserData: {...state.anotherUserData, ...action.userData}}
        }
          default: return state
    }

    
}


export const addPost = (postText) => ({
  type: ADD_POST,
  postText
})

export const setLike = ({isLiked, id}) => ({
  type: 'SET_LIKE',
  isLiked,
  id
})

export const setStatus = (status, isMe) => ({
  type: 'SET_STATUS',
  status,
  isMe
})

export const setAuthorizedUserData = (authorizedData) => ({
  type: SET_AUTHORIZED_USER_DATA,
  authorizedData
})

export const setAnotherUserData = (userData) => ({
  type: SET_ANOTHER_USER_DATA,
  userData
})

export const getStatus = (id, isMe) => async (dispatch) => {
 let response = await ProfileAPI.getStatus(id)
    if(response) dispatch(setStatus((response.data || ''), isMe))
    
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await ProfileAPI.updateStatus(status)
}

export const getUserData = (id, isMe) => async (dispatch) => {
  let response = await ProfileAPI.getUserData(id)
    
        dispatch(getStatus(id, isMe))

        isMe ? dispatch(setAuthorizedUserData(response)) :
        dispatch(setAnotherUserData(response)) 
      //доделать
}

export default profileReducer