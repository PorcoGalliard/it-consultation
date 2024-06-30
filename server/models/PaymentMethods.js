const db = require("../knex");

const createPaymentMethod = (method) => {
  return db("payment_methods").insert(method).returning("*");
};

const findPaymentMethodById = (id) => {
  return db("payment_methods").where({ id }).first();
};

const findAllPaymentMethods = () => {
  return db("payment_methods").select("*");
};

const updatePaymentMethod = (id, updatedFields) => {
  return db("payment_methods")
    .where({ id })
    .update(updatedFields)
    .returning("*");
};

const deletePaymentMethod = (id) => {
  return db("payment_methods").where({ id }).del();
};

module.exports = {
  createPaymentMethod,
  findPaymentMethodById,
  findAllPaymentMethods,
  updatePaymentMethod,
  deletePaymentMethod,
};
