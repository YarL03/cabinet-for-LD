const UPDATE_MESSAGE_STATE = 'UPDATE-MESSAGE-STATE'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
  dialogs: [
    {id: 1, myMessages: ["121"], messages: ["Hey, how are you?"], name: "Ivan Ivanov", date: `${new Date().getHours()}:${new Date().getMinutes()}`},
    {id: 2, myMessages: ["122332111111111111111111111111111111111111111111111111111111111111111"], messages: ["Hey, buddy! Your project is pretty good"], name: "Yaroslav Labetsky", date: `${new Date().getHours()}:${new Date().getMinutes()}`},
    {id: 3, myMessages: ["123"], messages: ["Hey, how are you doing?", "I love you", "Hugs"], name: "Victoria Mongush", date: `14:53`},
    {id: 4, myMessages: ["124"], messages: ["Yeah, exactly"], name: "Vladimir Uvarov", date: `10:28`},
  ],
  newMessageText: "",
}

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_MESSAGE_STATE: {
        return {...state,
          newMessageText: action.text,
        }
        }
        case ADD_MESSAGE: {
          let stateCopy = {...state,
            dialogs: state.dialogs.map(item => {
              if (item.id === action.id) {
                return {...item, messages: [...item.messages, state.newMessageText]}
              }
              return {...item}
            }),
          }
          
          stateCopy.newMessageText = ''
          
        return stateCopy
      }
        default: return state
      }
      
    
}

export const addMessageActionCreator = (id) => ({
  type: 'ADD-MESSAGE',
  id,
})

export const updateMessageStateActionCreator = (text) => ({
  type: 'UPDATE-MESSAGE-STATE',
  text,
})

export default messagesReducer