import React from 'react';
import { PromoStages } from './generate-promo-stages.js';
import { Form } from './form.js';

const Promo = (props) => {
  console.log(props)
  return (
    <section className='promo-creation'>
      <h2 className='promo-creation__header'>
        {props.promo.header}
      </h2>
      <ul className='promo-creation__stages-list'>
        <PromoStages promo={props.promo} />
      </ul>
      <Form promo={props.promo}/>
    </section>
  );
}

export { Promo }
