exports.up = function(knex) {
  return knex.schema.createTable("bnb", bnb => {
    bnb.increments();
    bnb
      .integer("planner_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    bnb.text("bath_number", 20).notNullable();
    bnb.text("bed_number", 20).notNullable();
    bnb.text("zip", 20).notNullable();
    bnb.text("address", 20).notNullable();
    bnb.text("city", 20).notNullable();
    bnb.text("state", 120).notNullable();
    bnb.text("email", 20).notNullable();
    bnb.text("sqft", 20).notNullable();
    bnb.text("date", 20).notNullable();
    bnb
      .integer("price")
      .notNullable()
      .unsigned();
    bnb
      .integer("reserved")
      .unsigned()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("bnb");
};
