import store from './redux/state';
import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

let rerenderApp = (state) => {
    ReactDOM.render(
      <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
      </BrowserRouter>,
    document.getElementById('root')
  );
  }

rerenderApp(store.getState())
store.subscribe(rerenderApp)