const ADD_POST = 'ADD-POST'
const UPDATE_POST_STATE = 'UPDATE-POST-STATE'

let initialState = {
  posts: [
    { id: 1, message: "Hey, how are you?", likeAmount: 10 },
    { id: 1, message: "Hey, how are you?", likeAmount: 23 },
    { id: 1, message: "It's my first post here", likeAmount: 5 },
  ],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: Date.now(),
                message: state.newPostText,
                likeAmount: "",
              };

          return {...state,
            posts: [...state.posts, newPost],
            newPostText: ''
          }
            }
        case UPDATE_POST_STATE: {
          return {...state,
            newPostText: action.text
          }
        }
          default: return state
    }

    
}

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
  })
  
  export const updatePostStateActionCreator = (text) => ({
    type: 'UPDATE-POST-STATE',
    text,
  })

export default profileReducer