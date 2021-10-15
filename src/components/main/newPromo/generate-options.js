import React from 'react';
import { Option } from './option.js';

const Options = (props) => {
  return (
    props.options.map((option, key) => {
      return (
        <Option
          value={option}
          key={key}
        />
      );
    })
  );
}

export { Options }
