const express = require("express");

const Restaurants = require("./restaurantModel.js");

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

module.exports = router;
