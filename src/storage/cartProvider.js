import React, { useReducer } from "react";
import CartContext from "./cart-context";

const ACTIONS = {
  CART_ADD_NEW: "add-new-item",
  CART_UPDATE: "update-item",
  CART_REMOVE_ITEMS: "remove-items",
};

const cartReducer = (state, action) => {
  if (action.type === ACTIONS.CART_ADD_NEW) {
    const updateTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updateTotalAmount };
  }

  if (action.type === ACTIONS.CART_REMOVE_ITEMS) {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    const updateTotalAmount = state.totalAmount - existingCartItem.price;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updateTotalAmount };
  }

  return state;
};

const CartProvider = (props) => {
  const [cartState, cartDispacher] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemInCartHandler = (item) => {
    cartDispacher({ type: ACTIONS.CART_ADD_NEW, item: item });
  };

  const removeItemInCartHandler = (id) => {
    cartDispacher({ type: ACTIONS.CART_REMOVE_ITEMS, id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemInCartHandler,
    removeItem: removeItemInCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
