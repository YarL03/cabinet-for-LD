import BriefcaseSVG from "../UI/Main/svg/BriefcaseSVG";
import ChatBubblesSVG from "../UI/Main/svg/ChatBubblesSVG";
import EyeSVG from "../UI/Main/svg/EyeSVG";
import MagnifierSVG from "../UI/Main/svg/MagnifierSVG";
import mainReducer from "./main-reducer";
import messagesReducer from "./messsages-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    mainPage: {
      cards: [
        { numbers: "123", name: "Daily viewers", svg: <EyeSVG />, id: 3 },
        { numbers: "124", name: "Comments", svg: <ChatBubblesSVG />, id: 4 },
        {
          numbers: "125",
          name: "Resolved cases",
          svg: <BriefcaseSVG />,
          id: 5,
        },
        {
          numbers: "126",
          name: `Admin's answers`,
          svg: <MagnifierSVG />,
          id: 6,
        },
      ],
      clients: [
        {
          name: "Ivan Ivanov",
          kindOfLaw: "Civil Law",
          date: "27.02.2022",
          status: "Resolved",
          style: "#8de02c",
          id: 10,
        },
        {
          name: "Ivan Ivanov",
          kindOfLaw: "Civil Law",
          date: "20.02.2022",
          status: "Waiting",
          style: "#f9ca3f",
          id: 11,
        },
        {
          name: "Ivan Ivanov",
          kindOfLaw: "Land Law",
          date: "15.02.2022",
          status: "Resolved",
          style: "#8de02c",
          id: 12,
        },
        {
          name: "Ivan Ivanov",
          kindOfLaw: "Civil Law",
          date: "27.02.2022",
          status: "In progress",
          style: "#1795c1",
          id: 13,
        },
        {
          name: "Ivan Ivanov",
          kindOfLaw: "Civil Law",
          date: "09.02.2022",
          status: "Rejected",
          style: "#f00",
          id: 14,
        },
        {
          name: "Ivan Ivanov",
          kindOfLaw: "Land Law",
          date: "12.02.2022",
          status: "Resolved",
          style: "#8de02c",
          id: 15,
        },
        {
          name: "Ivan Ivanov",
          kindOfLaw: "Civil Law",
          date: "27.02.2022",
          status: "Resolved",
          style: "#8de02c",
          id: 16,
        },
      ],
      onlineUsers: [
        { id: 1, name: "Yaroslav", surname: "Labetsky" },
        { id: 1, name: "David", surname: "Italy" },
        { id: 1, name: "Ivan", surname: "Ivanov" },
        { id: 1, name: "David", surname: "Italy" },
        { id: 1, name: "David", surname: "Italy" },
        { id: 1, name: "Yaroslav", surname: "Labetsky" },
        { id: 1, name: "David", surname: "Italy" },
        { id: 1, name: "David", surname: "Italy" },
        { id: 1, name: "David", surname: "Italy" },
        { id: 1, name: "David", surname: "Italy" },
        { id: 1, name: "David", surname: "Italy" },
      ],
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hey, how are you?", likeAmount: 10 },
        { id: 1, message: "Hey, how are you?", likeAmount: 23 },
        { id: 1, message: "It's my first post here", likeAmount: 5 },
      ],
      newPostText: "",
    },
    messagesPage: {
      dialogs: [
        {id: 1, myMessages: ["121"], messages: ["Hey, how are you?"], name: "Ivan Ivanov", date: `${new Date().getHours()}:${new Date().getMinutes()}`},
        {id: 2, myMessages: ["122332111111111111111111111111111111111111111111111111111111111111111"], messages: ["Hey, buddy! Your project is pretty good"], name: "Yaroslav Labetsky", date: `${new Date().getHours()}:${new Date().getMinutes()}`},
        {id: 3, myMessages: ["123"], messages: ["Hey, how are you doing?", "I love you", "Hugs"], name: "Victoria Mongush", date: `14:53`},
        {id: 4, myMessages: ["124"], messages: ["Yeah, exactly"], name: "Vladimir Uvarov", date: `10:28`},
      ],
      newMessageText: "",
    }
  },

  _callSubscriber() {},

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._state.mainPage = mainReducer(this._state.mainPage, action)

    this._callSubscriber(this._state)
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },
};


export default store;