exports.up = function(knex) {
  return knex.schema.createTable("passports_to_restaurants", tbl => {
    tbl
      .integer("passport_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("passport");
    tbl
      .integer("restaurant_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("restaurants");
    tbl.primary(["passport_id", "restaurant_id"]);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("project_resources");
};
