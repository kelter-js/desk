import React from 'react';
import { Header } from './components/header/index.js';
import { Main } from './components/main/index.js';

const App = (props) => {
  console.log(props)
  return (
    <>
      <Header navigation = {props.state.navigation}/>
      <Main />
    </>
  );
}

export { App }
