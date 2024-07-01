const db = require("../knex");

const createInvoice = (invoice) => {
  return db("invoices").insert(invoice).returning("*");
};

const getInvoiceById = (id) => {
  return db("invoices").where({ id }).first();
};

const updateInvoiceStatus = (id, status) => {
  return db("invoices").where({ id }).update({ status }).returning("*");
};

const getAllInvoicesByUserId = (userId) => {
  return db("invoices")
    .join("orders", "invoices.order_id", "=", "orders.id")
    .where("orders.user_id", userId)
    .select("invoices.*");
};

const getAllPaidOrdersByConsultantId = (consultantId) => {
  return db("invoices")
    .join("orders", "invoices.order_id", "=", "orders.id")
    .where("orders.consultant_id", consultantId)
    .andWhere("invoices.status", "paid")
    .select("invoices.*");
};

module.exports = {
  createInvoice,
  getInvoiceById,
  updateInvoiceStatus,
  getAllInvoicesByUserId,
  getAllPaidOrdersByConsultantId,
};
