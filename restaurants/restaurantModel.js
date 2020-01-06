const db = require("../database/dbConfig.js");

function find() {
  return db("restaurants").select(
    "id",
    "name",
    "city",
    "address",
    "description"
  );
}

function findBy(filter) {
  return db("restaurants").where(filter);
}

const add = restaurant => {
  return db("restaurants").insert(restaurant);
};

function findById(id) {
  return db("restaurants")
    .where({ id })
    .first();
}

module.exports = {
  add,
  find,
  findBy,
  findById
};
