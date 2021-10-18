import React from 'react';
import { FirstStage } from './first-stage.js';
import { SecondStage } from './second-stage.js';
import { ThirdStage } from './third-stage.js';


const Form = (props) => {
  return (
    <form className='promo-creation__form' action='https://echo.somewhereelse.com/' method='post'>
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
      <ThirdStage
        stage={props.promo.thirdStage}
        stageNumbers={props.promo.stageNumber}
        handlers={props.promo.formHandlers}
        update={props.update}
        fieldsState={props.fieldsState}
      />
    </form>
  );
}

export { Form }
