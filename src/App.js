import React from 'react';
import { Header } from './components/header/index.js';
import { Main } from './components/main/index.js';

const App = (props) => {
  return (
    <>
      <Header store = {props.store} />
      <Main store = {props.store} />
    </>
  );
}

export { App }
