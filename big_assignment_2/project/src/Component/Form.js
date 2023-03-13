import styles from "../css/modal.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../css/form.css";
import { ModalContext } from "./modal";
import { useContext } from "react";
import { CartContext } from "./cartContext";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(30, "Name cannot be longer than 30 characters")
    .matches(/^[A-Za-z ]+$/, "Name must only contain characters"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Phone number must be numeric"),
  street: yup
    .string()
    .required("Street is required")
    .max(50, "Street cannot be longer than 50 characters"),
  postalCode: yup
    .string()
    .required("Postal code is required (5 characters long)")
    .matches(/^\d{5}$/, "Postal code must be 5 digits"),
  city: yup
    .string()
    .required("City is required")
    .max(30, "City cannot be longer than 30 characters"),
});

const OrderForm = ({ cartItems, setIsOpen, handleShowOrderForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { setIsSubmitting, setIsWaitingToSubmit } = useContext(ModalContext);

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      setIsWaitingToSubmit(true);
      const response = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: cartItems, ...data }),
      });
      const order = await response.json();
      console.log(order);
    } catch (err) {
      console.error(err);
      alert("Error occurred while submitting order");
      setIsOpen(false);
      setIsSubmitting(false);
    } finally {
      setIsWaitingToSubmit(false);
      console.log("successfully add!");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className="form-item">
        <div className="form-detail">
          <label>Your Name:</label>
          <input {...register("name")} />
        </div>
        {!errors.name && <span className="form-error"></span>}
        {errors.name && (
          <span className="form-error">{errors.name.message}</span>
        )}
      </div>

      <div className="form-item">
        <div className="form-detail">
          <label>Phone Number:</label>
          <input {...register("phone")} />
        </div>
        {!errors.phone && <span className="form-error"></span>}
        {errors.phone && (
          <span className="form-error">{errors.phone.message}</span>
        )}
      </div>

      <div className="form-item">
        <div className="form-detail">
          <label>Street:</label>
          <input {...register("street")} />
        </div>
        {!errors.street && <span className="form-error"></span>}
        {errors.street && (
          <span className="form-error">{errors.street.message}</span>
        )}
      </div>

      <div className="form-item">
        <div className="form-detail">
          <label>Postal Code:</label>
          <input {...register("postalCode")} />
        </div>
        {!errors.postalCode && <span className="form-error"></span>}
        {errors.postalCode && (
          <span className="form-error">{errors.postalCode.message}</span>
        )}
      </div>

      <div className="form-item">
        <div className="form-detail">
          <label>City:</label>
          <input {...register("city")} />
        </div>
        {!errors.city && <span className="form-error"></span>}
        {errors.city && (
          <span className="form-error">{errors.city.message}</span>
        )}
      </div>
      <div className={styles.actionsContainer}>
        <button
          className={styles.cancelBtn}
          onClick={() => {
            setIsOpen(false);
            setIsSubmitting(false);
          }}
        >
          Close
        </button>
        <button
          type="submit"
          className={styles.deleteBtn}
          onClick={() => handleShowOrderForm(false)}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

const NoForm = ({ setIsOpen, handleShowOrderForm }) => {
  return (
    <div className={styles.modalActions}>
      <div className={styles.actionsContainer}>
        <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>
          Close
        </button>
        <button
          className={styles.deleteBtn}
          onClick={() => handleShowOrderForm(false)}
        >
          Order
        </button>
      </div>
    </div>
  );
};

const Form = ({ setIsOpen, handleShowOrderForm }) => {
  const { cart } = useContext(CartContext);
  return (
    <div className={styles.modalActions}>
      <OrderForm
        setIsOpen={setIsOpen}
        handleShowOrderForm={handleShowOrderForm}
        cartItems={cart.items}
      />
    </div>
  );
};

export { NoForm, Form };
