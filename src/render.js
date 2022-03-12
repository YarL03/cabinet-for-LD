import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import state, { addPost } from "./redux/state";


export let rerenderApp = () => {
    ReactDOM.render(
      <App state={state} addPost={addPost}/>,
    document.getElementById('root')
  );
  }
