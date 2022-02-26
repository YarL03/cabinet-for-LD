import React, { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import "./styles/App.css";

function App() {
  const [value, setValue] = useState("Текст здесь");

  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
