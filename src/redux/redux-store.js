import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth-reducer";
import mainReducer from "./main-reducer";
import messagesReducer from "./messsages-reducer";
import profileReducer from "./profile-reducer";


let reducers = combineReducers({
    mainPage: mainReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    auth: authReducer, 
})

let store = createStore(reducers, applyMiddleware(thunk))
window.store = store

export default store