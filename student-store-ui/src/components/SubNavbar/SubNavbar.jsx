import * as React from "react";
import "./SubNavbar.css";

export default function SubNavbar() {
  const [currentTab, setCurrentTab] = React.useState("sn-1");
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
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
  );
}