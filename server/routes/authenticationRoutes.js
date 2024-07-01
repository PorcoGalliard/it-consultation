const express = require("express");
const { body } = require("express-validator");
const AuthController = require("../controllers/authenticationControllers");
const ConsultantController = require("../controllers/consultantsControllers");
const router = express.Router();

router.get("/sign-up-selection", (req, res) => {
  res.render("authSelection");
});

router.get("/log-in-selection", (req, res) => {
  res.render("loginSelection");
});

// TODO: ADMIN
router.get("/admin/login", (req, res) => {});

router.post("/admin/login", (req, res) => {});

// TODO: BUYER
router.get("/user/login", (req, res) => {
  res.render("userLogin");
});

router.post(
  "/user/login",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  AuthController.userLogin
);

router.get("/user/register", (req, res) => {
  res.render("userRegister");
});

router.post(
  "/user/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[\W_]/)
      .withMessage("Password must contain at least one special character"),
    body("gender")
      .isIn(["male", "female"])
      .withMessage("Gender must be either male or female"),
  ],
  AuthController.userRegister
);

// TODO: CONSULTANT

router.get("/consultant/login", (req, res) => {
  res.render("consultantLogin");
});

router.post(
  "/consultant/login",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  AuthController.consultantLogin
);

router.get("/consultant/register", (req, res) => {
  res.render("consultantRegister");
});

router.post(
  "/consultant/register",
  [
    body("nama_brand").notEmpty().withMessage("Nama brand is required"),
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[\W_]/)
      .withMessage("Password must contain at least one special character"),
    body("NIK")
      .notEmpty()
      .withMessage("NIK is required")
      .isNumeric()
      .withMessage("NIK must be numeric")
      .isLength({ min: 16, max: 16 })
      .withMessage("NIK must be exactly 16 digits"),
    body("gender")
      .isIn(["male", "female"])
      .withMessage("Gender must be either male or female"),
  ],
  AuthController.consultantRegister
);

module.exports = router;
