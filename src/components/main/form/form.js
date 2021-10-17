import React from 'react';
import { FirstStage } from './first-stage.js';
import { SecondStage } from './second-stage.js';


const Form = (props) => {
  return (
    <form action='https://echo.somewhereelse.com/' method='post'>
      <FirstStage
        stage={props.promo.firstStage}
        handlers={props.promo.formHandlers}
      />
      <SecondStage
        stage={props.promo.secondStage}
        handlers={props.promo.formHandlers}
      />
    </form>
  );
}

export { Form }
