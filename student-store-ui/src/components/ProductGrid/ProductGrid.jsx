import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  isFetching,
  setIsFetching,
  getQuantity,
}) {
  const [currentTab, setCurrentTab] = React.useState("all");
  const [searchValue, setSearchValue] = React.useState("");

  const clothingProducts = products.filter((product) => {
    return product.category == "clothing";
  });
  const foodProducts = products.filter((product) => {
    return product.category == "food";
  });
  const accessoriesProducts = products.filter((product) => {
    return product.category == "accessories";
  });
  const techProducts = products.filter((product) => {
    return product.category == "tech";
  });
  const searchProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue);
  });

  React.useEffect(() => {
    setSearchValue("");
  }, [currentTab]);
  return (
    <div className="product-grid">
      <div className="sub-navbar">
        <div className="subnav-content">
          <div className="subnav-row">
            <div className="search-bar">
              <input
                className="subnav-input"
                type="text"
                name="search"
                placeholder="Search"
                value={searchValue}
                onChange={(event) => {
                  setSearchValue(event.target.value);
                  setCurrentTab("");
                }}
              ></input>
              <i class="material-icons">search</i>
            </div>
            <div className="row-links">
              <div class="cart">
                <a className="cart-a" href="/">
                  My Cart<i class="material-icons">shopping_cart</i>
                </a>
              </div>
            </div>
          </div>
          <div className="subnav-row">
            <div className="subnav-heading">
              <button
                className="sn-h"
                style={
                  currentTab == "all"
                    ? { borderBottom: "solid 2px #8EB1C7" }
                    : null
                }
                id="all"
                onClick={() => setCurrentTab("all")}
              >
                All Categories
              </button>
              <button
                className="sn-h"
                id="clothing"
                style={
                  currentTab == "clothing"
                    ? { borderBottom: "solid 2px #8EB1C7" }
                    : null
                }
                onClick={() => setCurrentTab("clothing")}
              >
                Clothing
              </button>
              <button
                className="sn-h"
                id="food"
                style={
                  currentTab == "food"
                    ? { borderBottom: "solid 2px #8EB1C7" }
                    : null
                }
                onClick={() => {
                  setCurrentTab("food");
                }}
              >
                Food
              </button>
              <button
                className="sn-h"
                id="accessories"
                style={
                  currentTab == "accessories"
                    ? { borderBottom: "solid 2px #8EB1C7" }
                    : null
                }
                onClick={() => setCurrentTab("accessories")}
              >
                Accessories
              </button>
              <button
                className="sn-h"
                id="tech"
                style={
                  currentTab == "tech"
                    ? { borderBottom: "solid 2px #8EB1C7" }
                    : null
                }
                onClick={() => setCurrentTab("tech")}
              >
                Tech
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-grid-content">
        <h3 className="best-selling-title">Best Selling Products</h3>
        <div className="grid">
          {currentTab == "all" &&
            products.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                productId={product.id}
                quantity={getQuantity(product.id)}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
              />
            ))}
          {currentTab == "clothing" &&
            clothingProducts.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                productId={product.id}
                quantity={getQuantity(product.id)}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
              />
            ))}
          {currentTab == "food" &&
            foodProducts.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                productId={product.id}
                quantity={getQuantity(product.id)}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
              />
            ))}
          {currentTab == "accessories" &&
            accessoriesProducts.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                productId={product.id}
                quantity={getQuantity(product.id)}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
              />
            ))}
          {currentTab == "tech" &&
            techProducts.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                productId={product.id}
                quantity={getQuantity(product.id)}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
              />
            ))}
          {currentTab == "" &&
            searchProducts.map((product, i) => (
              <ProductCard
                key={i}
                product={product}
                productId={product.id}
                quantity={getQuantity(product.id)}
                handleAddItemToCart={handleAddItemToCart}
                handleRemoveItemFromCart={handleRemoveItemFromCart}
                showDescription={false}
                isFetching={isFetching}
                setIsFetching={setIsFetching}
              />
            ))}
          {searchProducts.length == 0 && (
            <p className="no-products">No Products Available</p>
          )}
        </div>
      </div>
    </div>
  );
}