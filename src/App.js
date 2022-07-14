import React, { Suspense, useEffect } from "react";

import "./styles/App.css";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Messages } from "./UI/Messages/Messages";
import { DialogContainer } from "./UI/Messages/Dialog/DialogContainer";
import MainContainer from "./UI/Main/MainContainer";
import ProfileContainer from "./UI/Profile/ProfileContainer";
import Login from "./UI/Login/Login";
import RequireAuth from "./UI/hoc/RequireAuth";
import { Initialization } from "./UI/hoc/Initialization"
import { Layout } from "./UI/Layout/Layout";
import Register from "./UI/Register/Register";
import './firebase'
// import SomeoneElsesProfileContainer from "./UI/Profile/SomeoneElsesProfileContainer";
import { DialogsContainer } from "./UI/Messages/Dialogs/DialogsContainer";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "./redux/messsages-reducer";
import Preloader from "./UI/components/common/Preloader/Preloader";
import s from './UI/components/common/Preloader/PreloaderBig.module.css'

const SomeoneElsesProfileContainer = React.lazy(() => import("./UI/Profile/SomeoneElsesProfileContainer"));

function App(props) {
  const anotherUser = useSelector(state => state.profilePage.anotherUserData)
  const dispatch = useDispatch()
// alert('app')
  let location = useLocation()

  useEffect(() => {
    console.log('app', location.pathname)
    if (anotherUser && location.pathname !== `/messages/${anotherUser.uid}`) dispatch(setMessages(null))
  }, [location])
  
  return (
    <div className="App">
      <Initialization>
      <Routes>
        <Route path="/" element={<RequireAuth/>}>
          <Route path="/" element={<Layout/>}>

            <Route index element={<MainContainer/>} />

            <Route path="profile" element={<Outlet/>}>
              <Route index element={<ProfileContainer/>}/>
              
              <Route path=":id" element={
              <Suspense fallback={<Preloader s={s}/>}>
                <SomeoneElsesProfileContainer/>
              </Suspense>}/>
              
            </Route>

            <Route path="messages" element={<Messages/>}>
              <Route index element={<DialogsContainer/>}/>
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
