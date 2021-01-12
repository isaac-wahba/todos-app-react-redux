import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//5. import store provider and configure store
import {Provider } from 'react-redux';
import { configureStore } from './store';

ReactDOM.render(

  //6. wrap the app among provider, and give the provider the store
  <Provider store={configureStore()}>

    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
