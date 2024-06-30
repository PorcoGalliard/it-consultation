const db = require("../knex");

const createService = (service) => {
  return db("services").insert(service).returning("*");
};

const findServiceById = (id) => {
  return db("services").where({ id }).first();
};

const updateService = (id, updatedFields) => {
  return db("services").where({ id }).update(updatedFields).returning("*");
};

const deleteService = (id) => {
  return db("services").where({ id }).del();
};

module.exports = {
  createService,
  findServiceById,
  updateService,
  deleteService,
};
