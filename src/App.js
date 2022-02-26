import React, { useState } from "react";
import Header from "./UI/Header/Header";
import Navbar from "./UI/Navbar/Navbar";
import Profile from "./UI/Profile/Profile";

import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./UI/Main/Main";

function App() {
  const [cards, setCard] = useState([
    {numbers: 123, name: 'viewers'},
    {numbers: 124, name: 'hoock'},
    {numbers: 125, name: 'map'}
  ]);

  return (
    
    <div className="App">
      <Header/>
      <Navbar/>
      <div>
        {/* <Main/> */}
      {/* <Profile/> */}
      {/* <Route path="/profile" component={Profile}/> */}
      </div>
      
    </div>
    
  );
}

export default App;
