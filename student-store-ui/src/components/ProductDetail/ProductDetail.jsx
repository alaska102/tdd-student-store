import * as React from "react";
import { useState, useEffect } from 'react';
import "./ProductDetail.css";
import { useParams, useNavigate } from "react-router-dom";

import ProductView from "../ProductView/ProductView";
import NotFound from "../NotFound/NotFound";
import axios from "axios";

export default function ProductDetail({
  handleAddItemToCart,
  handleRemoveItemFromCart,
  isFetching,
  setIsFetching,
  getQuantity,
}) {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/store/${productId}`)
      .then((response) => {
        setProduct(response.data.product);
        setIsFetching(false);
      })
      .catch((e) => {
        <NotFound />;
      });
  }, []);

  let currentQuantity = getQuantity(productId);

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <h1 className="loading">{isFetching == true ? "Loading..." : null}</h1>
        {product ? (
          <ProductView
            product={product}
            productId={productId}
            quantity={currentQuantity}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            isFetching={isFetching}
            setIsFetching={setIsFetching}
          />
        ) : (
          navigate("/pageNotFound")
        )}
      </div>
    </div>
  );
}