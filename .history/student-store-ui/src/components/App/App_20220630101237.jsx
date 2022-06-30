import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import Home from "../Home/Home";
import SubNavbar from "../SubNavbar/SubNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react';
import PurchaseGrid from "../PurchaseGrid/PurchaseGrid";
import "./App.css";
import Hero from "../Hero/Hero";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });
  const [checkoutFormSubmitSuccess, setCheckoutFormSubmitSuccess] = useState(false);
  const [receipt, setReceipt] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3001/store")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((e) => {
        setError(e);
      });
  }, []);

  const getQuantity = (productId) => {
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        return shoppingCart[i].quantity;
      }
    }
    return 0;
  };

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddItemToCart = (productId) => {
    let item = shoppingCart.find((x) => x.itemId === productId);

    if (item) {
      item.quantity++;
      setShoppingCart([...shoppingCart]);
    } else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }]);
    }
  };

  const handleRemoveItemFromCart = (productId) => {
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        if (shoppingCart[i].quantity !== 1) {
          let newSC = shoppingCart
            .slice(0, i)
            .concat([
              { itemId: productId, quantity: shoppingCart[i].quantity - 1 },
            ]);
          newSC = newSC.concat(shoppingCart.slice(i + 1));
          setShoppingCart(newSC);
        } else {
          let newSC = shoppingCart.slice(0, i).concat(shoppingCart.slice(i + 1));
          setShoppingCart(newSC);
        }
      }
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  const handleOnSubmitCheckoutForm = () => {
    setError("");
    axios
      .post("http://localhost:3001/store", {
        user: { name: checkoutForm.name, email: checkoutForm.email },
        shoppingCart: shoppingCart,
      })
      .then((response) => {
        setShoppingCart([]);
        setCheckoutForm({ email: "", name: "" });
        if (response.status == 201) {
          setCheckoutFormSubmitSuccess(true);
          setReceipt({ ...response.data.purchase });
        }
      })
      .catch((e) => {
        setError(e.response.data.error.message);
        setCheckoutFormSubmitSuccess(false);
      });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <Sidebar
                    isOpen={isOpen}
                    shoppingCart={shoppingCart}
                    products={products}
                    checkoutForm={checkoutForm}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                    handleOnToggle={handleOnToggle}
                    setCheckoutFormSubmitSuccess={setCheckoutFormSubmitSuccess}
                    checkoutFormSubmitSuccess={checkoutFormSubmitSuccess}
                    receipt={receipt}
                    setReceipt={setReceipt}
                    error={error}
                  />
                  <Home
                    products={products}
                    isFetching={isFetching}
                    setIsFetching={setIsFetching}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    getQuantity={getQuantity}
                    checkoutFormSubmitSuccess={checkoutFormSubmitSuccess}
                  />
                </>
              }
            />
            <Route
              path="/products/:productId"
              element={
                <>
                  <Navbar />
                  <Sidebar
                    isOpen={isOpen}
                    shoppingCart={shoppingCart}
                    products={products}
                    checkoutForm={checkoutForm}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                    handleOnToggle={handleOnToggle}
                    setCheckoutFormSubmitSuccess={setCheckoutFormSubmitSuccess}
                    checkoutFormSubmitSuccess={checkoutFormSubmitSuccess}
                    receipt={receipt}
                    setReceipt={setReceipt}
                    error={error}
                  />
                  <Hero />
                  <SubNavbar />
                  <ProductDetail
                    isFetching={isFetching}
                    setIsFetching={setIsFetching}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    getQuantity={getQuantity}
                  />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/purchases" element={<PurchaseGrid />}/>
            <Route path="/purchases/:purchaseId"/>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
