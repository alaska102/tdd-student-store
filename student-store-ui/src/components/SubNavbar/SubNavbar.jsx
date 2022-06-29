import * as React from "react";
import "./SubNavbar.css";
import {useState, useEffect} from 'react';


export default function SubNavbar() {
  const [currentTab, setCurrentTab] = useState("sn-1");
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    setSearchValue("");
  }, [currentTab]);
  
  return (
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
            <i className="material-icons">search</i>
          </div>
          <div className="row-links">
            <div className="cart">
              <a className="cart-a" href="/">
                My Cart<i className="material-icons">shopping_cart</i>
              </a>
            </div>
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
              onClick={() => setCurrentTab("all")}
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
              onClick={() => setCurrentTab("clothing")}
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
              onClick={() => {
                setCurrentTab("food");
              }}
            >
              Food
            </button>
            <button
              className="subnav-header"
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
              className="subnav-header"
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
  );
}