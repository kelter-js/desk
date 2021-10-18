import React, { useState, useEffect } from 'react';
import { LoadPromo } from './loadPromo.js';
import { Loading } from '../../../loading.js';

const PromoList = (props) => {
  const [promoList, promoListUpdater] = useState([]);
  const [dataLoadedState, dataLoadedStateUpdater] = useState(false);
  const [dataLoaded, dataLoadedUpdater] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://6075786f0baf7c0017fa64ce.mockapi.io/products');
      const result = await response.json();
      promoListUpdater(result.slice(0, 16));
      dataLoadedUpdater(result);
      dataLoadedStateUpdater(true);
    }

    getData()
  }, []);

  const onClick = () => {
    promoListUpdater(dataLoaded);
  }

  return (
    <section className='promo-list'>
      <h2 className='promo-list__header'>
        {props.promo.header}
      </h2>
      {!dataLoadedState && <Loading />}
      <div className='promo-list__promo-container'>
        <LoadPromo
          promo={props.promo}
          promoList={promoList}
        />
      </div>
      {dataLoadedState && (
        <button
          className='promo-list__button promo-list__button--load'
          type='button'
          onClick={onClick}>
          {props.promo.loadMore}
        </button>
      )}
    </section>
  );
}

export { PromoList }
