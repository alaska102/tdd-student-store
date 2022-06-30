import * as React from "react";
import "./OrderDetails.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import OrderDetail from "../OrderDetail/OrderDetail";
import NotFound from "../NotFound/NotFound";
import Hero from "../Hero/Hero";

export default function OrderDetails({ isFetching, setIsFetching }) {
  const [order, setOrder] = React.useState({});
  let { orderId } = useParams();

  const [notFound, setNotFound] = React.useState(false);

  React.useEffect(() => {
    setIsFetching(true);
    axios
      .get(`http://localhost:3001/store/orders/${orderId}`)
      .then(function (response) {
        setOrder(response.data.order.purchase);
        setIsFetching(false);
      })
      .catch((error) => {
        setNotFound(true);
      });
  }, []);

  if (notFound) {
    return <NotFound></NotFound>;
  }
  return (
    <div className="order-detail-wrapper">
      <div className="spacer"></div>
      <Hero></Hero>
      <div className="order-detail">
        {isFetching ? (
          <h1 className="loading">Loading</h1>
        ) : (
          <OrderDetail
            className="order-detail-component"
            order={order}
            orderId={orderId}
            showDescription={true}
          />
        )}
      </div>
    </div>
  );
}