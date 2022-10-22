import React from "react";
import cartContext from "./cartContext";
function CartProvider(props) {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};
  const cartData = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <cartContext.Provider value={cartData}>
      {props.children}
    </cartContext.Provider>
  );
}

export default CartProvider;
