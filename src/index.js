import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import App from './App';

import plantsReducer from'./reducers/plantsReducer';

import reportWebVitals from './reportWebVitals';

const store = createStore( plantsReducer, applyMiddleware( thunk ) )

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store} >
    <App />
  </Provider>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
