const express = require("express");
const Passport = require("./passportModel.js");
const router = express.Router();
const restrictedMiddleware = require("../auth/restrictedMiddleware.js");

router.get("/:userid", restrictedMiddleware, (req, res) => {
  const userid = req.params.userid;
  console.log(":userid => ", userid);
  Passport.findUserPassport(userid)
    .then(passport => {
      res.status(200).json({ message: "the passport entries:", passport });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: "Failed to get passport"
      });
    });
});

// router.post("/:userid", (req, res) => {
//   const restaurantData = req.body;
//   const userid = req.params.userid;
//   //   const restaurantId = req.body.restaurant_id;
//   console.log("id => ", req.params.userid);
//   Passport.findUserById(userid)
//     .then(user => {
//       if (user) {
//         Passport.addVisitedRestaurant(restaurantData).then(restaurant => {
//           console.log("restaurant response => ", restaurant);
//           res.status(201).json({
//             message: "this restaurant was added to your passport",
//             restaurant
//           });
//         });
//       } else {
//         res
//           .status(404)
//           .json({ message: "Could not find passport with given user id" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ message: "Failed to add new restaurant" });
//     });
// });

router.post("/:userid", restrictedMiddleware, (req, res) => {
  const restaurantData = req.body;
  const userid = req.params.userid;
  Passport.findUserById(userid)
    .then(user => {
      if (user) {
        Passport.addVisitedRestaurant(restaurantData).then(response => {
          res.status(201).json({
            message: "this restaurant was added to your passport",
            restaurantData
          });
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to add a new restaurant" });
    });
});

module.exports = router;
