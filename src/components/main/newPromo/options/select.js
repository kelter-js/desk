import React, { useState } from 'react';
import { Options } from './generate-options.js';

const Select = (props) => {
  const defaultValue = props.categories[0];

  const [selectData, selectDataUpdater] = useState(defaultValue);

  const selectElement = React.createRef();

  const onChange = (e) => {
    selectDataUpdater(e.target.value);
    props.handlers.onChangeStyle(defaultValue, selectElement)(e);
  }

  const updateSecondStage = (e) => {
    const stage = props.stageNumbers.firstStage;
    onChange(e);
    if (e.target.value !== defaultValue) {
      props.update(stage, true);
      return;
    }
    props.update(stage, false);
  }

  return (
    <select
      value={selectData}
      className='promo-creation__field promo-creation__field--item-category-option'
      onChange={updateSecondStage}
      onFocus={props.handlers.onFocus(selectElement)}
      onBlur={props.handlers.onBlur(defaultValue, selectElement)}
      ref={selectElement}
      id={props.id}>
      <Options options={props.categories} />
    </select>
  );
}

export { Select }
