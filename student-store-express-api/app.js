const express = require("express");
const app = express();
const morgan = require("morgan");
const router = require("./routes/store");
const { NotFoundError } = require("./utils/errors");
app.use(morgan("tiny"));
app.use(express.json());
app.use("/", router);

app.get("/", (req, res, next) => {
  res.status(200).json({ ping : "pong" });
});

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  let status = error.status || 500;
  let msg = error.message || "Something went wrong";
  return res.status(status).json({ error: { status, msg } });
});

module.exports = app;