const db = require("../knex");

const createTag = (tag) => {
  return db("tags").insert(tag).returning("*");
};

const getAllTags = () => {
  return db("tags").select("*");
};

const getTagById = (id) => {
  return db("tags").where({ id }).first();
};

const updateTag = (id, tag) => {
  return db("tags").where({ id }).update(tag).returning("*");
};

const deleteTag = (id) => {
  return db("tags").where({ id }).del();
};

module.exports = {
  createTag,
  getAllTags,
  getTagById,
  updateTag,
  deleteTag,
};
