const express = require("express")
const router = express.Router();

// TODO: PROFILE
router.get("/account/profile", (req, res) => {})

router.post("/account/profile", (req, res) => {})

router.patch("/account/profile", (req, res) => {})

router.delete("/account/profile", (req, res) => {})

// TODO: PAYMENT
router.get("/account/payment", (req, res) => {})

router.post("/account/payment", (req, res) => {})

router.delete("/account/payment", (req, res) => {})

// TODO: PORTFOLIO

router.get("/account/portfolio", (req, res) => {})

router.post("/account/portfolio", (req, res) => {})

router.patch("/account/portfolio", (req, res) => {})

router.delete("/account/portfolio", (req, res) => {})

// TODO: SERVICES

router.get("/account/services", (req, res) => {})

router.post("/account/services", (req, res) => {})

router.get("/account/services/:id", (req, res) => {})

router.patch("/account/services/:id", (req, res) => {})

router.delete("/account/services/:id", (req, res) => {})

// TODO: ORDERS

router.get("/account/orders", (req, res) => {})

router.get("/account/orders/:id", (req, res) => {})

router.delete("/account/orders/:id", (req, res) => {})