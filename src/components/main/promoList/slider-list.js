import React from 'react';
import { SliderItem } from './slider-item.js';

const SliderList = (props) => {
  return (
    <ul className='promo-list__slider-list'>
      {props.slidersAmount.map((slider, index) => {
        return (
          <SliderItem
            key={index}
            sliderInfo={props.sliderInfo}
            id={index}
            currentSlider={props.currentSlider}
            changeSlider={props.changeSlider}
          />
        );
      })}
    </ul>
  );
}

export { SliderList }
