import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addMessageActionCreator, updateMessageStateActionCreator } from "../../../redux/messsages-reducer";
import { Dialog } from "./Dialog";



// export const DialogContainer = ({store}) => {
//   let state = store.getState()
//   const {id} = useParams()
//   const data = state.messagesPage.dialogs.filter(item => item.id == id)[0]
//   console.log(data)

  

//   const addMessage = () => {
//     let action = addMessageActionCreator(data)
//     store.dispatch(action)
//   }

//   const onMessageChange = (text) => {
//     let action = updateMessageStateActionCreator(text)
//     store.dispatch(action)
//   }

//   return (
//     <Dialog addMessage={addMessage} updateMessageText={onMessageChange} data={data} newMessageText={state.messagesPage.newMessageText}/>
//   );
// };

const mapStateToProps = (state) => ({
  dialogs: state.messagesPage.dialogs,
  newMessageText: state.messagesPage.newMessageText,
})

const mapDispatchToProps = (dispatch) => ({
  addMessage: (id) => dispatch(addMessageActionCreator(id)),
  updateMessageText: (text) => dispatch(updateMessageStateActionCreator(text)),
})

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)