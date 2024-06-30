const express = require("express");
const { body, param } = require("express-validator");
const ConsultantServiceController = require("../controllers/consultantServiceController");
const { authenticateToken } = require("../middlewares/authenticateToken");
const router = express.Router();

// TODO: SEE ALL SERVICES
router.get("/services", ConsultantServiceController.getAll);

router.get(
  "/services/:id",
  param("id").notEmpty().withMessage("Service id is required"),
  ConsultantServiceController.getById
);

router.get(
  "/consultants/:consultantId/services",
  param("consultantId").notEmpty().withMessage("Consultant ID is required"),
  ConsultantServiceController.getByConsultantId
);

router.post(
  "/services",
  authenticateToken,
  [
    body("nama_service").notEmpty().withMessage("Nama service is required"),
    body("deskripsi").notEmpty().withMessage("Deskripsi is required"),
    body("biaya_service").notEmpty().withMessage("Biaya service is required"),
    body("consultant_id").notEmpty().withMessage("Consultant ID is required"),
  ],
  ConsultantServiceController.create
);

router.patch(
  "/services/:id",
  authenticateToken,
  [
    param("id").notEmpty().withMessage("Service ID is required"),
    body("nama_service")
      .optional()
      .notEmpty()
      .withMessage("Nama service is required"),
    body("deskripsi")
      .optional()
      .notEmpty()
      .withMessage("Deskripsi is required"),
    body("biaya_service")
      .optional()
      .notEmpty()
      .withMessage("Biaya service is required"),
  ],
  ConsultantServiceController.edit
);

router.delete(
  "/services/:id",
  authenticateToken,
  param("id").notEmpty().withMessage("Service ID is required"),
  ConsultantServiceController.remove
);

// TODO: ORDER A SERVICE
router.post("/order", (req, res) => {});

router.patch("/order/:id", (req, res) => {});

router.delete("/order/:id", (req, res) => {});

// TODO: SEE SERVICES RATING
router.get("/:id/rating", (req, res) => {});

router.post("/:id/rating", (req, res) => {});

module.exports = router;
