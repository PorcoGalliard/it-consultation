const db = require("../knex");

const createUser = (user) => {
  return db("users").insert(user).returning("*");
};

const findUserByEmail = (email) => {
  return db("users").where({ email }).first();
};

module.exports = {
  createUser,
  findUserByEmail,
};
