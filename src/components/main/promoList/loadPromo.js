import React from 'react';
import { NewPromo } from './new-promo.js';

const LoadPromo = (props) => {
  return (
    props.promoList.map((promo) => {
      return (
        <NewPromo
          promo={props.promo}
          data={promo}
          key={promo.id}
        />
      );
    })
  );
}

export { LoadPromo }
