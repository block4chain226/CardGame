const express = require("express");
const router = express.Router();
const order = require("./order.js");
router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "get request to /product",
    //message: order.getOrder,
  });
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "post request to /product",
  });
});
module.exports = router;
