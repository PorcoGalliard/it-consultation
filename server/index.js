const express = require("express");
const path = require("path");

// BE
const authenticationRoutes = require("./routes/authenticationRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const orderRoutes = require("./routes/orderRoutes");
const paymentMethodRoutes = require("./routes/paymentMethodsRoutes");
const paymentMethodAssignmentRoutes = require("./routes/paymentMethodsAssignmentsRoutes");
const tagRoutes = require("./routes/tagRoutes");
const serviceTagRoutes = require("./routes/serviceTagRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/usersRoutes");
const errorHandler = require("./middlewares/errorHandler");

// FE

require("dotenv").config();

const app = express();
const port = 3000;

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// BE
app.use("/auth", authenticationRoutes);
app.use("/consultant-services", serviceRoutes);
app.use("/orders", orderRoutes);
app.use("/payment-methods", paymentMethodRoutes);
app.use("/payment-method-assignments", paymentMethodAssignmentRoutes);
app.use("/tags", tagRoutes);
app.use("/service-tags", serviceTagRoutes);
app.use("/invoice", invoiceRoutes);

// FE
app.use("/", homeRoutes);
app.use("/users", userRoutes);

app.use(errorHandler);

app.use(function (req, res, next) {
  res.render("notFound");
});

app.listen(port, () => {
  console.log("like a point in the sky");
});
