/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("payment_methods", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
      table.string("method_name", 100).notNullable();
      table.jsonb('details').notNullable();
      table.timestamps(true, true);
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("payment_methods");
};
