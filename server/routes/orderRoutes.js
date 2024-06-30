const express = require("express");
const { body, param } = require("express-validator");
const OrderController = require("../controllers/ordersControllers");
const { authenticateToken } = require("../middlewares/authenticateToken");
const router = express.Router();

router.post(
  "/",
  authenticateToken,
  [
    body("total_biaya")
      .isDecimal()
      .withMessage("Total biaya must be a decimal"),
    body("user_id")
      .optional()
      .isUUID()
      .withMessage("User ID must be a valid UUID"),
    body("consultant_id")
      .optional()
      .isUUID()
      .withMessage("Consultant ID must be a valid UUID"),
    body("service_id").isUUID().withMessage("Service ID must be a valid UUID"),
  ],
  OrderController.create
);

router.get("/", authenticateToken, OrderController.getAll);

router.get(
  "/:id",
  authenticateToken,
  param("id").isUUID().withMessage("Order ID must be a valid UUID"),
  OrderController.getById
);

router.delete(
  "/:id",
  authenticateToken,
  param("id").isUUID().withMessage("Order ID must be a valid UUID"),
  OrderController.remove
);

module.exports = router;
