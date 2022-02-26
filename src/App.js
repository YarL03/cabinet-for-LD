import React, { useState } from "react";
import Header from "./UI/Header/Header";
import Navbar from "./UI/Navbar/Navbar";
import Profile from "./UI/Profile/Profile";

import "./styles/App.css";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [value, setValue] = useState("Текст здесь");

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Navbar/>
      <div>
      <Profile/>
      {/* <Route path="/profile" component={Profile}/> */}
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
