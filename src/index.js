import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.sass';
import {App} from './app.js';
import { ErrorFallback } from './error.js';
import { ErrorBoundary } from 'react-error-boundary';

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);
