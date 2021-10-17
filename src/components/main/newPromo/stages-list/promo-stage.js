import React from 'react';

const Stage = (props) => {
  return (
    <li className={props.stages ? 'promo-creation__stage-item promo-creation__stage-item--enabled' : 'promo-creation__stage-item promo-creation__stage-item--disabled'}>
      <p className={props.stages ? 'promo-creation__stage-text promo-creation__stage-text--enabled' : 'promo-creation__stage-text promo-creation__stage-text--disabled'}>
        {props.text}
      </p>
    </li>
  );
}

export { Stage }
