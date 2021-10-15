import React, { useState } from 'react';
import { Options } from './generate-options.js';

const Select = (props) => {
  const defaultValue = props.categories[0];
  const [selectData, selectDataUpdater] = useState(defaultValue);

  const selectElement = React.createRef();

  const onChange = (e) => {
    const value = e.target.value;
    selectDataUpdater(e.target.value);
    (defaultValue !== value ) ? selectElement.current.classList.add('promo-creation__field--selected') : selectElement.current.classList.remove('promo-creation__field--selected');
  }

  return (
    <select
      value={selectData}
      className='promo-creation__field promo-creation__field--item-category-option'
      onChange={onChange}
      ref={selectElement}
      id={props.id}>
      <Options options={props.categories} />
    </select>
  );
}

export { Select }
