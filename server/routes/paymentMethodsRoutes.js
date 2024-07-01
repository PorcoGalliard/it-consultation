const express = require("express");
const { body, param } = require("express-validator");
const PaymentMethodsController = require("../controllers/paymentMethodsControllers");
const { authenticateToken } = require("../middlewares/authenticateToken");
const router = express.Router();

router.post(
  "/",
  authenticateToken,
  [
    body("method_name").notEmpty().withMessage("Method name is required"),
    body("details").notEmpty().withMessage("Details are required"),
  ],
  PaymentMethodsController.create
);

router.get("/", authenticateToken, PaymentMethodsController.getAll);

router.get(
  "/:id",
  authenticateToken,
  param("id").notEmpty().withMessage("ID is required"),
  PaymentMethodsController.getById
);

router.put(
  "/:id",
  authenticateToken,
  [
    param("id").notEmpty().withMessage("ID is required"),
    body("method_name")
      .optional()
      .notEmpty()
      .withMessage("Method name is required"),
    body("details").optional().notEmpty().withMessage("Details are required"),
  ],
  PaymentMethodsController.update
);

router.delete(
  "/:id",
  authenticateToken,
  param("id").notEmpty().withMessage("ID is required"),
  PaymentMethodsController.delete
);

module.exports = router;
