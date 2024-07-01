const express = require("express");
const { body, param } = require("express-validator");
const ServiceTagController = require("../controllers/serviceTagControllers");
const { authenticateToken } = require("../middlewares/authenticateToken");

const router = express.Router();

router.post(
  "/",
  authenticateToken,
  [
    body("tag_id").notEmpty().withMessage("Tag ID is required"),
    body("service_id").notEmpty().withMessage("Service ID is required"),
  ],
  ServiceTagController.create
);

router.get("/", authenticateToken, ServiceTagController.getAll);

router.get(
  "/:id",
  authenticateToken,
  param("id").notEmpty().withMessage("ServiceTag ID is required"),
  ServiceTagController.getById
);

router.get(
  "/service/:service_id",
  authenticateToken,
  param("service_id").notEmpty().withMessage("Service ID is required"),
  ServiceTagController.getByServiceId
);

router.delete(
  "/:id",
  authenticateToken,
  param("id").notEmpty().withMessage("ServiceTag ID is required"),
  ServiceTagController.delete
);

module.exports = router;
