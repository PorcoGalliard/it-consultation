const db = require("../knex");

const createServiceTag = (serviceTag) => {
  return db("service_tags").insert(serviceTag).returning("*");
};

const getAllServiceTags = () => {
  return db("service_tags").select("*");
};

const getServiceTagById = (id) => {
  return db("service_tags").where({ id }).first();
};

const getServiceTagsByServiceId = (service_id) => {
  return db("service_tags").where({ service_id }).select("*");
};

const deleteServiceTag = (id) => {
  return db("service_tags").where({ id }).del();
};

module.exports = {
  createServiceTag,
  getAllServiceTags,
  getServiceTagById,
  getServiceTagsByServiceId,
  deleteServiceTag,
};
