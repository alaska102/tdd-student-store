import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ 
    isOpen,
    products,
    shoppingCart 
}) {

  const TAX_RATE = .0875
  const getPriceFormat = (price) => {
    const intPart = parseInt(price).toString();
    const auxFloatPart = (price - intPart).toFixed(2);
    const floatPart = auxFloatPart.substring(
      auxFloatPart.length - 2,
      auxFloatPart.length
    );
  
    return `$${intPart}.${floatPart}`;
  };
  const getProductNameAndPrice = (itemId) => {
    for (let i = 0; i < products.length; i++) {
      if (itemId == products[i].id) {
        return [products[i].name, products[i].price];
      }
    }
  };

  const getSubTotal = () => {
    let subtotal = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      subtotal +=
        products[shoppingCart[i].itemId - 1].price * shoppingCart[i].quantity;
    }
    return subtotal;
  };


  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      {shoppingCart.length == 0 && (
        <p className="notification">
          No items added to cart yet. Start shopping now!
        </p>
      )}
      {shoppingCart.length !== 0 && (
        <div className="shopping-cart-table">
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
            <span className="subtotal">{getPriceFormat(getSubTotal())}</span>
          </div>
          <div className="receipt-taxes">
            <span className="receipt-subtotal">Taxes and Fees</span>
            <span></span>
            <span></span>
            <span className="subtotal">{getPriceFormat(getSubTotal() * (TAX_RATE))}</span>
          </div>
          <div className="receipt-total">
            <span className="receipt-subtotal">Total</span>
            <span></span>
            <span></span>
            <span className="total-price">{getPriceFormat(getSubTotal() * (TAX_RATE + 1))}</span>
          </div>
        </div>
      )}
    </div>
  );
}