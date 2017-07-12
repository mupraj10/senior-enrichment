'use strict'

import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main'


ReactDOM.render(
  <Main value={store.getState()} />,
  document.getElementById('main')
);