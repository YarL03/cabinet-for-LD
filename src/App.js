import React, { useState } from "react";
import Header from "./UI/Header/Header";
import Navbar from "./UI/Navbar/Navbar";
import Profile from "./UI/Profile/Profile";

import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./UI/Main/Main";

function App() {
  

  return (
    
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="content-wrapper">
        <Main/>
      {/* <Profile/> */}
      {/* <Route path="/profile" component={Profile}/> */}
      </div>
      
    </div>
    
  );
}

export default App;
