/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.alterTable("orders", function (table) {
      table.decimal("total_biaya", 10, 2).alter();
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable("orders", function (table) {
        table.string("total_biaya").alter();
      });
};
