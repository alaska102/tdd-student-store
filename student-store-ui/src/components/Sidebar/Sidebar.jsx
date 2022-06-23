import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnsubmitCheckoutForm,
  handleOnToggle,
}) {
  return (
    <section className="sidebar">
      {isOpen == false && (
        <div className="sidebar-closed">
          <button className="toggle-button" onClick={() => handleOnToggle()}>
            <i class="material-icons md-48">arrow_forward</i>
          </button>
          <button className="toggle-buttons" onClick={() => handleOnToggle()}>
            <i class="material-icons md-48">add_shopping_cart</i>
          </button>
          <button className="toggle-buttons" onClick={() => handleOnToggle()}>
            <i class="material-icons md-48">monetization_on</i>
          </button>
          <button className="toggle-buttons" onClick={() => handleOnToggle()}>
            <i class="material-icons md-48">fact_check</i>
          </button>
        </div>
      )}
      {isOpen == true && (
        <div className="sidebar-open">
          <button className="toggle-button" onClick={() => handleOnToggle()}>
            <i class="material-icons md-48">arrow_backward</i>
          </button>
          <ShoppingCart />
          <CheckoutForm />
        </div>
      )}
    </section>
  );
}