import React, {useState} from 'react';
import { Select } from '../newPromo/options/select.js';

const FirstStage = (props) => {
  const [itemState, itemStateUpdater] = useState(props.stage.itemState);

  return (
    <fieldset className='promo-creation__stage promo-creation__stage--first'>
      <div className='promo-creation__item-wrapper promo-creation__item-wrapper--required'>
        <label className='promo-creation__label promo-creation__label--name' htmlFor='item-name'>
          {props.stage.itemName}
        </label>
        <input
          type='text'
          className='promo-creation__field promo-creation__field--item-name'
          name='item-name'
          id='item-name'
          value={itemState.value}
          onChange={props.handlers.onChangeField(itemStateUpdater, itemState, props.stage.maxFieldLength)}
          placeholder={props.stage.namePlaceholder}
        />
        <p className={itemState.attention ? 'promo-creation__attention promo-creation__attention--enabled' : 'promo-creation__attention'}>
          {props.stage.attention}
        </p>
      </div>
      <div className='promo-creation__item-wrapper promo-creation__item-wrapper--required'>
        <label className='promo-creation__label promo-creation__label--category' htmlFor='item-first-category'>
          {props.stage.itemCategory}
        </label>
        <div className='promo-creation__select-wrapper promo-creation__pseudo-arrow'>
          <Select
            categories={props.stage.categories}
            id={props.stage.firstCategoryId}
            handlers={props.handlers}
          />
        </div>
        <label className='visually-hidden' htmlFor='item-second-category'>
          {props.stage.itemCategory}
        </label>
        <div className='promo-creation__select-wrapper promo-creation__pseudo-arrow'>
          <Select
            categories={props.stage.categories}
            id={props.stage.secondCategoryId}
            handlers={props.handlers}
          />
        </div>
        <label className='visually-hidden' htmlFor='item-third-category'>
          {props.stage.itemCategory}
        </label>
        <div className='promo-creation__select-wrapper promo-creation__pseudo-arrow'>
          <Select
            categories={props.stage.categories}
            id={props.stage.thirdCategoryId}
            handlers={props.handlers}
          />
        </div>
      </div>
    </fieldset>
  );
}

export { FirstStage }
