const UPDATE_MESSAGE_STATE = 'UPDATE-MESSAGE-STATE'
const ADD_MESSAGE = 'ADD-MESSAGE'

const messagesReducer = (state, action) => {

    switch(action.type) {
        case UPDATE_MESSAGE_STATE: 
        state.newMessageText = action.text
        return state
        case ADD_MESSAGE: 
        action.data.messages.push(state.newMessageText)
        state.newMessageText = ''
        return state
        default: return state
      }
      
    
}

export const addMessageActionCreator = (data) => ({
  type: 'ADD-MESSAGE',
  data: data
})

export const updateMessageStateActionCreator = (text) => ({
  type: 'UPDATE-MESSAGE-STATE',
  text: text
})

export default messagesReducer