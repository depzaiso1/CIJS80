import { useContext } from "react";
import { CartContext } from "./cartContext";

export const Header = ({ setIsOpen }) => {
  const { cart } = useContext(CartContext);

  return (
    <div className="header">
      <span>reactMeals</span>
      <button onClick={() => setIsOpen(true)}>Your Cart</button>
      <span>{cart.totalQuantity}</span>
    </div>
  );
};
