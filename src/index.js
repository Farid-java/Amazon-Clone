import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer, { initialstate } from './reducer';
import StateProvider from "./StateProvider"

ReactDOM.render(
  <React.StrictMode> 
    {/* from StateProvider.js file  and  reudcer.js*/}

    <StateProvider initialState={initialstate} reducer={reducer}>
      
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
