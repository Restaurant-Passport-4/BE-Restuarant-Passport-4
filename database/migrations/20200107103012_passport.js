exports.up = function(knex) {
  return knex.schema.createTable("passport", passport => {
    passport.increments();
    passport.string("name", 128).notNullable();
    passport.string("city", 128).notNullable();
    passport.string("address", 128).notNullable();
    passport.string("description", 128).notNullable();
    // passport
    //   .integer("restaurant_id")
    //   .unsigned()
    //   .notNullable()
    //   .references("id")
    //   .inTable("restaurants")
    //   .onUpdate("CASCADE")
    //   .onDelete("CASCADE");
    // passport.string("zipcode", 5);
    // passport.string("phone_number", 11);
    // passport.string("websiteURL", 128);
    // passport.integer("my_rating");
    // passport.string("notes", 256);
    // passport.boolean("stamped").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("passport");
};
