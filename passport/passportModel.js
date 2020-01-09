const knex = require("knex");
const config = require("../knexfile.js");
const db = knex(config.development);

const findUserPassport = userid => {
  return db("passport").where("id", userid); // return master list of passport entries
};

// const addVisitedRestaurant = res => {
//   console.log("res => ", res);
//   return db("passport")
//     .join("restaurants", "passport.restaurant_id", "=", "restaurants.id")
//     .select("passport.restaurant_id")
//     .insert(res)
//     .then(response => {
//       console.log(".then route response => ", res);
//       console.log("the passport entry id => ", response);
//       return getRestaurantById(res.restaurant_id);
//     });
// };

const addVisitedRestaurant = res => {
  return db("passport")
    .where("id", res.id)
    .insert(res);
};

function getRestaurantById(id) {
  console.log("inputed id => ", id);
  return db("restaurants")
    .where({ id: id })
    .first();
}

const findUserById = id => {
  return db("user")
    .where("id", id)
    .first(); //Target specific user in db, or an empty array if it doesnt exist
};

module.exports = {
  findUserPassport,
  addVisitedRestaurant,
  getRestaurantById,
  findUserById
};

// {
//     id: 1,
//     name: 'Taco Bell',
//     city: 'Austin',
//     address: '1925 Airport Blvd',
//     description: 'Cheap tacos',
//     "id": 12,
//     "restaurant_id": 1,
//     "zipcode": "12345",
//     "phone_number": null,
//     "websiteURL": null,
//     "my_rating": null,
//     "notes": null,
//     "stamped": 0
//   }
