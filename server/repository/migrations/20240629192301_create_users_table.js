/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.string("username").notNullable();
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("nomor_telepon");
    table.text("picture");
    table.enu("gender", ["male", "female"]).notNullable();
    table.string("alamat");
    table.date("tanggal_lahir");
    table.boolean("is_admin").defaultTo(false);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
