import React, { useContext } from "react";
import CartContext from "../../storage/cart-context";
import CartItem from './CartItem';
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const handleCartItemAdd = (item) => {
    cartCtx.addItem(item);
  }
  const handleCartItemRemove = (id) => {
    cartCtx.removeItem(id);

  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItem) => (
        <CartItem 
        key={cartItem.id}
        name={cartItem.name}
        amount={cartItem.amount}
        price={cartItem.price}
        onRemove={handleCartItemRemove.bind(null,cartItem.id)}
        onAdd={handleCartItemAdd.bind(null,cartItem)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {cartCtx.totalAmount > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
