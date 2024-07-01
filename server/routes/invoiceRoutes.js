const express = require("express");
const { body, param } = require("express-validator");
const InvoiceController = require("../controllers/invoiceControllers");
const { authenticateToken } = require("../middlewares/authenticateToken");

const router = express.Router();

router.post(
  "/",
  authenticateToken,
  [
    body("total_amount").notEmpty().withMessage("Total amount is required"),
    body("order_id").notEmpty().withMessage("Order ID is required"),
    body("payment_method_id")
      .notEmpty()
      .withMessage("Payment Method ID is required"),
  ],
  InvoiceController.create
);

router.get(
  "/:id",
  authenticateToken,
  param("id").notEmpty().withMessage("Invoice ID is required"),
  InvoiceController.getById
);

router.patch(
  "/:id/status",
  authenticateToken,
  [
    param("id").notEmpty().withMessage("Invoice ID is required"),
    body("status")
      .notEmpty()
      .withMessage("Status is required")
      .isIn(["paid", "unpaid"])
      .withMessage("Invalid status"),
  ],
  InvoiceController.updateStatus
);

router.get(
  "/user/:userId",
  authenticateToken,
  param("userId").notEmpty().withMessage("User ID is required"),
  InvoiceController.getAllByUserId
);

router.get(
  "/consultant/:consultantId",
  authenticateToken,
  param("consultantId").notEmpty().withMessage("Consultant ID is required"),
  InvoiceController.getAllPaidOrdersByConsultantId
);

module.exports = router;
