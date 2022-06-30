import * as React from "react";
import "./OrderDetail.css";

import { Routes, Route, Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function OrderDetail({ order, orderId, showDescription }) {
  return (
    <Link to={`/orders/${orderId}`} className="order-links">
      <div className="header" id="order-header">
        <div className="header-row column-header spacer" id="order-header">
          <span className="flex-2 order-row">{order.name}</span>
          <span className="center order-row">{order.email}</span>
          <span className="center order-row">${order.total}</span>
        </div>

        {showDescription && order.receipt && (
          <div className="order-receipt-row">
            {order.receipt.map((element) => {
              return (
                <div key={order.itemId} className="receipt-div">
                  <span className="receipt-name">Name: {element.name}</span>
                  <span className="receipt-quantity">
                    Quantity: {element.quantity}
                  </span>
                  <span className="receipt-price">Price: {element.price}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Link>
  );
}