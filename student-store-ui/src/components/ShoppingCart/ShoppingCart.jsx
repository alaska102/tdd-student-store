import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ 
    isOpen,
    products,
    shoppingCart 
}) {

  const getProductNameAndPrice = (itemId) => {
    for (let i = 0; i < products.length; i++) {
      if (itemId == products[i].id) {
        return [products[i].name, products[i].price];
      }
    }
  };
  return (
    <div className="shopping-cart">
      <h1 className="sc-title">Shopping Cart</h1>
      {shoppingCart.length == 0 && (
        <p className="notification">
          No items added to cart yet. Start shopping now!
        </p>
      )}
      {shoppingCart.length !== 0 && (
        <div className="sc-table">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>
          {shoppingCart.map((item, i) => (
            <div className="product-row">
              <span className="flex-2 cart-product-name">
                {getProductNameAndPrice(item.itemId)[0]}
              </span>
              <span className="center cart-product-quantity">
                {item.quantity}
              </span>
              <span className="center cart-product-price">
                ${getProductNameAndPrice(item.itemId)[1].toFixed(2)}
              </span>
              <span className="center cart-product-subtotal">
                {(
                  item.quantity * getProductNameAndPrice(item.itemId)[1]
                ).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="receipt">
            <span className="receipt-subtotal">Subtotal</span>
            <span></span>
            <span></span>
            <span className="subtotal">$999.00</span>
          </div>
          <div className="receipt-taxes">
            <span className="receipt-subtotal">Taxes and Fees</span>
            <span></span>
            <span></span>
            <span className="subtotal">$999.00</span>
          </div>
          <div className="receipt-total">
            <span className="receipt-subtotal">Total</span>
            <span></span>
            <span></span>
            <span className="total-price">$999.00</span>
          </div>
        </div>
      )}
    </div>
  );
}