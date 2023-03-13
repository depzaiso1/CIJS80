import { useRef, useContext, useEffect, useState } from "react";
import { CartContext } from "./cartContext";

export const Meal = ({ meal }) => {
  const [quantity, setQuantity] = useState(1);

  const { dispatch, cart } = useContext(CartContext);

  const handleAddToCart = (meal) => {
    console.log(quantity);

    dispatch({
      type: "ADD_ITEM",
      item: {
        id: meal.id,
        image: meal.image,
        name: meal.name,
        price: meal.price,
        quantity: quantity,
      },
    });
  };

  const handleQuantityChange = (event) => {
    if (event.target.value <= 0) {
      alert("Wrong input");
      setQuantity(1);
    } else setQuantity(parseInt(event.target.value));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div className="meal">
      <div className="meal-image">
        <img
          src={meal.image}
          style={{ width: "80px", height: "80px" }}
          alt={meal.name}
        />
      </div>
      <div className="meal-details">
        <h2 className="meal-name">{meal.name}</h2>
        <p className="meal-description">{meal.description}</p>
        <p className="meal-price">${meal.price}</p>
        <input
          type="number"
          min="1"
          defaultValue={quantity}
          onChange={handleQuantityChange}
        />
        <button
          className="add-to-cart-btn"
          onClick={() => handleAddToCart(meal)}
        >
          +Add
        </button>
      </div>
    </div>
  );
};
