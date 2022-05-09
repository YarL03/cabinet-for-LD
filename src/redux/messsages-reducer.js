const ADD_MESSAGE = 'messages/ADD-MESSAGE'

let initialState = {
  dialogs: [
    {id: 1, myMessages: ["121"], messages: ["Hey, how are you?"], name: "Ivan Ivanov", date: `${new Date().getHours()}:${new Date().getMinutes()}`},
    {id: 2, myMessages: ["122332111111111111111111111111111111111111111111111111111111111111111"], messages: ["Hey, buddy! Your project is pretty good"], name: "Yaroslav Labetsky", date: `${new Date().getHours()}:${new Date().getMinutes()}`},
    {id: 3, myMessages: ["123"], messages: ["Hey, how are you doing?", "I love you", "Hugs"], name: "Victoria Mongush", date: `14:53`},
    {id: 4, myMessages: ["124"], messages: ["Yeah, exactly"], name: "Vladimir Uvarov", date: `10:28`},
  ],
}

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE: {
          let stateCopy = {...state,
            dialogs: state.dialogs.map(item => {
              if (item.id === action.id) {
                return {...item, messages: [...item.messages, action.messageText]}
              }
              return {...item}
            }),
          }
        return stateCopy
      }
        default: return state
      }
      
    
}

export const addMessage = (id, messageText) => ({
  type: ADD_MESSAGE,
  id,
  messageText
})

export default messagesReducer