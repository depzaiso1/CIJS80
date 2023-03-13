import React, { createContext, useReducer } from "react";

// Initial state of cart
const initialCart = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// Reducer function to update cart state based on dispatched action
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: addItemToCart(state.items, action.item),
        totalQuantity:
          Number(state.totalQuantity) + Number(action.item.quantity),
        totalPrice:
          Number(state.totalPrice) +
          Number(action.item.quantity) * Number(action.item.price),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: removeItemFromCart(state.items, action.item),
        totalQuantity:
          Number(state.totalQuantity) - Number(action.item.quantity),
        totalPrice:
          Number(state.totalPrice) -
          Number(action.item.quantity) * Number(action.item.price),
      };
    case "CLEAR_CART":
      return initialCart;
    default:
      return state;
  }
};

// Helper function to add an item to cart
const addItemToCart = (items, itemToAdd) => {
  const existingItem = items.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    // If item already exists in cart, increase its quantity
    return items.map((item) =>
      item.id === itemToAdd.id
        ? {
            ...item,
            quantity: Number(item.quantity) + Number(itemToAdd.quantity),
          }
        : item
    );
  }
  // If item does not exist in cart, add it
  return [...items, itemToAdd];
};

// Helper function to remove an item from cart
const removeItemFromCart = (items, itemToRemove) => {
  const existingItem = items.find((item) => item.name === itemToRemove.name);
  if (existingItem.quantity === 1) {
    // If item quantity is 1, remove it from cart
    return items.filter((item) => item.name !== itemToRemove.name);
  }
  // If item quantity is greater than 1, decrease its quantity
  return items.map((item) =>
    item.name === itemToRemove.name
      ? {
          ...item,
          quantity: Number(item.quantity) - Number(itemToRemove.quantity),
        }
      : item
  );
};

// Create CartContext with initial state and dispatch function from cartReducer
export const CartContext = createContext({
  cart: initialCart,
  dispatch: () => {},
});

// CartContextProvider component to provide CartContext to child components
export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
