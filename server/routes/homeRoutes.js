const express = require("express");
const router = express.Router();
const tagControllers = require("../controllers/tagControllers");

router.get("/", async (req, res, next) => {
  try {
    const tags = await tagControllers.getAll;
    console.log(tags);
    res.render("home", { tags });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
