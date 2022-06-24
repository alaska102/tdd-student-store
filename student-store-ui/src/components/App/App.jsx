import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import NotFound from "../NotFound/NotFound";
import ProductDetail from "../ProductDetail/ProductDetail";
import Home from "../Home/Home";
import SubNavbar from "../SubNavbar/SubNavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "../Hero/Hero";
import axios from "axios";

export default function App() {
  let [products, setProducts] = React.useState([]);
  let [isFetching, setIsFetching] = React.useState(false);
  let [error, setError] = React.useState("");
  let [isOpen, setIsOpen] = React.useState(false);
  let [shoppingCart, setShoppingCart] = React.useState([]);
  let [checkoutForm, setCheckoutForm] = React.useState({ name: "", email: "" });

  React.useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
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
    let scCopy = shoppingCart;
    let scCopy2 = shoppingCart;
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        let newSC = shoppingCart
          .slice(0, i)
          .concat([
            { itemId: productId, quantity: shoppingCart[i].quantity + 1 },
          ]);
        newSC = newSC.concat(scCopy.slice(i + 1));
        setShoppingCart(newSC);
        return;
      }
    }
    scCopy.push({ itemId: productId, quantity: 1 });
    setShoppingCart(scCopy);
  };

  const handleRemoveItemFromCart = (productId) => {
    let scCopy = shoppingCart;
    let scCopy2 = shoppingCart;
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        if (shoppingCart[i].quantity !== 1) {

          let newSC = scCopy2
            .slice(0, i)
            .concat([
              { itemId: productId, quantity: shoppingCart[i].quantity - 1 },
            ]);
          newSC = newSC.concat(scCopy.slice(i + 1));
          setShoppingCart(newSC);
        } else {
          let newSC = scCopy2.slice(0, i).concat(scCopy.slice(i + 1));
          setShoppingCart(newSC);
        }
      }
    }
  };

  const handleOnCheckoutFormChange = (name, value) => {
    setCheckoutForm({ ...checkoutForm, [name]: value });
  };

  const handleOnSubmitCheckoutForm = () => {
    axios
      .post("https://codepath-store-api.herokuapp.com/store/checkout", {
        user: { name: checkoutForm.name, email: checkoutForm.email },
        shoppingCart: shoppingCart,
      })
      .then((response) => {
        setShoppingCart([]);
        setCheckoutForm({ email: "", name: "" });
      })
      .catch((e) => {
        setError(e);
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
                  />
                  <Home
                    products={products}
                    isFetching={isFetching}
                    setIsFetching={setIsFetching}
                    handleAddItemToCart={handleAddItemToCart}
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                    getQuantity={getQuantity}
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
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}