import React from 'react';
import { Select } from './select.js';

const Form = (props) => {
  return (
    <form action='https://echo.somewhereelse.com/' method='post'>
      <fieldset className='promo-creation__stage promo-creation__stage--first'>
        <div className='promo-creation__item-name-wrapper promo-creation__item-name-wrapper--required'>
          <label className='promo-creation__label' htmlFor='item-name'>
            {props.promo.firstStage.itemName}
          </label>
          <input
            type='text'
            className='promo-creation__field promo-creation__field--item-name'
            name='item-name'
            id='item-name'
            placeholder={props.promo.firstStage.namePlaceholder}
          />
          <p className='promo-creation__attention'>
            {props.promo.firstStage.attention}
          </p>
        </div>
        <div className='promo-creation__item-name-wrapper promo-creation__item-name-wrapper--required'>
          <label className='promo-creation__label' htmlFor='item-first-category'>
            {props.promo.firstStage.itemCategory}
          </label>
          <div className='promo-creation__select-wrapper'>
            <Select
              categories={props.promo.firstStage.categories}
              id={props.promo.firstStage.firstCategoryId}
            />
          </div>
          <label className='visually-hidden' htmlFor='item-second-category'>
            {props.promo.firstStage.itemCategory}
          </label>
          <div className='promo-creation__select-wrapper'>
            <Select
              categories={props.promo.firstStage.categories}
              id={props.promo.firstStage.secondCategoryId}
            />
          </div>
          <label className='visually-hidden' htmlFor='item-third-category'>
            {props.promo.firstStage.itemCategory}
          </label>
          <div className='promo-creation__select-wrapper'>
            <Select
              categories={props.promo.firstStage.categories}
              id={props.promo.firstStage.thirdCategoryId}
            />
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export { Form }
