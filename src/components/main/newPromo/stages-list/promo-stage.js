import React from 'react';

const Stage = (props) => {
  return (
    <li className='promo-creation__stage-item'>
      <p className='promo-creation__stage-text'>
        {props.text}
      </p>
    </li>
  );
}

export { Stage }
