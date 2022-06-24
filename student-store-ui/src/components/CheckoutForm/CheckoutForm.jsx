import * as React from "react";
import "./CheckoutForm.css";

export default function CheckoutForm({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) {

  return (
    <div className="checkout-form">
      <h1 className="cf-title">Payment Info</h1>
      <div className="input-field">
        <label className="label">Name</label>
        <div className="control">
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={checkoutForm.name}
            onChange={(evt) =>
              handleOnCheckoutFormChange("name", evt.target.value)
            }
            className="checkout-form-input"
          ></input>
        </div>
      </div>
      <div className="input-field">
        <label className="label">Email</label>
        <div className="control">
          <input
            type="email"
            name="email"
            placeholder="student@codepath.org"
            value={checkoutForm.email}
            onChange={(evt) =>
              handleOnCheckoutFormChange("email", evt.target.value)
            }
            className="checkout-form-input"
          ></input>
        </div>
      </div>

      <button
        type="button"
        className="checkout-button"
        onClick={() => handleOnSubmitCheckoutForm()}
      >
        Checkout
      </button>
    </div>
  );
}