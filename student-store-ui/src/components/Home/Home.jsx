import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

export default function Home({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  isFetching,
  setIsFetching,
  getQuantity,
}) {
  return (
    // Renders JSX that is wrapped by a `div` element with a `className` of `home`
    <div className="home">
      {/* renders `Hero` */}
      <Hero />
      {/* renders `ProductGrid` */}
      <ProductGrid
        products={products}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        isFetching={isFetching}
        setIsFetching={setIsFetching}
        getQuantity={getQuantity}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
