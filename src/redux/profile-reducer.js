import { firestoreAPI, ProfileAPI } from "../api/api"

const ADD_POST = 'profile/ADD-POST'
const SET_LIKE = 'profile/SET_LIKE'
const SET_STATUS = 'profile/SET_STATUS'
const SET_AUTHORIZED_USER_DATA = 'profile/SET_AUTHORIZED_USER_DATA'
const SET_ANOTHER_USER_DATA = 'profile/SET_ANOTHER_USER_DATA'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let initialState = {
  status: '',
  anotherUserData: null,
  posts: [
    { id: 1, name:'Yaroslav', lastname: 'Labetsky', message: "Hey, how are you?", likeAmount: 10, myLike: false, color: '#000', date: `22 Nov 2022`},
    { id: 2, name:'Yaroslav', lastname: 'Labetsky', message: "Hey, how are you?", likeAmount: 23, myLike: true, color: 'rgb(253, 99, 163)', date: `27 Nov 2022`},
    { id: 3, name:'Yaroslav', lastname: 'Labetsky', message: "It's my first post here", likeAmount: 5, myLike: true, color: 'rgb(253, 99, 163)', date: `28 Nov 2022`},
  ],
 
  
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
          debugger
            let newPost = {
                date: `${new Date().getDate()} ${MONTHS[new Date().getMonth()]} ${new Date().getFullYear()}`,
                id: Date.now(),
                message: action.postText,
                likeAmount: "",
                name: action.name,
                lastname: action.lastname
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
      
        case SET_ANOTHER_USER_DATA: {
          return action.userData ? {...state, anotherUserData: {...action.userData}} : {...state, anotherUserData: action.userData}
        }
          default: return state
    }

    
}


export const addPost = (postText, name, lastname) => ({
  type: ADD_POST,
  postText,
  name,
  lastname
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

export const getAnotherUserData = (uid) => async (dispatch) => {
  let data = (await firestoreAPI.get(['users', uid])).data()
    dispatch(setAnotherUserData(data)) 
}

export default profileReducer