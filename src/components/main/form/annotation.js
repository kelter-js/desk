import React, { useState } from 'react';

const Annotation = (props) => {
  const defaultValue = props.placeholder;
  const [annotation, annotationUpdate] = useState({ 'value': defaultValue, 'attention': false });
  const textElement = React.createRef();

  const onFocus = (e) => {
    if (e.target.value !== defaultValue) {
      return;
    }

    const mainHandler = props.handlers.onFocus(textElement);
    annotationUpdate({ ...annotation, 'value': '' });
    mainHandler(e);
  }

  const onChange = (e) => {
    props.handlers.onChangeField(annotationUpdate, annotation, props.maxLength)(e);
    props.handlers.onChangeStyle(defaultValue, textElement)(e);
  }

  const onBlur = (e) => {
    if (e.target.value) {
      return;
    }

    annotationUpdate({ ...annotation, 'value': defaultValue });
    const mainHandler = props.handlers.onBlur(defaultValue, textElement);
    mainHandler(e);
  }

  return (
    <>
      <textarea
        value={annotation.value}
        type='text'
        className='promo-creation__field promo-creation__field--item-annotation'
        name='item-annotation'
        id='item-annotation'
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={textElement}
      />
      <p className={annotation.attention ? 'promo-creation__attention promo-creation__attention--enabled' : 'promo-creation__attention'}>
        {props.attention}
      </p>
    </>
  );
}

export { Annotation }
