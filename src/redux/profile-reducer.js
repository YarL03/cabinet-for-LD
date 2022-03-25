const ADD_POST = 'ADD-POST'
const UPDATE_POST_STATE = 'UPDATE-POST-STATE'

const profileReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: Date.now(),
                message: state.newPostText,
                likeAmount: "",
              };
          
              state.posts.push(newPost);
              state.newPostText = "";
          return state
        case UPDATE_POST_STATE:
            state.newPostText = action.text;
          return state
          default: return state
    }

    
}

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
  })
  
  export const updatePostStateActionCreator = (text) => ({
    type: 'UPDATE-POST-STATE',
    text: text
  })

export default profileReducer