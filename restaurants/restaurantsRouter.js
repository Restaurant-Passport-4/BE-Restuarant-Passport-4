const express = require("express");

const Restaurants = require("./restaurantsModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Restaurants.find()
    .then(restaurants => {
      res.json(restaurants);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to retrieve restaurants" });
    });
});

router.post("/", (req, res) => {
  const restaurantData = req.body;
  Restaurants.add(restaurantData)
    .then(restaurant => {
      res.status(201).json({ message: "restaurant added", restaurant });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: `Failed to create new restaurant`
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Restaurants.findById(id)
    .then(restaurant => {
      if (restaurant) {
        res.json(restaurant);
      } else {
        res
          .status(404)
          .json({ message: "Could not find restaurant with given id." });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to get restaurant" });
    });
});

module.exports = router;
