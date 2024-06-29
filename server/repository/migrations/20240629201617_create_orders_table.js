/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("orders", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
      table.string("total_biaya").notNullable();
      table.integer("rating").nullable();
      table.text("review").nullable();
      table.uuid("user_id").nullable();
      table.uuid("consultant_id").nullable();
      table.uuid("service_id").nullable();
      table.timestamps(true, true);
  
      // Foreign key constraints
      table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
      table.foreign("consultant_id").references("id").inTable("consultants").onDelete("CASCADE");
      table.foreign("service_id").references("id").inTable("payment_methods").onDelete("CASCADE");
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("orders");
};
