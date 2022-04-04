import { combineReducers, createStore } from "redux";
import mainReducer from "./main-reducer";
import messagesReducer from "./messsages-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
    mainPage: mainReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer, 
})

let store = createStore(reducers)
window.store = store

export default store