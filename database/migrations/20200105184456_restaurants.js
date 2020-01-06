exports.up = function(knex) {
  return knex.schema.createTable("restaurants", restaurants => {
    restaurants.increments();

    restaurants.string("name", 128).notNullable();
    restaurants.string("city", 128).notNullable();
    restaurants.string("address", 128).notNullable();
    restaurants.string("description", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("restaurants");
};
