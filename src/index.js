import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import { App } from './app.js';
import { ErrorCatcher } from './error.js';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store.js';

ReactDOM.render(
  <ErrorCatcher>
    <BrowserRouter>
      <App state = { store.state }/>
    </BrowserRouter>
  </ErrorCatcher>,
  document.getElementById('root')
);
