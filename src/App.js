import React, { useState } from "react";
import Header from "./UI/Header/Header";
import Navbar from "./UI/Navbar/Navbar";
import Profile from "./UI/Profile/Profile";

import "./styles/App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./UI/Main/Main";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Main state={props.state.mainPage}/>} />
            <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
