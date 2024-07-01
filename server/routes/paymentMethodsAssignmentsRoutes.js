const express = require("express");
const { body, param } = require("express-validator");
const { authenticateToken } = require("../middlewares/authenticateToken");
const PaymentMethodAssignmentController = require("../controllers/paymentMethodAssignmentControllers");

const router = express.Router();

router.post(
  "/",
  authenticateToken,
  [
    body("payment_method_id")
      .notEmpty()
      .withMessage("Payment method ID is required"),
    body("user_id").optional(),
    body("consultant_id").optional(),
  ],
  PaymentMethodAssignmentController.createAssignment
);

router.get(
  "/user/:userId",
  authenticateToken,
  param("userId").notEmpty().withMessage("User ID is required"),
  PaymentMethodAssignmentController.getAssignmentsByUser
);

router.get(
  "/consultant/:consultantId",
  authenticateToken,
  param("consultantId").notEmpty().withMessage("Consultant ID is required"),
  PaymentMethodAssignmentController.getAssignmentsByConsultant
);

router.delete(
  "/:id",
  authenticateToken,
  param("id").notEmpty().withMessage("Assignment ID is required"),
  PaymentMethodAssignmentController.deleteAssignment
);

module.exports = router;
