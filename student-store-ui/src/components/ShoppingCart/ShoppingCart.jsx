import * as React from "react";
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  const [subtotal, setSubtotal] = React.useState(0);
  const TAX_RATE = 0.0875;

  const getProductInfo = (itemId) => {
    for (let i = 0; i < products.length; i++) {
      if (itemId == products[i].id) {
        return [products[i].name, products[i].price];
      }
    }
  };

  React.useEffect(() => {
    setSubtotal(0);
    let count = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      let cart = 0;
      let unitPrice = getProductInfo(shoppingCart[i].itemId)[1];
      cart= shoppingCart[i].quantity * unitPrice;
      count = count + cart;
    }
    setSubtotal(count);
  }, [shoppingCart]);


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
            <div key={i} className="product-row">
              <span className="flex-2 cart-product-name">
                {getProductInfo(item.itemId)[0]}
              </span>
              <span className="center cart-product-quantity">
                {item.quantity}
              </span>
              <span className="center cart-product-price">
                ${getProductInfo(item.itemId)[1].toFixed(2)}
              </span>
              <span className="center cart-product-subtotal">
                $
                {(
                  item.quantity * getProductInfo(item.itemId)[1]
                ).toFixed(2)}
              </span>
            </div>
          ))}
          <div className="receipt">
            <span className="receipt-subtotal">Subtotal</span>
            <span className="subtotal">${subtotal.toFixed(2)}</span>
          </div>
          <div className="receipt-taxes">
            <span className="receipt-subtotal">Taxes and Fees</span>
            <span className="subtotal">${(subtotal * TAX_RATE).toFixed(2)}</span>
          </div>
          <div className="receipt-total">
            <span className="receipt-subtotal">Total</span>
            <span className="total-price">
              ${(subtotal * (TAX_RATE + 1)).toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}