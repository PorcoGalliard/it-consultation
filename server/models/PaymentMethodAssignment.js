const db = require("../knex");

const assignPaymentMethod = (assignment) => {
  return db("payment_methods_assignments").insert(assignment).returning("*");
};

const findPaymentMethodsByUserId = (userId) => {
  return db("payment_methods_assignments")
    .where({ user_id: userId })
    .select("*");
};

const findPaymentMethodsByConsultantId = (consultantId) => {
  return db("payment_methods_assignments")
    .where({ consultant_id: consultantId })
    .select("*");
};

const removePaymentMethodAssignment = (id) => {
  return db("payment_methods_assignments").where({ id }).del();
};

module.exports = {
  assignPaymentMethod,
  findPaymentMethodsByUserId,
  findPaymentMethodsByConsultantId,
  removePaymentMethodAssignment,
};
