import React, { useState } from 'react';

const ThirdStage = (props) => {
  const [communicationText, communicationTextUpdater] = useState(props.stage.communicationText);
  const [communicationChecks, communicationChecksUpdater] = useState(props.stage.checkBoxesState);

  const onChange = (e, element) => {
    communicationTextUpdater({...communicationText, [element]: e.target.value})
  }

  const updateFifthStage = (e) => {
    const stage = props.stageNumbers.fifthStage;
    onChange(e, 'location');

    if (e.target.value !== '') {
      props.update(stage, true);
      return;
    }

    props.update(stage, false);
  }

  const updateSixthStage = (e) => {
    const stage = props.stageNumbers.sixthStage;
    onChange(e, 'contacts');

    if (e.target.value !== '') {
      props.update(stage, true);
      return;
    }

    props.update(stage, false);
  }

  return (
    <fieldset className='promo-creation__stage promo-creation__stage--third'>
      <div className='promo-creation__item-wrapper promo-creation__item-wrapper--required promo-creation__item-wrapper--location'>
        <label className='promo-creation__label promo-creation__label--location' htmlFor='location'>
          {props.stage.vendorLocation}
        </label>
        <input
          type='text'
          className='promo-creation__field promo-creation__field--location'
          name='location'
          id='location'
          value={communicationText.locationValue}
          onChange={updateFifthStage}
          placeholder={props.stage.locationPlaceholder}
        />
        <p className='promo-creation__attention'>
          {props.stage.locationAttention}
        </p>
      </div>

      <picture>
        <source type='image/webp' srcSet='/img/map-example.webp 1x, /img/map-example@2x.webp 2x' />
        <img className='promo-creation__location-image' src='/img/map-example.png' srcSet='/img/map-example@2x.png 2x' alt='Местоположение на карте места будущей сделки' />
      </picture>

      <div className='promo-creation__item-wrapper promo-creation__item-wrapper--required'>
        <label className='promo-creation__label promo-creation__label--contacts' htmlFor='contacts'>
          {props.stage.vendorPhone}
        </label>
        <div className='promo-creation__number-wrapper promo-creation__pseudo-arrow'>
          <input
            type='number'
            className='promo-creation__field promo-creation__field--phone'
            name='contacts'
            id='contacts'
            value={communicationText.contacts}
            onChange={updateSixthStage}
            placeholder={props.stage.phonePlaceholder}
          />
        </div>
        <input
          type='checkbox'
          checked={communicationChecks.message}
          value={communicationChecks.message}
          className='promo-creation__checkbox visually-hidden'
          name='message'
          id='message'
          onChange={props.handlers.onCheck(communicationChecksUpdater, communicationChecks, 'message')}
        />
        <label className='promo-creation__label promo-creation__label--message' htmlFor='message'>
          {props.stage.checkMessage}
        </label>
        <input
          type='checkbox'
          checked={communicationChecks.call}
          value={communicationChecks.call}
          className='promo-creation__checkbox visually-hidden'
          name='call'
          id='call'
          onChange={props.handlers.onCheck(communicationChecksUpdater, communicationChecks, 'call')}
        />
        <label className='promo-creation__label promo-creation__label--call' htmlFor='call'>
          {props.stage.checkPhone}
        </label>
        <button className='promo-creation__verify-number' type='button'>
          {props.stage.verifyPhone}
        </button>
      </div>
      <div className='promo-creation__item-wrapper promo-creation__item-wrapper--required promo-creation__item-wrapper--final'>
        <p className='promo-creation__required-info'>
          {props.stage.requiredInfo}
        </p>
        <button className='promo-creation__submit' type='submit' disabled={props.fieldsState}>
          {props.stage.nextFields}
        </button>
      </div>
    </fieldset>
  );
}

export { ThirdStage }
