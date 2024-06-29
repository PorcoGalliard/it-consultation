/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("services", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
      table.string("nama_service").notNullable();
      table.string("deskripsi").notNullable();
      table.string("biaya_service").notNullable();
      table.integer("views")
      table.uuid("consultant_id").nullable();
      table.timestamps(true, true);


      table.foreign("consultant_id").references("id").inTable("consultants").onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("services");
};
