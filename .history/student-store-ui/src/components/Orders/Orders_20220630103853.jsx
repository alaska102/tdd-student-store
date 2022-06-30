import * as React from "react";
import "./Orders.css";
import OrderDetail from "../OrderDetail/OrderDetail";
import "./Orders.css";
import axios from "axios";

export default function Orders({ setIsFetching }) {
  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    setIsFetching(true);
    axios
      .get("http://localhost:3001/store/orders")
      .then(function (response) {
        setOrders(response.data.orders);
      })
      .catch(function (getError) {
        setError(true);
      });
  }, []);

  return (
    <div id="orders" className="orders">
      <div className="spacer"></div>
      <div className="content">
        <h3>Orders</h3>

        {orders.length !== 0 && (
          <div className="wrapper">
            <div className="header-row" id="all-orders-header">
              <span className="flex-2" id="order-column-1">
                Name
              </span>
              <span className="center" id="order-column-2">
                Email
              </span>
              <span className="center" id="order-column-3">
                Total Cost
              </span>
            </div>
            <div className="grid">
              {orders.map((element) => {
                return (
                  <OrderDetail
                    order={element.purchase}
                    orderId={element.purchase.id}
                    key={element.purchase.id}
                    showDescription={false}
                  ></OrderDetail>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}