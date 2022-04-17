import React from "react";

import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import { Messages } from "./UI/Messages/Messages";
import { DialogContainer } from "./UI/Messages/Dialog/DialogContainer";
import MainContainer from "./UI/Main/MainContainer";
import ProfileContainer from "./UI/Profile/ProfileContainer";
import { Dialogs } from "./UI/Messages/Dialogs/Dialogs";
import Login from "./UI/Login/Login";
import RequireAuth from "./UI/hoc/RequireAuth";
import { Initialization } from "./UI/hoc/Initialization";
import { Layout } from "./UI/Layout/Layout";

function App(props) {
  
  return (
    <div className="App">
      <Initialization>
      <Routes>
        <Route path="/" element={<RequireAuth/>}>
          <Route path="/" element={<Layout />}>

            <Route index element={<MainContainer/>} />
            <Route path="profile" element={<ProfileContainer/>}>
              <Route path=":id" element={<ProfileContainer/>}/> 
            </Route>
            <Route path="messages" element={<Messages/>}>
              <Route index element={<Dialogs store={props.store}/>}/>
              <Route path=":id" element={<DialogContainer/>}/>
            </Route>
            

          </Route>
        </Route>

        <Route path="/login" element={<Login/>}/>
        
      </Routes>
      </Initialization>
    </div>
  );
}

export default App;
