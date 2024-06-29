/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable("invoices", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
      table.string("invoice_number").defaultTo(knex.raw("gen_random_uuid")).notNullable();
      table.date("issue_date").defaultTo(knex.fn.now());
      table.date("due_date").defaultTo(knex.raw("CURRENT_DATE + INTERVAL '1 day'"));
      table.decimal("total_amount", 10, 2).notNullable();
      table.enu("status", ["paid", "unpaid"]).notNullable();

      table.uuid("order_id").nullable();
      table.uuid("payment_method_id").nullable();
      table.timestamps(true, true);
  
      // Foreign key constraints
      table.foreign("order_id").references("id").inTable("orders").onDelete("CASCADE");
      table.foreign("payment_method").references("id").inTable("payment_methods").onDelete("CASCADE");
    });
  };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("invoices");
};
