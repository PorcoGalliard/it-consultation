/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("service_tags", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
      table.uuid("tag_id").nullable();
      table.uuid("service_id").nullable();
      table.timestamps(true, true);

      table.foreign("tag_id").references("id").inTable("tags").onDelete("CASCADE");
      table.foreign("service_id").references("id").inTable("services").onDelete("CASCADE");
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("service_tags");
};
