import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="main-header">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink activeClassName='navigation__link--current' className='navigation__link' to={props.store.urls.promoList}>
              {props.store.navigation.promoList.text}
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink activeClassName='navigation__link--current' className='navigation__link' to={props.store.urls.createPromo}>
              {props.store.navigation.createPromo.text}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header }
