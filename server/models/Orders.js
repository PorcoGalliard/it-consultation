const db = require("../knex");

const createOrder = (order) => {
  return db("orders").insert(order).returning("*");
};

const getAllOrders = () => {
  return db("orders").select("*");
};

const getOrderById = (id) => {
  return db("orders").where({ id }).first();
};

const deleteOrder = (id) => {
  return db("orders").where({ id }).del();
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  deleteOrder,
};
