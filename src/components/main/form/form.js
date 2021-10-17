import React from 'react';
import { FirstStage } from './first-stage.js';
import { SecondStage } from './second-stage.js';


const Form = (props) => {
  return (
    <form action='https://echo.somewhereelse.com/' method='post'>
      <FirstStage
        stage={props.promo.firstStage}
        stageNumbers={props.promo.stageNumber}
        handlers={props.promo.formHandlers}
        update={props.update}
      />
      <SecondStage
        stage={props.promo.secondStage}
        stageNumbers={props.promo.stageNumber}
        handlers={props.promo.formHandlers}
        update={props.update}
      />
    </form>
  );
}

export { Form }
