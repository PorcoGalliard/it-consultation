const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/usersControllers");

// TODO: MAIN
router.get("/", (req, res) => {
  res.render("userMain");
});

// TODO: PROFILE
router.get("/account/profile", (req, res) => {});

router.post("/account/profile", (req, res) => {});

router.patch("/account/profile", (req, res) => {});

router.delete("/account/profile", (req, res) => {});

// TODO: PAYMENT
router.get("/account/payment", (req, res) => {});

router.post("/account/payment", (req, res) => {});

router.delete("/account/payment", (req, res) => {});

// TODO: ORDERS
router.get("/account/orders", (req, res) => {});

router.get("/account/orders", (req, res) => {});

router.get("/account/orders/:id", (req, res) => {});

router.patch("/account/orders/:id", (req, res) => {});

router.delete("/account/orders/:id", (req, res) => {});

module.exports = router;
