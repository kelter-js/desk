import React, { useState } from 'react';
import { Annotation } from './annotation.js';
import { PhotoList } from './photo-list.js';

const SecondStage = (props) => {
  const [price, priceUpdater] = useState(props.stage.price);
  const [checkState, checkStateUpdater] = useState(props.stage.checkboxes);
  const [serviceText, serviceTextUpdater] = useState(props.stage.serviceTextState);

  const showMore = (element) => {
    return (e) => serviceTextUpdater({ ...serviceText, [element]: !serviceText[element] });
  }

  const updateThirdStage = (e) => {
    const stage = props.stageNumbers.thirdStage;
    const mainHandler = props.handlers.onChangeField(priceUpdater, price, props.stage.maxFieldPriceLength);
    mainHandler(e);
    if (e.target.value !== '') {
      props.update(stage, true);
      return;
    }
    props.update(stage, false);
  }

  return (
    <fieldset className='promo-creation__stage'>
      <div className='promo-creation__item-wrapper promo-creation__item-wrapper--required'>
        <label className='promo-creation__label promo-creation__label--annotation' htmlFor='item-annotation'>
          {props.stage.itemAnnotation}
        </label>
        <Annotation
          attention={props.stage.attentionAnnotation}
          placeholder={props.stage.annotationPlaceholder}
          handlers={props.handlers}
          maxLength={props.stage.maxFieldAnnotationLength}
          update={props.update}
          stageNumbers={props.stageNumbers}
        />
      </div>
      <div className='promo-creation__item-wrapper promo-creation__item-wrapper--required'>
        <label className='promo-creation__label promo-creation__label--annotation' htmlFor='item-price'>
          {props.stage.itemPrice}
        </label>
        <input
          value={price.value}
          type='number'
          className='promo-creation__field promo-creation__field--item-price'
          name='item-price'
          id='item-price'
          placeholder={props.stage.pricePlaceholder}
          onChange={updateThirdStage}
        />
        <input
          type='checkbox'
          checked={checkState.trade}
          className='promo-creation__checkbox visually-hidden'
          name='trade'
          id='trade'
          onChange={props.handlers.onCheck(checkStateUpdater, checkState, 'trade')}
        />
        <label className='promo-creation__label promo-creation__label--trade' htmlFor='trade'>
          {props.stage.checkTrade}
        </label>
        <p className={price.attention ? 'promo-creation__attention promo-creation__attention--enabled' : 'promo-creation__attention'}>
          {props.stage.attentionPrice}
        </p>
      </div>
      <div className='promo-creation__service-wrapper'>
        <div className='promo-creation__item-icon promo-creation__item-icon--protection'>
          <span className='visually-hidden'>
            Гарантия безопасности сделки
          </span>
        </div>
        <input
          type='checkbox'
          checked={checkState.protection}
          className='promo-creation__checkbox visually-hidden'
          name='protection'
          id='protection'
          onChange={props.handlers.onCheck(checkStateUpdater, checkState, 'protection')}
        />
        <label className='promo-creation__label promo-creation__label--service promo-creation__label--protection' htmlFor='protection'>
          {props.stage.checkProtected}
        </label>
        <button
          type='button'
          className={serviceText.protectionOpened ? (
            'promo-creation__show-more promo-creation__pseudo-arrow promo-creation__pseudo-arrow--opened') : (
            'promo-creation__show-more promo-creation__pseudo-arrow')}
          onClick={showMore('protectionOpened')}>
          {props.stage.showMore}
        </button>
        <p className='promo-creation__info promo-creation__info--text'>
          {props.stage.protectionInfo}
        </p>
        {serviceText.protectionOpened && (
          <p className='promo-creation__info promo-creation__info--more-text'>
            {props.stage.protectionMoreInfo}
          </p>
        )}
      </div>
      <div className='promo-creation__service-wrapper'>
        <div className='promo-creation__item-icon promo-creation__item-icon--delivery'>
          <span className='visually-hidden'>
            Организация доставки до дома
          </span>
        </div>
        <input
          type='checkbox'
          checked={checkState.delivery}
          className='promo-creation__checkbox visually-hidden'
          name='delivery'
          id='delivery'
          onChange={props.handlers.onCheck(checkStateUpdater, checkState, 'delivery')}
        />
        <label className='promo-creation__label promo-creation__label--service promo-creation__label--delivery' htmlFor='delivery'>
          {props.stage.checkDelivery}
        </label>
        <button
          type='button'
          className={serviceText.deliveryOpened ? (
            'promo-creation__show-more promo-creation__pseudo-arrow promo-creation__pseudo-arrow--opened') : (
            'promo-creation__show-more promo-creation__pseudo-arrow')}
          onClick={showMore('deliveryOpened')}>
          {props.stage.showMore}
        </button>
        <p className='promo-creation__info promo-creation__info--text'>
          {props.stage.deliveryInfo}
        </p>
        {serviceText.deliveryOpened && (
          <p className='promo-creation__info promo-creation__info--more-text'>
            {props.stage.deliveryMoreInfo}
          </p>
        )}
      </div>
      <PhotoList
        photos={props.stage.photos}
        fieldName={props.stage.itemPhoto}
        photoButton={props.stage.photoButton}
        types={props.stage.photoTypes}
        rotateText={props.stage.rotateText}
        deleteText={props.stage.deleteText}
        rotate={props.stage.rotateClasses}
        update={props.update}
        stageNumbers={props.stageNumbers}
      />
    </fieldset>
  );
}

export { SecondStage }
