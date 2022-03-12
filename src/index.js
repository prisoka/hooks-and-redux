import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import appReducers from './redux/reducers/appReducers';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(appReducers);

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
