import React from 'react';
import { Stage } from './promo-stage.js';

const PromoStages = (props) => {
  return (
    props.promo.promoStages.map((promo, index) => {
      return <Stage text={promo} key={index}/>
    })
  );
}

export { PromoStages }
