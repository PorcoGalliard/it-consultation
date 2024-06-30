const db = require("../knex");

const createConsultant = (consultant) => {
  return db("consultants").insert(consultant).returning("*");
};

const findConsultantByEmail = (email) => {
  return db("consultants").where({ email }).first();
};

module.exports = {
  createConsultant,
  findConsultantByEmail,
};
