const express = require("express");
const authenticationRoutes = require("./routes/authenticationRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const orderRoutes = require("./routes/orderRoutes");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authenticationRoutes);
app.use("/consultant-services", serviceRoutes);
app.use("/orders", orderRoutes);
app.use(errorHandler);

app.use(function (req, res, next) {
  res.render("notFound");
});

app.listen(port, () => {
  console.log("like a point in the sky");
});
