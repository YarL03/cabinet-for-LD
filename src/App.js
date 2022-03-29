import React from "react";
import Profile from "./UI/Profile/Profile";

import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./UI/Main/Main";
import { Messages } from "./UI/Messages/Messages";
import { Layout } from "./UI/Layout/Layout";
import { DialogContainer } from "./UI/Messages/Dialog/DialogContainer";
import MainContainer from "./UI/Main/MainContainer";

function App(props) {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainContainer/>} />
          <Route
            path="profile"
            element={
              <Profile/>
            }
          />
          <Route
            path="messages"
            element={
              <Messages
                store={props.store}
              />
            }
          />
          <Route path="messages/:id" element={<DialogContainer/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
