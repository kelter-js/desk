import React from 'react';

const SliderItem = (props) => {
  return (
    <li className='promo-list__slider-item'>
      <button
      className={props.currentSlider === props.id ? (
        'promo-list__button promo-list__slider-button promo-list__slider-button--current') : (
        'promo-list__button promo-list__slider-button'
        )}
        onClick={props.changeSlider(props.id)}>
        <span className='visually-hidden'>
          {props.sliderInfo}
        </span>
      </button>
    </li>
  );
}

export { SliderItem }
