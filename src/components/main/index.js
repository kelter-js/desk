import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Promo } from './newPromo/index.js';

const Main = (props) => {
  return (
    <main>
      <Switch>
        <Route
          path={props.store.urls.promoList}
          render={() => <p>2</p>}
        />
        <Route
          path={props.store.urls.createPromo}
          render={() =>
            <Promo
              promo={props.store.promoCreation}
            />
          } />
      </Switch>
    </main>
  );
}

export { Main }
