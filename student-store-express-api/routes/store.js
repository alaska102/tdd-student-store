const Store = require("../models/store");
const { NotFoundError, BadRequestError } = require("../utils/errors");
const express = require("express");
const router = express.Router();

router.get("/store", async (req, res, next) => {
  try {
    const products = await Store.listProducts();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});
router.get("/purchases", async (req, res, next) => {
  try {
    const purchases = await Store.listPurchases();
    res.status(200).json({ purchases });
  } catch (err) {
    next(err);
  }
});

router.get("/purchases/:purchaseId", async (req, res, next) => {
  try {
    const purchaseId = req.params.purchaseId;
    const purchase = await Store.fetchPurchaseById(purchaseId);
    if (!purchase) {
      throw new NotFoundError("Order not found");
    }
    res.status(200).json({ purchase });
  } catch (err) {
    next(err);
  }
});

router.get("/store/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Store.fetchProductById(productId);
    if (!product) {
      throw new NotFoundError("Transaction not found");
    }
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
});

router.post("/store", async (req, res, next) => {
  try {
    const shoppingCart = req.body.shoppingCart;
    const user = req.body.user;

    const newPurchase = await Store.createNewPurchase(shoppingCart, user);
    res.status(201).json({ purchase: newPurchase });
  } catch (err) {
    next(err);
  }
});
module.exports = router;