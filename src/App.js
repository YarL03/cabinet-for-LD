import React, { Suspense } from "react";

import "./styles/App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import { Messages } from "./UI/Messages/Messages";
import { DialogContainer } from "./UI/Messages/Dialog/DialogContainer";
import MainContainer from "./UI/Main/MainContainer";
import ProfileContainer from "./UI/Profile/ProfileContainer";
import { Dialogs } from "./UI/Messages/Dialogs/Dialogs";
import Login from "./UI/Login/Login";
import RequireAuth from "./UI/hoc/RequireAuth";
import { Initialization } from "./UI/hoc/Initialization";
import { Layout } from "./UI/Layout/Layout";
import Register from "./UI/Register/Register";
import './firebase'
import SomeoneElsesProfileContainer from "./UI/Profile/SomeoneElsesProfileContainer";



const SomeoneElsesProfile = React.lazy(() => import("./UI/Profile/SomeoneElsesProfile")) 

function App(props) {
  
  return (
    <div className="App">
      <Initialization>
      <Routes>
        <Route path="/" element={<RequireAuth/>}>
          <Route path="/" element={<Layout />}>

            <Route index element={<MainContainer/>} />

            <Route path="profile" element={<Outlet/>}>
              <Route index element={<ProfileContainer/>}/>
              
              <Route path=":id" element={
                <Suspense fallback='Loading...'>
              <SomeoneElsesProfileContainer/>
              </Suspense>}/> 
              
            </Route>

            <Route path="messages" element={<Messages/>}>
              <Route index element={<Dialogs store={props.store}/>}/>
              <Route path=":id" element={<DialogContainer/>}/>
            </Route>

          </Route>
        </Route>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
      </Routes>
      </Initialization>
    </div>
  );
}

export default App;
