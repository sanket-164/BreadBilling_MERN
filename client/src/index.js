import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import reducers from "./reducers/index.js"
import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));