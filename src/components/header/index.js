import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <header className="main-header">
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink activeClassName='navigation__link--current' className='navigation__link' to={props.navigation.promoListURL}>
              {props.navigation.promoListInfo}
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink activeClassName='navigation__link--current' className='navigation__link' to={props.navigation.createPromoURL}>
              {props.navigation.createPromoInfo}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header }
