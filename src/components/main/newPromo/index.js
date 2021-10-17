import React, { useState } from 'react';
import { PromoStages } from './stages-list/generate-promo-stages.js';
import { Form } from '../form/form.js';

const Promo = (props) => {
  const [stage, stageUpdater] = useState(props.promo.promoStagesState);

  const updateStage = (currentStage, value) => {
    console.log(value)
    const stages = {
      '0': () => {
        stageUpdater({...stage, [currentStage]: value})
      },
      '1': () => {
        stageUpdater({...stage, [currentStage]: value})
      },
      '2': () => {
        stageUpdater({...stage, [currentStage]: value})
      },
      '3': () => {
        stageUpdater({...stage, [currentStage]: value})
      },
      '4': () => {
        stageUpdater({...stage, [currentStage]: value})
      },
      '5': () => {
        stageUpdater({...stage, [currentStage]: value})
      },
    }
    stages[currentStage]();
  }

  return (
    <section className='promo-creation'>
      <h2 className='promo-creation__header'>
        {props.promo.header}
      </h2>
      <ul className='promo-creation__stages-list'>
        <PromoStages
          promo={props.promo}
          stages={stage}
        />
      </ul>
      <Form
        promo={props.promo}
        update={updateStage}
      />
    </section>
  );
}

export { Promo }
