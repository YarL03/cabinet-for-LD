import { doc, getFirestore, writeBatch } from "firebase/firestore"
import { firestoreAPI, MessagesAPI } from "../api/api"

const SET_CHATS = 'messages/SET_CHATS'
const SET_MESSAGES = 'messages/SET_MESSAGES'
const SET_LISTENER = 'messages/SET_LISTENER'
const CALL_UNSUB = 'messages/CALL_UNSUB'
const SET_UNREAD_COUNT = 'messages/SET_UNREAD_COUNT'

let initialState = {
  unreadCount: [],
  chats: null,
  messages: null,
  listeners: []
}

const messagesReducer = (state = initialState, action) => {

    switch(action.type) {

        case SET_LISTENER: {
          return {...state, listeners: [...state.listeners, action.listener]}
        }

        case SET_MESSAGES: {
          return {...state, messages: action.messages} // в будущем делить на порции, сделать lazy load
        }

        case SET_CHATS: {
          return {...state, chats: action.chats}
        }

        case SET_UNREAD_COUNT: {
          return {...state, unreadCount: action.unreadCount}
        }

        case CALL_UNSUB: {
          state.listeners.forEach(unsub => unsub())
          return {...state, listeners: []}
        }

        default: return state
      }
      
    
}

export const setChats = (chats) => ({
  type: SET_CHATS,
  chats
})

export const setUnreadCount = (unreadCount) => ({
  type: SET_UNREAD_COUNT,
  unreadCount
})

export const getChats = (uidAuth) => async (dispatch) => {
  const data = await MessagesAPI.getChats(uidAuth)
  const chats = []

  const setNewChats = (chats) => {
    const unread = chats.reduce((prev, item) => {
      debugger
      console.log(item.isRead && item.from === item.with)
      if (!item.isRead && item.from === item.with) prev.push({from: item.from})
        return prev
      
    }, [])
    console.log('unread', unread)
    chats.sort((a,b) => b.createdAt-a.createdAt)
    dispatch(setUnreadCount(unread))
    dispatch(setChats(chats))
  }
  
  const unsub = await firestoreAPI.listenGroup(['chats', uidAuth, 'conversations'], ['with', '!=', uidAuth], setNewChats)

  data.forEach(chat => {
    debugger
    console.log(chat.data())
    chats.push(chat.data())
  })
  const unread = chats.reduce((prev, item) => { //через map  с указанием, от кого непрочитанное
    console.log(item.from === item.with)
    debugger
    if (!item.isRead && item.from === item.with) prev.push({from: item.from})
      
      return prev
    
     
  }, [])
  chats.sort((a,b) => b.createdAt-a.createdAt)
  debugger
  console.log('unread', unread)
  dispatch(setUnreadCount(unread))
  dispatch(setChats(chats))
  dispatch(setListener(unsub))
}

export const getMessages = (uidAuth, uidTarget) => async (dispatch) => {
  const data = await MessagesAPI.getMessages(uidAuth, uidTarget)
  const messages = []

  const setNewMessages = (messages) => {
    messages.sort((a,b) => a.createdAt-b.createdAt)
    debugger
    dispatch(setMessages(messages))
  }

  const unsubscribe = firestoreAPI.listenGroup(['chats', uidAuth, 'conversations', uidTarget, 'messages'], ['from', 'in', [uidAuth, uidTarget]], setNewMessages)

  data.forEach((message) => {
    debugger
    messages.push({...message.data(), path: message._key.path.segments.slice(message._key.path.offset)})
  })
  messages.sort((a,b) => a.createdAt-b.createdAt)
  debugger
  dispatch(setMessages(messages))
  dispatch(setListener(unsubscribe))
}

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  messages
})

export const setListener = (listener) => ({
  type: SET_LISTENER,
  listener
})

export const callUnsub = () => ({
  type: CALL_UNSUB
})

export const sendMessage = (userAuth, userTarget, message) => async (dispatch) => {
  try {
    const messageObj = {
      content: message.content,
      createdAt: new Date().getTime(),
      from: userAuth.uid,
      to: userTarget.uid,
      name: userAuth.name,
      lastname: userAuth.lastname,
      isRead: false
    }

    const changes = {
      createdAt: messageObj.createdAt,
      from: userAuth.uid,
      to: userTarget.uid,
      lastMessage: message.content,
      isRead: false
    }

    await MessagesAPI.sendMessages(userAuth.uid, userTarget, messageObj)
    const db = getFirestore()
    const batch = writeBatch(db)
    batch.update(doc(db, 'chats', userAuth.uid, 'conversations', userTarget.uid), changes)
    batch.update(doc(db, 'chats', userTarget.uid, 'conversations', userAuth.uid), changes)
    batch.commit()
  }
  catch (err) {
    console.log(err)
  }
}

  export const readMessages = (messages, uidTarget) => async (dispatch) => {
    await MessagesAPI.readMessages(messages, uidTarget)
  }

export default messagesReducer