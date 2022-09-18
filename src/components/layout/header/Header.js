import React from 'react'

import headerMeal from '../../../assets/images/meals.jpg';
import classes from './Header.module.css';
import { HeaderCartButton } from './HeaderCartButton';

export const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h2>Food Store</h2>
            <HeaderCartButton onClick={props.onCartShow} />
        </header>
            <div className={classes['main-image']}>
                <img src={headerMeal} alt="Header" />
            </div>
    </React.Fragment>
  )
}
