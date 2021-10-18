import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Promo } from './newPromo/index.js';
import { PromoList } from './promoList/index.js';

const Main = (props) => {
  return (
    <main>
      <h1 className='visually-hidden'>
        Агрегатор по сбору объявлений о продаже
      </h1>
      <Switch>
        <Route
          path={props.store.urls.promoList}
          render={() => <PromoList promo={props.store.promoList}/>}
        />
        <Route
          path={props.store.urls.createPromo}
          render={() => <Promo promo={props.store.promoCreation} />} />
      </Switch>
    </main>
  );
}

export { Main }
