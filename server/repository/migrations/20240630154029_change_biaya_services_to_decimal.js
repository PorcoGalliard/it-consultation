/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("services", function (table) {
    table.decimal("biaya_service", 10, 2).alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("services", function (table) {
    table.string("biaya_service").alter();
  });
};
