import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import {useState, useEffect} from 'react';

export default function ProductGrid({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  isFetching,
  setIsFetching,
  getQuantity,
}) {


  const [currentTab, setCurrentTab] = useState("all");
  const [searchValue, setSearchValue] = useState("");
  const [gridTitle, setGridTitle] = useState("Best Selling Products");

  const clothingProducts = products.filter((product) => product.category == 'clothing');
  const foodProducts = products.filter((product) => product.category == "food");
  const accessoriesProducts = products.filter((product) => product.category == "accessories");
  const techProducts = products.filter((product) => product.category == "tech");
  const searchProducts = products.filter((product) => product.name.toLowerCase().includes(searchValue));

  useEffect(() => {
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
                  setGridTitle("");
                }}
              ></input>
              <i className="material-icons">search</i>
            </div>
              <div className="cart">
                <a className="cart-a" href="/">
                  My Cart<i className="material-icons">shopping_cart</i>
                </a>

            </div>
          </div>
          <div className="subnav-row">
            <div className="subnav-heading">
              <button
                className="subnav-header"
                style={
                  currentTab == "all"
                    ? { borderBottom: "solid 2px #8EB1C7" }
                    : null
                }
                id="all"
                onClick={() => {setCurrentTab("all")}}
              >
                All Categories
              </button>
              <button
                className="subnav-header"
                id="clothing"
                style={
                  currentTab == "clothing"
                    ? { borderBottom: "solid 2px #8EB1C7" }
                    : null
                }
                onClick={() => {setCurrentTab("clothing");{setGridTitle("Clothing")}}}
              >
                Clothing
              </button>
              <button
                className="subnav-header"
                id="food"
                style={
                  currentTab == "food"
                    ? { borderBottom: "solid 2px #8EB1C7" }
                    : null
                }
                onClick={() => {setCurrentTab("food");{setGridTitle("Food")}}}
              >
                Food
              </button>
              <button
                className="subnav-header"
                id="accessories"
                style={
                  currentTab == "accessories"
                    ? { borderBottom: "solid 2px #8EB1C7"}
                    : null
                }
                onClick={() => {setCurrentTab("accessories");{setGridTitle("Accessories")}}}
                
              >
                Accessories
              </button>
              <button
                className="subnav-header"
                id="tech"
                style={
                  currentTab == "tech"
                    ? { borderBottom: "solid 2px #8EB1C7" }
                    : null
                }
                onClick={() => {setCurrentTab("tech");{setGridTitle("Tech")}}}
              >
                Tech
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-grid-content">
      <h3 className="grid-title">{gridTitle}</h3>
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