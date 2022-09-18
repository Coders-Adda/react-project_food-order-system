import React, { useContext, useState ,useEffect } from 'react'
import CartContext from '../../../storage/cart-context';
import CartIcon from '../../cart/cartIcon'

import classes from './HeaderCartButton.module.css';

export const HeaderCartButton = (props) => {
  const [cartBtnUpdate,setCartBtnUpdate] = useState(false);
  const cartCtx = useContext(CartContext);

  const {items} = cartCtx;

  const totalAmount = items.reduce((currVal,item) => {
    return currVal + item.amount;
  },0)


  useEffect(() => {
    if(totalAmount === 0){
      return;
    }
    setCartBtnUpdate(true);

    const timer = setTimeout(() => {
      setCartBtnUpdate(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [items])
  

  return (
    <button className={`${classes.button} ${ cartBtnUpdate ? classes.bump : ''}`} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span className={classes}>Your cart</span>
        <span className={classes.badge}>
            {totalAmount}
        </span>
    </button>
  )
}
