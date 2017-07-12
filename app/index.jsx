'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import Main from './components/Main'
import store from './store';

//store.dispatch
//store.dispatch

ReactDOM.render(
  <Provider store={store}>
  <Main/>
  </Provider>,
  document.getElementById('main')
);