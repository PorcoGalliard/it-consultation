/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("payment_methods_assignments", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
      table.uuid("user_id").nullable();
      table.uuid("consultant_id").nullable();
      table.uuid("payment_method_id").notNullable();
      table.timestamps(true, true);
  
      // Foreign key constraints
      table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
      table.foreign("consultant_id").references("id").inTable("consultants").onDelete("CASCADE");
      table.foreign("payment_method_id").references("id").inTable("payment_methods").onDelete("CASCADE");
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("payment_methods_assignments");
};
