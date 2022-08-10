const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET reguest /products",
  });
});
router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling POST reguest /products",
  });
});
router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "123") {
    res.status(200).json({
      message: "Sprcial ID found",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "you passed and ID",
    });
  }
});
router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "update products",
  });
});
router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Delete products",
  });
});

module.exports = router;
