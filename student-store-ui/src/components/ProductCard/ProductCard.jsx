import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription,
  isFetching,
  setIsFetching,
}) {
  const [currentQuantity, setCurrentQuantity] = React.useState(quantity);
  return (
    <div className="product-card">
      <div className="media">
        {showDescription ? (
          <img className="product-image" src={product.image} />
        ) : (
          <Link to={`/products/${product.id}`}>
            <img
              className="product-image"
              src={product.image}
              onClick={() => setIsFetching(true)}
            />
          </Link>
        )}
      </div>
      <div className="product-info">
        <div className="product-data">
          <p className="product-name">{product.name}</p>
          <br></br>
          <p className="product-price">${product.price.toFixed(2)}</p>
        </div>

        {showDescription && (
          <p className="product-description">{product.description}</p>
        )}
        <div className="pc-buttons">
          <button
            className="add"
            onClick={() => {
              handleAddItemToCart(productId);
              setCurrentQuantity(currentQuantity + 1);
            }}
          >
            <i class="material-icons">add</i>
          </button>
          <div className="pc-right-col">
            <button
              className="remove"
              onClick={() => {
                handleRemoveItemFromCart(productId);
                if (currentQuantity !== 0) {
                  setCurrentQuantity(currentQuantity - 1);
                }
              }}
            >
              <i class="material-icons">remove</i>
            </button>
            {currentQuantity !== 0 && (
              <span className="product-quantity">{currentQuantity}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}