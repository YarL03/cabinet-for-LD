import React, { useState } from "react";
import Header from "./UI/Header/Header";
import Navbar from "./UI/Navbar/Navbar";
import Profile from "./UI/Profile/Profile";

import "./styles/App.css";
import {Route, Routes} from "react-router-dom";
import Main from "./UI/Main/Main";

function App(props) {
  
  return (
    
      <div className="App">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Main mainPage={props.state.mainPage}/>} />
            <Route path="/profile" element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
