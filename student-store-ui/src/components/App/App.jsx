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
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState({ name: "", email: "" });
  const [checkoutFormSubmitSuccess, setCheckoutFormSubmitSuccess] = React.useState(false);
  const [receipt, setReceipt] = React.useState({});

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
    let item = shoppingCart.find((x) => x.itemId === productId);

    if (item) {
      item.quantity++;
      setShoppingCart([...shoppingCart]);
    } else {
      setShoppingCart([...shoppingCart, { itemId: productId, quantity: 1 }]);
    }
  };

  const handleRemoveItemFromCart = (productId) => {
    let cartCopy = shoppingCart;
    let cartCopy2 = shoppingCart;
    for (var i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].itemId == productId) {
        if (shoppingCart[i].quantity !== 1) {
          let newSC = cartCopy2
            .slice(0, i)
            .concat([
              { itemId: productId, quantity: shoppingCart[i].quantity - 1 },
            ]);
          newSC = newSC.concat(cartCopy.slice(i + 1));
          setShoppingCart(newSC);
        } else {
          let newSC = cartCopy2.slice(0, i).concat(cartCopy.slice(i + 1));
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
      .post("https://codepath-store-api.herokuapp.com/store", {
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
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
