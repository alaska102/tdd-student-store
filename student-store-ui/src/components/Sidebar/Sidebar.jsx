import * as React from "react";
import "./Sidebar.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
  handleOnToggle,
  setCheckoutFormSubmitSuccess,
  checkoutFormSubmitSuccess,
  receipt,
  setReceipt,
  error,
}) {
  return (
    <section className="sidebar">
      {!isOpen && (
        <div className="sidebar-closed">
          <button className="toggle-button" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <button className="toggle-buttons" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">add_shopping_cart</i>
          </button>
          <button className="toggle-buttons" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">monetization_on</i>
          </button>
          <button className="toggle-buttons" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">fact_check</i>
          </button>
        </div>
      )}
      {isOpen && (
        <div className="sidebar-open">
          <button className="toggle-button" onClick={() => handleOnToggle()}>
            <i className="material-icons md-48">arrow_backward</i>
          </button>
          <ShoppingCart
            isOpen={isOpen}
            products={products}
            shoppingCart={shoppingCart}
          />
          <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
            setCheckoutFormSubmitSuccess={setCheckoutFormSubmitSuccess}
            checkoutFormSubmitSuccess={checkoutFormSubmitSuccess}
            receipt={receipt}
            setReceipt={setReceipt}
            products={products}
            error={error}
          />
        </div>
      )}
    </section>
  );
}