const db = require("../knex");

const getAllServices = () => {
  return db("services").select("*");
};

const getServiceById = (id) => {
  return db("services").where({ id }).first();
};

const getServicesByConsultantId = (consultantId) => {
  return db("services").where({ consultant_id: consultantId });
};

module.exports = {
  getAllServices,
  getServiceById,
  getServicesByConsultantId,
};
