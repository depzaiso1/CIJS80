import styles from "../css/modal.module.css";
import "../css/cart.css";
import { RiCloseLine } from "react-icons/ri";
import { CartContext } from "./cartContext";
import { useContext, useState } from "react";
import { Form, NoForm } from "./Form";
import { ModalContext, ModalContextProvider } from "./modalContext";

const Cart = ({ cartItem }) => {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (meal, quantity) => {
    dispatch({
      type: "ADD_ITEM",
      item: {
        id: meal.id,
        name: meal.name,
        price: meal.price,
        quantity: quantity,
      },
    });
  };

  const handleRemoveItem = (meal, quantity) => {
    dispatch({
      type: "REMOVE_ITEM",
      item: {
        id: meal.id,
        name: meal.name,
        price: meal.price,
        quantity: quantity,
      },
    });
  };

  return (
    <div className="cart" key={cartItem.id}>
      <div className="cart-info">
        <h2 className="cart-name">{cartItem.name}</h2>
        <div className="cart-details">
          <p className="cart-price">${cartItem.price}</p>
          <span className="cart-quantity">x{cartItem.quantity}</span>
        </div>
      </div>
      <div className="cart-button">
        <button
          className="increment"
          onClick={() => handleAddToCart(cartItem, 1)}
        >
          +
        </button>
        <button
          className="decrement"
          onClick={() => handleRemoveItem(cartItem, 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

const ModalContent = ({
  setIsOpen,
  isOrderFormVisible,
  setIsOrderFormVisible,
}) => {
  const { isSubmitting, isWaitingToSubmit } = useContext(ModalContext);
  const { cart, dispatch } = useContext(CartContext);

  const handleShowOrderForm = () => {
    setIsOrderFormVisible(true);
  };

  if (!isSubmitting)
    return (
      <div>
        <div className={styles.modalContent}>
          {cart.items.length === 0 && <span>There are no items here.</span>}
          {cart.items.length !== 0 &&
            cart.items.map((cartItem) => (
              <Cart key={cartItem.id} cartItem={cartItem} />
            ))}
        </div>
        <div className={styles.Amount}>
          <h2 style={{ color: "black" }}>Total Amount</h2>
          <h2 style={{ color: "black" }}>
            ${Number(cart.totalPrice).toFixed(2)}
          </h2>
        </div>
        {cart.items.length > 0 && !isOrderFormVisible && (
          <NoForm
            setIsOpen={setIsOpen}
            handleShowOrderForm={handleShowOrderForm}
          />
        )}
        {isOrderFormVisible && (
          <Form
            setIsOpen={setIsOpen}
            handleShowOrderForm={handleShowOrderForm}
          />
        )}
      </div>
    );
  else if (isSubmitting && isWaitingToSubmit)
    return <div className={styles.modalContent}>Sending order data...</div>;
  else if (isSubmitting && !isWaitingToSubmit)
    return (
      <div className={styles.modalContent}>
        Successfully sent the order.
        <button
          className={styles.cancelBtn}
          onClick={() => {
            setIsOpen(false);
            dispatch({ type: "CLEAR_CART" });
          }}
        >
          Close
        </button>
      </div>
    );
};

const Modal = ({ setIsOpen }) => {
  const { cart } = useContext(CartContext);
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);

  console.log(cart.items);
  const temp = isOrderFormVisible ? 440 : 240;

  const heightOfModal = String(temp + Number(cart.items.length) * 100) + "px";
  console.log(heightOfModal);

  return (
    <ModalContextProvider>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div
          className={styles.modal}
          style={{
            height: heightOfModal,
          }}
        >
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Your cart</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <ModalContent
            setIsOpen={setIsOpen}
            isOrderFormVisible={isOrderFormVisible}
            setIsOrderFormVisible={setIsOrderFormVisible}
          />
        </div>
      </div>
    </ModalContextProvider>
  );
};

export { Modal, ModalContext, ModalContextProvider };
