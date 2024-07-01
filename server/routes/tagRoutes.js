const express = require("express");
const { body, param } = require("express-validator");
const TagController = require("../controllers/tagControllers");
const { authenticateToken } = require("../middlewares/authenticateToken");
const checkAdmin = require("../middlewares/checkAdmin");

const router = express.Router();

router.post(
  "/",
  authenticateToken,
  checkAdmin,
  body("nama_tag").notEmpty().withMessage("Nama tag is required"),
  TagController.create
);

// router.get("/", authenticateToken, TagController.getAll);
router.get("/", TagController.getAll);


router.get(
  "/:id",
  authenticateToken,
  param("id").notEmpty().withMessage("Tag ID is required"),
  TagController.getById
);

router.patch(
  "/:id",
  authenticateToken,
  checkAdmin,
  param("id").notEmpty().withMessage("Tag ID is required"),
  body("nama_tag").optional().notEmpty().withMessage("Nama tag is required"),
  TagController.update
);

router.delete(
  "/:id",
  authenticateToken,
  checkAdmin,
  param("id").notEmpty().withMessage("Tag ID is required"),
  TagController.delete
);

module.exports = router;
