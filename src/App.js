import React from "react";
import Profile from "./UI/Profile/Profile";

import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./UI/Main/Main";
import { Messages } from "./UI/Messages/Messages";
import { Layout } from "./UI/Layout/Layout";
import { Dialog } from "./UI/Messages/Dialog/Dialog";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main mainPage={props.state.mainPage} />} />
          <Route
            path="profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="messages"
            element={
              <Messages
                messagesPage={props.state.messagesPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="messages/:id" element={<Dialog dialogsData={props.state.messagesPage.dialogs} newMessageText={props.state.messagesPage.newMessageText} dispatch={props.dispatch}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
