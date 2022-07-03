import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import userReducer from './components/utils/stores/user'
import logReducer from './components/utils/stores/log'

const store = configureStore({
  reducer: {
    user : userReducer,
    log : logReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store = {store}>
        <App />
    </Provider>
  </BrowserRouter>
  
);

