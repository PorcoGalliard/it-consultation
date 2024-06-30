/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable("orders", function(table) {
        table.dropForeign("service_id");
    
        table.foreign("service_id").references("id").inTable("services").onDelete("CASCADE");
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable("orders", function(table) {
        table.dropForeign("service_id");

        table.foreign("service_id").references("id").inTable("payment_methods").onDelete("CASCADE");
      });
};
