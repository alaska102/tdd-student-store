const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");
const TAX_RATE = 0.0875

class Store {
  static listProducts() {
    const products = storage.get("products").value();
    return products;
  }
  static listPurchases() {
    const purchases = storage.get("purchases").value();
    return purchases;
  }

  static fetchPurchaseById(purchaseId) {
    const purchase = storage
      .get("purchases")
      .find({ id: Number(purchaseId) })
      .value();

    return purchase;
  }

  static fetchProductById(itemId) {
    const product = storage
      .get("products")
      .find({ id: Number(itemId) })
      .value();

    return product;
  }

  static createNewPurchase(shoppingCart, user) {
    if (shoppingCart.length == 0 || user.name == "" || user.email == "") {
      throw new BadRequestError("The user info or shopping cart is missing");
    }

    var seen = {};
    var hasDuplicates = shoppingCart.some(function (currentObject) {
      return (
        seen.hasOwnProperty(currentObject.itemId) ||
        (seen[currentObject.itemId] = false)
      );
    });

    if (hasDuplicates) {
      throw new BadRequestError("The cart has duplicates");
    }

    for (let i = 0; i < shoppingCart.length; i++) {
      if (!shoppingCart[i].quantity || !shoppingCart[i].itemId) {
        throw new BadRequestError(
          "Item is missing quantity or ID"
        );
      }
    }

    let calculatedTotal = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      let quantity = shoppingCart[i].quantity;
      let itemId = shoppingCart[i].itemId;
      let unitPrice = Store.fetchProductById(itemId).price;
      calculatedTotal = calculatedTotal + quantity * unitPrice;
    }

    calculatedTotal = calculatedTotal + TAX_RATE * calculatedTotal;
    let newPurchase = {
      id: storage.get("purchases").value().length + 1,
      name: user.name,
      email: user.email,
      order: shoppingCart,
      total: calculatedTotal,
      createdAt: new Date().toISOString(),
      recipt: {
        userInfo: {
          name: user.name,
          email: user.email, 
          text: [`Showing receipt for ${user.name} available at ${user.email}:`]
        }

      }

    };

    storage.get("purchases").push(newPurchase).write();
    return newPurchase;
  }
}

module.exports = Store;