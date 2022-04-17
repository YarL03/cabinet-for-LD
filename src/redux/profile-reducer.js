const ADD_POST = 'ADD-POST'
const UPDATE_POST_STATE = 'UPDATE-POST-STATE'
const SET_LIKE = 'SET_LIKE'
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let initialState = {
  authorizedUser: {name:'Yaroslav', surname: 'Labetsky', status: 'online', currentCity: 'Minsk'},
  posts: [
    { id: 1, name:'Yaroslav', surname: 'Labetsky', message: "Hey, how are you?", likeAmount: 10, myLike: false, color: '#000', date: `22 Nov 2022`},
    { id: 2, name:'Yaroslav', surname: 'Labetsky', message: "Hey, how are you?", likeAmount: 23, myLike: true, color: 'rgb(253, 99, 163)', date: `27 Nov 2022`},
    { id: 3, name:'Yaroslav', surname: 'Labetsky', message: "It's my first post here", likeAmount: 5, myLike: true, color: 'rgb(253, 99, 163)', date: `28 Nov 2022`},
  ],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
          
            let newPost = {
                date: `${new Date().getDate()} ${MONTHS[new Date().getMonth()]} ${new Date().getFullYear()}`,
                id: Date.now(),
                message: state.newPostText,
                likeAmount: "",
                name: state.authorizedUser.name,
                surname: state.authorizedUser.surname
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
          default: return state
    }

    
}

export const setAddPost = () => ({
    type: 'ADD-POST'
  })
  
  export const setUpdatePostState = (text) => ({
    type: 'UPDATE-POST-STATE',
    text,
  })

export const setLike = ({isLiked, id}) => ({
  type: 'SET_LIKE',
  isLiked,
  id
})

export default profileReducer